// import { useSession } from 'next-auth/react';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// //import styles from '@/styles/Dashboard.module.css'; // Create this for extra styling

// export default function TutorDashboard() {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (status === 'unauthenticated') {
//       router.push('/auth/login');
//     } else if (session && session.user.role !== 'tutor') {
//       router.push('/auth/profile');
//     }
//   }, [status, session]);

//   if (status === 'loading') {
//     return <div className="text-center mt-5">Loading dashboard...</div>;
//   }

//   return (
//     <div className="d-flex" style={{ minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <div className="bg-dark text-white p-3" style={{ minWidth: '220px' }}>
//         <h4 className="mb-4" style={{ color: '#FFD700' }}>Tutor Panel</h4>
//         <ul className="nav flex-column">
//           <li className="nav-item mb-2"><a className="nav-link text-white" href="#">Dashboard</a></li>
//           <li className="nav-item mb-2"><a className="nav-link text-white" href="#">My Students</a></li>
//           <li className="nav-item mb-2"><a className="nav-link text-white" href="#">Sessions</a></li>
//           <li className="nav-item mb-2"><a className="nav-link text-white" href="#">Profile</a></li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow-1 bg-light p-4">
//         {/* Topbar */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h2 className="fw-bold">Welcome back, {session?.user?.name}</h2>
//           <div className="d-flex align-items-center">
//             <small className="text-muted me-2">{session?.user?.role?.toUpperCase()}</small>
//             <Image
//               src={session?.user?.image || 'https://via.placeholder.com/40'}
//               width={40}
//               height={40}
//               className="rounded-circle"
//               alt="Avatar"
//             />
//           </div>
//         </div>

//         {/* Overview Cards */}
//         <div className="row mb-4">
//           <div className="col-md-4">
//             <div className="card border-0 shadow-sm" style={{ borderLeft: '5px solid #FFD700' }}>
//               <div className="card-body">
//                 <h5>Total Students</h5>
//                 <h3>12</h3>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card border-0 shadow-sm" style={{ borderLeft: '5px solid #FFD700' }}>
//               <div className="card-body">
//                 <h5>Upcoming Sessions</h5>
//                 <h3>3</h3>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card border-0 shadow-sm" style={{ borderLeft: '5px solid #FFD700' }}>
//               <div className="card-body">
//                 <h5>Earnings This Month</h5>
//                 <h3>₦120,000</h3>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Schedule */}
//         <div className="card shadow-sm mb-4">
//           <div className="card-header bg-white">
//             <h5 className="mb-0">Upcoming Sessions</h5>
//           </div>
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item d-flex justify-content-between">
//               <div>
//                 <strong>Math (JSS3)</strong> with Sarah
//                 <div className="text-muted small">Wed, 3 PM - 4 PM</div>
//               </div>
//               <button className="btn btn-sm btn-outline-secondary">View</button>
//             </li>
//             <li className="list-group-item d-flex justify-content-between">
//               <div>
//                 <strong>Physics (SS2)</strong> with James
//                 <div className="text-muted small">Fri, 1 PM - 2 PM</div>
//               </div>
//               <button className="btn btn-sm btn-outline-secondary">View</button>
//             </li>
//           </ul>
//         </div>

//         {/* Quick Actions */}
//         <div className="row">
//           <div className="col-md-6">
//             <button className="btn btn-warning w-100 mb-3">Update Profile</button>
//           </div>
//           <div className="col-md-6">
//             <button className="btn btn-outline-warning w-100 mb-3">Set Availability</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import Image from 'next/image';

// export default function TutorDashboard() {
//   // Mock session data (replace with useSession when backend is ready)
//   const [session, setSession] = useState(null);
//   const [status, setStatus] = useState("loading");
//   const router = useRouter();

//   useEffect(() => {
//     // Simulate loading delay like NextAuth
//     setTimeout(() => {
//       const mockUser = {
//         user: {
//           id: "u1",
//           name: "Ben John",
//           email: "ben.john@example.com",
//           role: "tutor", // change to 'student' to test redirect
//           image: "https://randomuser.me/api/portraits/men/32.jpg"
//         }
//       };
//       setSession(mockUser);
//       setStatus("authenticated");
//     }, 500);
//   }, []);

