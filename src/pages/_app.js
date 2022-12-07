import ContextProvider from "@/context/ContextProvider";
import "@/vendors/animate.css";
import "@/vendors/font-awesome.min.css";
import "@/vendors/lums-icon/style.css";
import "@/fonts/spartan-mb/stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Script from 'next/script'
import { useRouter } from 'next/router'
import { GA_TRACKING_ID } from '/gtab.js'


import React, { useEffect } from "react";

// import "react-circular-progressbar/dist/styles.css";
// import "react-modal-video/css/modal-video.min.css";
// import "tiny-slider/dist/tiny-slider.css";

// extra css
import "@/styles/style.css";
import "@/styles/responsive.css";

const MyApp = ({ Component, pageProps }) => {
	 const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
	  return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (    

 <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;
