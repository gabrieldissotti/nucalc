import Document, { Html, Head, Main, NextScript } from "next/document";

import Cover from '../assets/images/shared-cover.png';
export default class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          {/* START SEO */}
          <meta property="og:url" content='https://rendimento-nubank-resgate-planejado-1vhoxpb3s.vercel.app' />
          <meta property="url" content='https://rendimento-nubank-resgate-planejado-1vhoxpb3s.vercel.app' />
          <meta name="url" content='https://rendimento-nubank-resgate-planejado-1vhoxpb3s.vercel.app' />
          <meta property="og:type" content="article" />
          <meta property="type" content="article" />
          <meta name="type" content="article" />
          <meta property="og:title" content="Calculadora para Nubank" />
          <meta property="title" content="Calculadora para Nubank" />
          <meta name="title" content="Calculadora para Nubank" />
          <meta property="og:description" content="Você sabe quanto seu dinheiro está deixando de render?" />
          <meta property="description" content="Você sabe quanto seu dinheiro está deixando de render?" />
          <meta name="description" content="Você sabe quanto seu dinheiro está deixando de render?" />
          <meta property="og:image" content={Cover} />
          <meta property="image" content={Cover} />
          <meta name="image" content={Cover} />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="Calculadora para Nubank" />
          <meta name="twitter:url" content="https://rendimento-nubank-resgate-planejado-1vhoxpb3s.vercel.app" />
          <meta name="twitter:title" content="Calculadora para Nubank" />
          <meta name="twitter:description" content="Você sabe quanto seu dinheiro está deixando de render?" />
          {/* END SEO */}

          {/* START PWA DATA */}
          <meta name='application-name' content='Calculadora para Nubank' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='PWA App' />
          <meta name='description' content='Você sabe quanto seu dinheiro está deixando de render?' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />
                    
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/icons/favicon.ico' />
              
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://rendimento-nubank-resgate-planejado.gabrieldissotti.vercel.app' />
          <meta name='twitter:title' content='Calculadora para Nubank' />
          <meta name='twitter:description' content='Você sabe quanto seu dinheiro está deixando de render?' />
          <meta name='twitter:image' content='https://rendimento-nubank-resgate-planejado.gabrieldissotti.vercel.app/icons/android-chrome-192x192.png' />
          <meta name='twitter:creator' content='@Gabriel46340705' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Calculadora para Nubank' />
          <meta property='og:description' content='Você sabe quanto seu dinheiro está deixando de render?' />
          <meta property='og:site_name' content='Calculadora para Nubank' />
          <meta property='og:url' content='https://rendimento-nubank-resgate-planejado.gabrieldissotti.vercel.app' />
          <meta property='og:image' content='https://rendimento-nubank-resgate-planejado.gabrieldissotti.vercel.app/icons/apple-touch-icon.png' />
          {/* END PWA DATA */}

          
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