//   useEffect(() => {
//     if (status === 'unauthenticated') {
//       router.push('/auth/login');
//     } else if (session && session.user.role !== 'tutor') {
//       router.push('/auth/profile');
//     }
//   }, [status, session]);

//   if (status === 'loading') {
//     return <div className="text-center mt-5">Loading dashboard...</div>;
//   }

//   return (
//     <div className="d-flex" style={{ minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <div className="bg-dark text-white p-3" style={{ minWidth: '220px' }}>
//         <h4 className="mb-4" style={{ color: '#FFD700' }}>Tutor Panel</h4>
//         <ul className="nav flex-column">
//           <li className="nav-item mb-2"><a className="nav-link text-white" href="#">Dashboard</a></li>
//           <li className="nav-item mb-2"><a className="nav-link text-white" href="#">My Students</a></li>
//           <li className="nav-item mb-2"><a className="nav-link text-white" href="#">Sessions</a></li>
//           <li className="nav-item mb-2"><a className="nav-link text-white" href="#">Profile</a></li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow-1 bg-light p-4">
//         {/* Topbar */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h2 className="fw-bold">Welcome back, {session?.user?.name}</h2>
//           <div className="d-flex align-items-center">
//             <small className="text-muted me-2">{session?.user?.role?.toUpperCase()}</small>
//             <Image
//               src={session?.user?.image || 'https://via.placeholder.com/40'}
//               width={40}
//               height={40}
//               className="rounded-circle"
//               alt="Avatar"
//             />
//           </div>
//         </div>

//         {/* Overview Cards */}
//         <div className="row mb-4">
//           <div className="col-md-4">
//             <div className="card border-0 shadow-sm" style={{ borderLeft: '5px solid #FFD700' }}>
//               <div className="card-body">
//                 <h5>Total Students</h5>
//                 <h3>12</h3>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card border-0 shadow-sm" style={{ borderLeft: '5px solid #FFD700' }}>
//               <div className="card-body">
//                 <h5>Upcoming Sessions</h5>
//                 <h3>3</h3>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card border-0 shadow-sm" style={{ borderLeft: '5px solid #FFD700' }}>
//               <div className="card-body">
//                 <h5>Earnings This Month</h5>
//                 <h3>₦120,000</h3>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Schedule */}
//         <div className="card shadow-sm mb-4">
//           <div className="card-header bg-white">
//             <h5 className="mb-0">Upcoming Sessions</h5>
//           </div>
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item d-flex justify-content-between">
//               <div>
//                 <strong>Math (JSS3)</strong> with Sarah
//                 <div className="text-muted small">Wed, 3 PM - 4 PM</div>
//               </div>
//               <button className="btn btn-sm btn-outline-secondary">View</button>
//             </li>
//             <li className="list-group-item d-flex justify-content-between">
//               <div>
//                 <strong>Physics (SS2)</strong> with James
//                 <div className="text-muted small">Fri, 1 PM - 2 PM</div>
//               </div>
//               <button className="btn btn-sm btn-outline-secondary">View</button>
//             </li>
//           </ul>
//         </div>

//         {/* Quick Actions */}
//         <div className="row">
//           <div className="col-md-6">
//             <button className="btn btn-warning w-100 mb-3">Update Profile</button>
//           </div>
//           <div className="col-md-6">
//             <button className="btn btn-outline-warning w-100 mb-3">Set Availability</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";

// export default function TutorDashboard() {
//   const [session, setSession] = useState(null);
//   const [status, setStatus] = useState("loading");
//   const [tutor, setTutor] = useState({
//     name: "",
//     bio: "",
//     subjects: [""],
//     profileImage: "",
//   });
//   const [saving, setSaving] = useState(false);
//   const [showUpdateForm, setShowUpdateForm] = useState(false); // ✅ NEW

//   const router = useRouter();

