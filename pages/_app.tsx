import React, { useEffect } from 'react';

import * as GoogleAnalyticsAPI from "../apis/GoogleAnalyticsAPI";

import '../styles/main.scss'
import { Helmet } from 'react-helmet';

function MyApp({ Component, pageProps }) {


  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@400;500;600&display=swap" rel="stylesheet" />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-B88FCC8KDR`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-B88FCC8KDR', {
                  page_path: /,
                });
            `
          }}
        ></script>
      </Helmet>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
