// In `pages/_document.js`
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/blog/favicon.ico" />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-LN60K0MXP5"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-LN60K0MXP5');
              `,
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