//   // Simulated authentication
//   useEffect(() => {
//     setTimeout(() => {
//       const mockUser = {
//         user: {
//           id: "u1",
//           name: "Ben John",
//           email: "ben.john@example.com",
//           role: "tutor",
//           image: "https://randomuser.me/api/portraits/men/32.jpg",
//         },
//       };
//       setSession(mockUser);
//       setTutor({
//         name: mockUser.user.name,
//         bio: "Experienced tutor in Mathematics & Physics.",
//         subjects: ["Math", "Physics"],
//         profileImage: mockUser.user.image,
//       });
//       setStatus("authenticated");
//     }, 500);
//   }, []);

//   // Auth redirect
//   useEffect(() => {
//     if (status === "unauthenticated") {
//       router.push("/auth/login");
//     } else if (session && session.user.role !== "tutor") {
//       router.push("/auth/profile");
//     }
//   }, [status, session]);

//   const handleChange = (field, value) => {
//     setTutor({ ...tutor, [field]: value });
//   };

//   const handleSubjectChange = (index, value) => {
//     const updated = [...tutor.subjects];
//     updated[index] = value;
//     setTutor({ ...tutor, subjects: updated });
//   };

//   const addSubject = () => {
//     setTutor({ ...tutor, subjects: [...tutor.subjects, ""] });
//   };

//   const removeSubject = (index) => {
//     setTutor({
//       ...tutor,
//       subjects: tutor.subjects.filter((_, i) => i !== index),
//     });
//   };

//   const handleSave = async () => {
//     setSaving(true);
//     try {
//       console.log("Saving tutor profile:", tutor);
//       alert("Profile updated successfully!");
//       setShowUpdateForm(false); // ✅ Hide after saving
//     } catch (err) {
//       console.error(err);
//       alert("Error saving profile");
//     }
//     setSaving(false);
//   };

//   if (status === "loading") {
//     return <div className="text-center mt-5">Loading dashboard...</div>;
//   }

//   return (
//     <div className="d-flex" style={{ minHeight: "100vh" }}>
//       {/* Sidebar */}
//       <div className="bg-dark text-white p-3" style={{ minWidth: "220px" }}>
//         <h4 className="mb-4" style={{ color: "#FFD700" }}>
//           Tutor Panel
//         </h4>
//         <ul className="nav flex-column">
//           <li className="nav-item mb-2">
//             <a className="nav-link text-white" href="#">
//               Dashboard
//             </a>
//           </li>
//           <li className="nav-item mb-2">
//             <a className="nav-link text-white" href="#">
//               My Students
//             </a>
//           </li>
//           <li className="nav-item mb-2">
//             <a className="nav-link text-white" href="#">
//               Sessions
//             </a>
//           </li>
//           <li className="nav-item mb-2">
//             <a className="nav-link text-white" href="#">
//               Profile
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow-1 bg-light p-4">
//         {/* Topbar */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h2 className="fw-bold">Welcome back, {session?.user?.name}</h2>
//           <div className="d-flex align-items-center">
//             <small className="text-muted me-2">
//               {session?.user?.role?.toUpperCase()}
//             </small>
//             <Image
//               src={session?.user?.image || "https://via.placeholder.com/40"}
//               width={40}
//               height={40}
//               className="rounded-circle"
//               alt="Avatar"
//             />
//           </div>
//         </div>

//         {/* Overview Cards */}
//         <div className="row mb-4">
//           <div className="col-md-4">
//             <div
//               className="card border-0 shadow-sm"
//               style={{ borderLeft: "5px solid #FFD700" }}
//             >
//               <div className="card-body">
//                 <h5>Total Students</h5>
//                 <h3>12</h3>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div
//               className="card border-0 shadow-sm"
//               style={{ borderLeft: "5px solid #FFD700" }}
//             >
//               <div className="card-body">
//                 <h5>Upcoming Sessions</h5>
//                 <h3>3</h3>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div
//               className="card border-0 shadow-sm"
//               style={{ borderLeft: "5px solid #FFD700" }}
//             >
//               <div className="card-body">
//                 <h5>Earnings This Month</h5>
//                 <h3>₦120,000</h3>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Update Button */}
//         {!showUpdateForm && (
//           <button
//             onClick={() => setShowUpdateForm(true)}
//             className="btn btn-warning text-black fw-bold mb-4"
//           >
//             Update Tutor Profile
//           </button>
//         )}

