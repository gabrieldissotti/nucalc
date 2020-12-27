import React, { useEffect } from 'react';
import { useRouter } from "next/router";

import * as GoogleAnalyticsAPI from "../apis/GoogleAnalyticsAPI";

import '../styles/main.scss'
import { Helmet } from 'react-helmet';

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      GoogleAnalyticsAPI.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@400;500&display=swap" rel="stylesheet" />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsAPI.GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GoogleAnalyticsAPI.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
            `
          }}
        />
      </Helmet>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
