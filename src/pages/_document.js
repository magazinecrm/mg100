import { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '/gtab.js'
import Layout from "@/components/Layout/Layout"; 
export default function Document() {
  return (
    <Html>


      <Head />
      <body>
        <Main />
        <NextScript />
		<script
		async
		src={'https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}'}
        />
		
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

          `,
          }}
        />
      </body>
    </Html>
  )
}