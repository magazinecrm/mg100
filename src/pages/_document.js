import { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '/gtab.js'
import Layout from "@/components/Layout/Layout"; 
export default function Document() {
  return (
    <Html>

<Head>
	<script
		async
		src={'https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}'}
        />
		  <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
	
		
        {/* Global Site Tag (gtag.js) - Google Analytics */}
      
      </body>
    </Html>
  )
}