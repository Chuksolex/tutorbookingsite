// // pages/_app.js
// import { SessionProvider } from "next-auth/react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css"; // <-- This line is required
// import Script from "next/script";


// import "@/styles/globals.css";
// import Header from "../components/Header";
// import Footer from "@/components/Footer";
// import React, { useEffect } from "react"; // Ensure React and useEffect are imported

// export const metadata = {
//   icons: {
//     icon: "/bazalogo.png", // /public path
//   },
// };

// export default function App({ Component, pageProps:{session, ...pageProps} }) {
//   useEffect(() => {
//     // Import only in the browser for Bootstrap's JS functionalities
//     import("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);

//   return (
//     <SessionProvider session={session}>
//       <>
//         <Header />
//         {/* This div will wrap ALL page content rendered by <Component />
//         Apply padding-top here to push content down, clearing the sticky header.
//         Adjust 'pt-5' (or 'pt-6', 'pt-7') as needed based on your Navbar's actual height.
//       */}
//         <div className="pt-5 pt-md-7 pt-lg-8">
//           {" "}
//           {/* Example: smaller on mobile, larger on desktop */}
//           <Component {...pageProps} />

//            <Script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript" strategy="lazyOnload"></Script>

//         </div>
//         <Footer />

//       </>
//     </SessionProvider>
//   );
// }
import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/lib/gtag";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  useEffect(() => {
    // Import Bootstrap JS only on the client
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    // Track route changes (page views)
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <SessionProvider session={session}>
      <>
        {/* Load GA script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <Header />

        <div className="pt-5 pt-md-7 pt-lg-8">
          <Component {...pageProps} />

          {/* Cloudinary widget */}
          <Script
            src="https://widget.cloudinary.com/v2.0/global/all.js"
            type="text/javascript"
            strategy="lazyOnload"
          />
        </div>

        <Footer />
      </>
    </SessionProvider>
  );
}