//         {/* Profile Update Form - only shows when button clicked */}
//         {showUpdateForm && (
//           <div className="card shadow-sm p-4 mb-4">
//             <h5 className="mb-3" style={{ color: "#FFD700" }}>
//               Update Your Profile
//             </h5>

//             {/* Profile Image */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Profile Image URL</label>
//               <input
//                 type="text"
//                 value={tutor.profileImage}
//                 onChange={(e) => handleChange("profileImage", e.target.value)}
//                 className="form-control"
//                 placeholder="https://example.com/photo.jpg"
//               />
//               {tutor.profileImage && (
//                 <img
//                   src={tutor.profileImage}
//                   alt="Profile"
//                   className="mt-2 rounded-circle"
//                   style={{
//                     width: "80px",
//                     height: "80px",
//                     border: "3px solid #FFD700",
//                     objectFit: "cover",
//                   }}
//                 />
//               )}
//             </div>

//             {/* Name */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Name</label>
//               <input
//                 type="text"
//                 value={tutor.name}
//                 onChange={(e) => handleChange("name", e.target.value)}
//                 className="form-control"
//               />
//             </div>

//             {/* Bio */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Bio</label>
//               <textarea
//                 value={tutor.bio}
//                 onChange={(e) => handleChange("bio", e.target.value)}
//                 className="form-control"
//                 rows={3}
//               ></textarea>
//             </div>

//             {/* Subjects */}
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Subjects</label>
//               {tutor.subjects.map((subject, index) => (
//                 <div key={index} className="d-flex mb-2">
//                   <input
//                     type="text"
//                     value={subject}
//                     onChange={(e) => handleSubjectChange(index, e.target.value)}
//                     className="form-control me-2"
//                     placeholder="Enter subject"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeSubject(index)}
//                     className="btn btn-dark"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={addSubject}
//                 className="btn btn-warning text-black"
//               >
//                 + Add Subject
//               </button>
//             </div>

