// // pages/upgrade/success.js
// import Head from "next/head";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import * as gtag from "@/lib/gtag";

// export default function MembershipSuccess() {
//   const router = useRouter();
//   const { update } = useSession(); // <-- get the update() method
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const updateMembership = async () => {
//       try {
//         // Call API to update user membership in DB
//         const res = await fetch("/api/membership/update-membership", { method: "POST" });

//         if (res.ok) {
//           console.log("✅ Membership upgraded successfully");
          
//           gtag.event({
//             action: 'membership_upgraded',
//             category: 'Membership',
//             label: 'User upgraded to premium membership',
//             value: 1,
//           });

//           // 🔄 Refresh NextAuth session so it reflects `premium` immediately
//           await update();
//         } else {
//           console.error("❌ Failed to upgrade membership");
//         }
//       } catch (err) {
//         console.error("⚠️ Error upgrading membership:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     updateMembership();
//   }, [update]);

//   return (
//     <>
//       <Head>
//         <title>Membership Upgraded | {process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
//       </Head>

//       <div className="container py-5 text-center">
//         {loading ? (
//           <div className="spinner-border text-warning" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         ) : (
//           <>
//             <h1 className="fw-bold mb-4 text-success">🎉 Membership Upgraded!</h1>
//             <p className="mb-4">You now have access to all premium features.</p>
//             <button
//               className="btn btn-warning btn-lg"
//               onClick={() => router.push("/dashboard")}
//             >
//               Go to Dashboard
//             </button>
//           </>
//         )}
//       </div>
//     </>
//   );
// }
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import * as gtag from "@/lib/gtag";

export default function MembershipSuccess() {
  const router = useRouter();
  const { update } = useSession();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("Verifying payment...");

  useEffect(() => {
    const verifyAndUpgrade = async () => {
      try {
        // ✅ Get Paystack reference from callback URL
        const reference = router.query.reference;
        if (!reference) return; // wait until query param is ready

        setStatus("Verifying your payment...");

        // ✅ Call backend to verify the transaction
        const verifyRes = await fetch(`/api/membership/verify-payment?reference=${reference}`);
        const verifyData = await verifyRes.json();

        if (verifyRes.ok && verifyData.status === "success") {
          setStatus("Updating your membership...");

          // ✅ Update membership in your DB
          const res = await fetch("/api/membership/update-membership", { method: "POST" });
          if (res.ok) {
            console.log("✅ Membership upgraded successfully");

            // 🎯 Analytics event
            gtag.event({
              action: 'membership_upgraded',
              category: 'Membership',
              label: 'User upgraded to premium membership',
              value: 1,
            });

            // 🔄 Refresh NextAuth session
            await update();

            setStatus("Membership upgraded successfully!");
          } else {
            throw new Error("Failed to update membership");
          }
        } else {
          throw new Error("Payment verification failed");
        }
      } catch (err) {
        console.error("⚠️ Error:", err);
        setStatus("Payment could not be verified or was cancelled.");
      } finally {
        setLoading(false);
      }
    };

    verifyAndUpgrade();
  }, [router.query.reference, update]);

  return (
    <>
      <Head>
        <title>Membership Upgraded | {process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
      </Head>

      <div className="container py-5 text-center">
        {loading ? (
          <div>
            <div className="spinner-border text-warning mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p>{status}</p>
          </div>
        ) : (
          <>
            <h1 className="fw-bold mb-4 text-success">🎉 Membership Upgraded!</h1>
            <p className="mb-4">You now have access to all premium features.</p>
            <button
              className="btn btn-warning btn-lg"
              onClick={() => router.push("/dashboard")}
            >
              Go to Dashboard
            </button>
          </>
        )}
      </div>
    </>
  );
}
