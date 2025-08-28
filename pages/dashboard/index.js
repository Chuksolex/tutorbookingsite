import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function DashboardHome() {
  const { data: session } = useSession();
  const router = useRouter();
  const [loadingSwitch, setLoadingSwitch] = useState(false);


  if (!session) return <div className="text-center p-5">Loading...</div>;
  const user = session.user;

  const switchRole = async () => {
    setLoadingSwitch(true);
    const res = await fetch("/api/profile/role", { method: "POST" });
    setLoadingSwitch(false);
    if (res.ok) {
      // reload current page and session state
      router.replace(router.asPath);
    }
  };

  return (
    <div className="container py-4" style={{ minHeight: "100vh" }}>
      <h1 className="mb-4">Dashboard Home</h1>
      <div className="d-flex align-items-center mb-4">
        <img src={user.imageUrl || "/images/default-avatar.png"} width={80} height={80} className="rounded-circle me-3" />
        <div>
          <h3>{user.name}</h3>
          <p className="mb-1">{user.email}</p>
          <p className="mb-0">
            Role: <strong>{user.role}</strong>
            <button className="btn btn-sm btn-outline-secondary ms-3" onClick={switchRole} disabled={loadingSwitch}>
              {loadingSwitch ? "Switching..." : "Switch Role"}
            </button>
          </p>
        </div>
      </div>

      <div className="row g-3">
        {user.role === "student" && (
          <div className="col-md-4">
            <a href="/dashboard/student" className="btn btn-outline-primary w-100 py-3">Go to Student Dashboard</a>
          </div>
        )}
        {user.role === "tutor" && (
          <div className="col-md-4">
            <a href="/dashboard/tutor" className="btn btn-outline-success w-100 py-3">Go to Tutor Dashboard</a>
          </div>
        )}
        <div className="col-md-4">
          <a href="/auth/logout" className="btn btn-outline-danger w-100 py-3">Logout</a>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) return { redirect: { destination: "/auth/login", permanent: false } };
  return { props: {} };
}


