import { useEffect } from "react";

import { AppWrapper } from "../context/state";
import "../styles/scss/main.css";
import Layout from "../components/layout/layout";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <AppWrapper>
      <Head>
        <link rel="shortcut icon" href="/blog/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}
