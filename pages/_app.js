// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import Header from '../components/Header';
import Footer from "@/components/Footer";
import React, { useEffect } from 'react'; // Ensure React and useEffect are imported

export const metadata = {
  icons: {
    icon: '/bazalogo.png', // /public path
  },
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Import only in the browser for Bootstrap's JS functionalities
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Header />
      {/* This div will wrap ALL page content rendered by <Component />
        Apply padding-top here to push content down, clearing the sticky header.
        Adjust 'pt-5' (or 'pt-6', 'pt-7') as needed based on your Navbar's actual height.
      */}
      <div className="pt-5 pt-md-7 pt-lg-8"> {/* Example: smaller on mobile, larger on desktop */}
  <Component {...pageProps} />
</div>
      <Footer />
    </>
  );
}