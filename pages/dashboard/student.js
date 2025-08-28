import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function StudentDashboard() {
  const { data: session } = useSession();
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/student/dashboard");
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.message || "Failed to load student dashboard");
        }
        const json = await res.json();

        // ✅ Ensure arrays exist even if API doesn’t return them
        setData({
          ...json,
          upcomingSessions: json.upcomingSessions || [],
          connectedTutors: json.connectedTutors || [],
          notifications: json.notifications || [],
        });
      } catch (e) {
        console.error("Student dashboard fetch error:", e.message);
        setData({
          error: e.message,
          upcomingSessions: [],
          connectedTutors: [],
          notifications: [],
        });
      }
    })();
  }, []);

  if (!data) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="d-flex min-vh-100" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Sidebar */}
      <aside style={{ background: "#000", color: "#fff", width: 280 }} className="p-3">
        <div className="text-center mb-4">
          <img
            src={data.avatar || "/images/default-avatar.png"}
            className="rounded-circle border border-3"
            width={100}
            height={100}
          />
          <h4 className="mt-3">{data.name}</h4>
          <p className="small opacity-75">{data.email}</p>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/dashboard/student" className="nav-link text-white">Dashboard</a></li>
          <li className="nav-item mb-2"><a href="/auth/profile" className="nav-link text-white">Profile</a></li>
          <li className="nav-item mb-2"><a href="/dashboard/student/tutors" className="nav-link text-white">My Tutors</a></li>
          <li className="nav-item mb-2"><a href="/dashboard/student/sessions" className="nav-link text-white">Sessions</a></li>
          <li className="nav-item mt-3"><a href="/auth/logout" className="nav-link text-white">Logout</a></li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-grow-1 p-4">
        <h1 className="mb-4 fw-bold" style={{ color: "#000" }}>
          Welcome back, {data.name}!
        </h1>

        {/* Upcoming Sessions */}
        <section className="mb-5">
          <h3 className="mb-3">Upcoming Sessions</h3>
          {(!data.upcomingSessions || data.upcomingSessions.length === 0) ? (
            <p>
              No upcoming sessions.{" "}
              <a href="/dashboard/student/tutors" style={{ color: "#FFD700" }}>
                Book a tutor
              </a>.
            </p>
          ) : (
            <div className="list-group shadow-sm rounded">
              {data.upcomingSessions.map((s) => (
                <div
                  key={s.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                  style={{ borderLeft: "4px solid #FFD700", background: "#F9F9F9" }}
                >
                  <div>
                    <strong>{s.subject}</strong> with <strong>{s.tutor}</strong>
                    <br />
                    <small style={{ color: "#808080" }}>{s.date}</small>
                  </div>
                  <button
                    className="btn btn-sm"
                    style={{ borderColor: "#000", color: "#000", background: "#FFD700" }}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Tutors */}
        <section className="mb-5">
          <h3 className="mb-3">Your Tutors</h3>
          {(!data.connectedTutors || data.connectedTutors.length === 0) ? (
            <p>
              You have not connected with any tutors yet.{" "}
              <a href="/dashboard/student/tutors" style={{ color: "#FFD700" }}>
                Find tutors
              </a>.
            </p>
          ) : (
            <div className="row">
              {data.connectedTutors.map((t) => (
                <div key={t.id} className="col-md-4 mb-3">
                  <div className="card shadow-sm border-0">
                    <img
                      src={t.avatar || "/images/default-avatar.png"}
                      className="card-img-top"
                      style={{ height: 180, objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{t.name}</h5>
                      <p className="card-text" style={{ color: "#808080" }}>
                        Subjects: {t.subjects?.join(", ") || "N/A"}
                      </p>
                      <a
                        href={`/dashboard/student/tutors/${t.id}`}
                        className="btn w-100"
                        style={{ background: "#000", color: "#FFD700" }}
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Notifications */}
        <section>
          <h3 className="mb-3">Notifications</h3>
          {(!data.notifications || data.notifications.length === 0) ? (
            <p>No new notifications.</p>
          ) : (
            <ul className="list-group shadow-sm">
              {data.notifications.map((n) => (
                <li
                  key={n.id}
                  className="list-group-item"
                  style={{ borderLeft: "4px solid #FFD700", background: "#F9F9F9" }}
                >
                  {n.message}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) return { redirect: { destination: "/auth/login", permanent: false } };
  if (session.user.role !== "student")
    return { redirect: { destination: "/auth/profile", permanent: false } };
  return { props: {} };
}
