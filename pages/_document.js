// In `pages/_document.js`
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/blog/favicon.ico" />
      </Head>
      <body>
        <Script
          type="text/javascript"
          src="js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