//             {/* Save Button */}
//             <div className="d-flex justify-content-between">
//               <button
//                 type="button"
//                 onClick={() => setShowUpdateForm(false)}
//                 className="btn btn-secondary"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSave}
//                 disabled={saving}
//                 className="btn btn-dark text-warning fw-bold"
//               >
//                 {saving ? "Saving..." : "Save Changes"}
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function TutorDashboard() {
  const { data: session } = useSession();
  const [profile, setProfile] = useState({ bio: "", subjects: [], ratePerHour: 0, photo: "",   });
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/tutor/profile");
      if (res.ok) setProfile(await res.json());
    })();
  }, []);

  const updateField = (k, v) => setProfile(prev => ({ ...prev, [k]: v }));
  const changeSubject = (i, v) => setProfile(p => ({ ...p, subjects: p.subjects.map((s, idx) => (idx === i ? v : s)) }));
  const addSubject = () => setProfile(p => ({ ...p, subjects: [...p.subjects, ""] }));
  const removeSubject = (i) => setProfile(p => ({ ...p, subjects: p.subjects.filter((_, idx) => idx !== i) }));

  const save = async () => {
    setSaving(true);
    const res = await fetch("/api/tutor/profile", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(profile) });
    setSaving(false);
    if (res.ok) { setShowForm(false); }
  };

  if (!session) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <div className="bg-dark text-white p-3" style={{ minWidth: 220 }}>
        <h4 className="mb-4" style={{ color: "#FFD700" }}>Tutor Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#">Dashboard</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#">My Students</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#">Sessions</a></li>
          <li className="nav-item mb-2"><a className="nav-link text-white" href="#">Profile</a></li>
        </ul>
      </div>

      <div className="flex-grow-1 bg-light p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Welcome back, {session.user.name}</h2>
          <div className="d-flex align-items-center">
            <small className="text-muted me-2">{session.user.role?.toUpperCase()}</small>
            <img src={profile.photo || session.user.image || "https://via.placeholder.com/40"} width={40} height={40} className="rounded-circle" />
          </div>
        </div>

        {!showForm && (
          <button className="btn btn-warning text-black fw-bold mb-4" onClick={() => setShowForm(true)}>
            Update Tutor Profile
          </button>
        )}

        {showForm && (
          <div className="card shadow-sm p-4 mb-4">
            <h5 className="mb-3" style={{ color: "#FFD700" }}>Update Your Profile</h5>

            <div className="mb-3">
              <label className="form-label fw-semibold">Profile Image URL</label>
              <input className="form-control" value={profile.photo || ""} onChange={(e) => updateField("photo", e.target.value)} placeholder="https://example.com/photo.jpg" />
              {(profile.photo || session.user.image) && (
                <img src={profile.photo || session.user.image} className="mt-2 rounded-circle" style={{ width: 80, height: 80, border: "3px solid #FFD700", objectFit: "cover" }} />
              )}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Bio</label>
              <textarea className="form-control" rows={3} value={profile.bio || ""} onChange={(e) => updateField("bio", e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Subjects</label>
              {(profile.subjects || []).map((s, i) => (
                <div key={i} className="d-flex mb-2">
                  <input className="form-control me-2" value={s} onChange={(e) => changeSubject(i, e.target.value)} placeholder="e.g. Math" />
                  <button type="button" className="btn btn-dark" onClick={() => removeSubject(i)}>✕</button>
                </div>
              ))}
              <button type="button" className="btn btn-warning text-black" onClick={addSubject}>+ Add Subject</button>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Rate (₦/hour)</label>
              <input type="number" className="form-control" value={profile.ratePerHour || 0} onChange={(e) => updateField("ratePerHour", Number(e.target.value))} />
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
              <button className="btn btn-dark text-warning fw-bold" onClick={save} disabled={saving}>{saving ? "Saving..." : "Save Changes"}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) return { redirect: { destination: "/auth/login", permanent: false } };
  if (session.user.role !== "tutor") return { redirect: { destination: "/auth/profile", permanent: false } };
  return { props: {} };
}


// import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function TutorDashboard() {
//   const { data: session, status } = useSession();
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch tutor profile
//   useEffect(() => {
//     if (status === "authenticated") {
//       axios
//         .get(`/api/tutors/${session.user.id}`)
//         .then((res) => {
//           setProfile(res.data);
//           setLoading(false);
//         })
//         .catch(() => setLoading(false));
//     }
//   }, [status, session]);

//   if (status === "loading" || loading) {
//     return <p className="p-6">Loading your dashboard...</p>;
//   }

//   if (status === "unauthenticated") {
//     return <p className="p-6">You need to log in to view your dashboard.</p>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">
//         Welcome, {session.user.name || "Tutor"}
//       </h1>

//       {profile ? (
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <img
//             src={profile.photo || "/default-avatar.png"}
//             alt="Tutor Photo"
//             className="w-32 h-32 rounded-full object-cover mb-4"
//           />
//           <h2 className="text-xl font-semibold">{profile.title}</h2>
//           <p className="text-gray-600 mb-2">{profile.bio}</p>
//           <p className="mb-1">
//             <strong>Subjects:</strong> {profile.subjects.join(", ")}
//           </p>
//           <p className="mb-1">
//             <strong>Qualifications:</strong> {profile.qualifications}
//           </p>
//           <p className="mb-1">
//             <strong>Experience:</strong> {profile.experience}
//           </p>
//           <p className="mb-1">
//             <strong>Teaches Online:</strong> {profile.teachesOnline ? "Yes" : "No"}
//           </p>
//           <p className="mb-1">
//             <strong>Teaches In-Person:</strong> {profile.teachesInPerson ? "Yes" : "No"}
//           </p>
//           <p className="mb-1">
//             <strong>Location:</strong> {profile.location}
//           </p>
//           <p className="mb-1">
//             <strong>About the Class:</strong> {profile.abouttheclass}
//           </p>
//           <p className="mb-1">
//             <strong>Rate Per Hour:</strong> ${profile.ratePerHour}
//           </p>
//         </div>
//       ) : (
//         <div className="bg-yellow-100 text-yellow-800 p-4 rounded">
//           <p>You don’t have a tutor profile yet.</p>
//           <a
//             href="/dashboard/tutor/edit"
//             className="text-blue-600 underline mt-2 inline-block"
//           >
//             Create your profile
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }
