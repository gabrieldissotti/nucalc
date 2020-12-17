import {Helmet} from 'react-helmet';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@400;500&display=swap" rel="stylesheet" />
      </Helmet>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
