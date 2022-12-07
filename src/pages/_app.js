import ContextProvider from "@/context/ContextProvider";
import "@/vendors/animate.css";
import "@/vendors/font-awesome.min.css";
import "@/vendors/lums-icon/style.css";
import "@/fonts/spartan-mb/stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  Script from "next/script";



import React, { useEffect } from "react";

// import "react-circular-progressbar/dist/styles.css";
// import "react-modal-video/css/modal-video.min.css";
// import "tiny-slider/dist/tiny-slider.css";

// extra css
import "@/styles/style.css";
import "@/styles/responsive.css";

const MyApp = ({ Component, pageProps }) => {
  return (    <React.Fragment>
  
  <Script
    strategy="lazyOnload"
    src={'https://www.googletagmanager.com/gtag/js?id=G-VS955V7D7J'}/> 
     <Script
strategy="lazyOnload">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
             gtag('config', 'G-VS955V7D7J');  `}
  
  
      </Script>


 <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider> </React.Fragment>
  );
};

export default MyApp;
