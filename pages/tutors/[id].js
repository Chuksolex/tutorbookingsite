// pages/tutors/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";

const TutorProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch tutor data by ID
  useEffect(() => {
    if (!id) return;

    const fetchTutor = async () => {
      try {
        const res = await fetch(`/api/tutors/${id}`);
        if (!res.ok) throw new Error("Failed to fetch tutor");
        const data = await res.json();
        setTutor(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTutor();
  }, [id]);

  if (loading) return <p className="text-center mt-5">Loading tutor profile...</p>;
  if (!tutor) return <p className="text-center mt-5">Tutor not found.</p>;

  return (
    <>
      <Head>
        <title>{tutor.user?.name} | Tutor Profile</title>
        <meta
          name="description"
          content={`Learn from ${tutor.user?.name}, ${tutor.title}. Rated ${tutor.rating} stars.`}
        />
      </Head>

      <div className="container py-5">
        <div className="row g-5">
          {/* Left Column */}
          <div className="col-md-4 text-center">
            <Image
              src={tutor.photo || tutor.user?.imageUrl}
              alt={tutor.user?.name}
              width={300}
              height={300}
              className="rounded-circle img-fluid shadow-sm"
            />
            <h2 className="mt-3">{tutor.user?.name}</h2>
            <p className="text-muted">{tutor.location}</p>
            <p><strong>Title:</strong> {tutor.title}</p>
            <p><strong>Subjects:</strong> {tutor.subjects?.join(", ")}</p>
            <p><strong>Rating:</strong> {tutor.rating || "No ratings yet"} ⭐</p>
            <p><strong>Hourly Rate:</strong> ₦{tutor.ratePerHour?.toLocaleString()}</p>
            <p>
              <strong>Available for:</strong>{" "}
              {tutor.teachesInPerson && "In-person"}
              {tutor.teachesInPerson && tutor.teachesOnline && " & "}
              {tutor.teachesOnline && "Online"} Lessons
            </p>
            <button className="btn btn-warning mt-3 w-100">Contact Tutor</button>
          </div>

          {/* Right Column */}
          <div className="col-md-8">
            {/* About */}
            <section className="mb-4">
              <h3>About {tutor.user?.name}</h3>
              <p>{tutor.bio}</p>
            </section>

            {/* Class Style */}
            <section className="mb-4">
              <h4>About the Class</h4>
              <p>{tutor.abouttheclass}</p>
            </section>

            {/* Experience */}
            <section className="mb-4">
              <h4>Experience</h4>
              <p>{tutor.experience}</p>
            </section>

            {/* Qualifications */}
            <section className="mb-4">
              <h4>Qualifications</h4>
              <p>{tutor.qualifications}</p>
            </section>

            {/* Reviews */}
            <section className="mb-4">
              <h4>Student Reviews</h4>
              <div>
                {tutor.reviews?.length > 0 ? (
                  tutor.reviews.map((review, i) => (
                    <div key={i} className="border p-3 mb-3 rounded shadow-sm">
                      <strong>{review.user?.name || "Anonymous"}</strong>
                      <p className="mb-1">{review.comment}</p>
                      <small className="text-muted">
                        Rated: {"⭐".repeat(review.rating)}
                      </small>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet. Be the first to book a session!</p>
                )}
              </div>
            </section>

            {/* Booking Form */}
            <section className="mb-5">
              <h4>Book a Session</h4>
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Tell the tutor what you need help with..."></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-warning w-100">Send Message</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorProfile;
