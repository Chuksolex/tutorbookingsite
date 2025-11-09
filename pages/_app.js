
import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/lib/gtag";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

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
        {/* ✅ Meta and favicon */}
        <Head>
          <title>Prettygigs Hub – Learn & Book Tutors Easily</title>
          <meta
            name="description"
            content="Prettygigs Hub connects learners with expert tutors. Book a session, learn tech skills, and grow your career."
          />
          <link rel="icon" href="/prettygigslogo.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/prettygigslogo.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        {/* ✅ Google Analytics */}
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
