import Document, { Html, Head, Main, NextScript } from "next/document";

import Cover from '../assets/images/shared-cover.png';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:url"                content={window.location.href} />
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content="Calcular rendimento com resgate planejado no Nubank" />
          <meta property="og:description"        content="Você sabe quanto seu dinheiro está deixando de render?" />
          <meta property="og:image" content={Cover} />
          
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@400;500;600&display=swap" rel="stylesheet" />
          
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-B88FCC8KDR`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              console.log('funcionou o gtag')
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B88FCC8KDR');
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}