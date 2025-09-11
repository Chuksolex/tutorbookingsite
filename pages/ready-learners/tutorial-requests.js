import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function CustomRequests() {
  const { data: session } = useSession();
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  // ✅ Only premium tutors can apply
  const canApply =
    session?.user?.role === "tutor" &&
    session?.user?.membership?.status === "premium";

  // ✅ Fetch requests from API
  useEffect(() => {
    const fetchRequests = async () => {
         setLoading(true);

      try {
        const res = await fetch("/api/student/custom-request");
        const data = await res.json();
        setRequests(data);
      } catch (err) {
                setLoading(false);

        console.error("Error fetching requests:", err);
      }
    };
    fetchRequests();
  }, []);

  // ✅ Handle Apply
  const handleApply = async (e) => {
    e.preventDefault();
    if (!selectedRequest) return;

    setLoading(true);
    setFeedback("");

    try {
      const res = await fetch("/api/student/custom-request?action=contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customRequestId: selectedRequest._id,
          message,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setFeedback("Application submitted successfully ✅");
        setMessage("");
      } else {
        setFeedback(data.message || "Error submitting application ❌");
      }
    } catch (err) {
      console.error(err);
      setFeedback("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Custom Requests</h1>

      {loading && requests.length === 0 && (
        <p className="text-center">Loading requests...</p>
      )}
      {requests.length === 0 && !loading && (
        <p className="text-center">No custom requests available.</p>
      )}

      <div className="row">

        {requests.map((req) => (
          <div className="col-md-4 mb-4" key={req._id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <Image  
                  src={req.user?.imageUrl || "/profileimg.jpg"}
                  alt={req.user?.name || ""}
                  className="border-2 border-warning rounded-circle mb-3"
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                  
                />
                <strong className="ms-4 fs-4">
                  {req.user?.name || "Unknown"}
                </strong>
                <h5 className="card-title">{req.title}</h5>
                <p className="card-text">
                  Mode of Lesson: {req.modeOfLesson}
                </p>
                <p className="card-text">
                  <strong>Budget</strong>: ${req.budget}/hour
                </p>
                <p className="card-text">
                  <strong>Address</strong>: {req.address}
                </p>
                <p className="card-text">{req.description}</p>
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#f3a90aff", border: "none" }}
                  data-bs-toggle="modal"
                  data-bs-target="#applyModal"
                  onClick={() => setSelectedRequest(req)}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="applyModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {canApply
                  ? `Apply for: ${selectedRequest?.title}`
                  : "Action Required"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {canApply ? (
                // ✅ Premium Tutor Application Form
                <form onSubmit={handleApply}>
                  <div className="mb-3">
                    <label className="form-label">
                      Why are you the best fit?
                    </label>
                    <textarea
                      className="form-control"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your pitch here..."
                      required
                    ></textarea>
                  </div>
                  {feedback && (
                    <p
                      className={`fw-bold ${
                        feedback.includes("✅")
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {feedback}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="btn btn-warning"
                    style={{ backgroundColor: "orange", border: "none" }}
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              ) : session?.user?.role === "student" ? (
                // ❌ Student trying to apply
                <div className="text-center">
                  <p className="mb-3">
                    You’re currently logged in as a <b>Student</b>. To apply for
                    requests, please switch to a <b>Tutor Account</b>.
                  </p>
                  <Link href="/switch-role" className="btn btn-secondary">
                    Switch to Tutor
                  </Link>
                </div>
              ) : (
                // ❌ Free Tutor trying to apply
                <div className="text-center">
                  <p className="mb-3">
                    You must be a <b>Premium Tutor</b> to apply for custom
                    requests.
                  </p>
                  <Link href="/upgrade/membership" className="btn btn-warning">
                    Upgrade Now
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
