import { Helmet } from 'react-helmet';

import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@400;500&display=swap" rel="stylesheet" />
      </Helmet>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
