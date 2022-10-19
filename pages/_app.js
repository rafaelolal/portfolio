import { useEffect } from "react";

import "../styles/globals.css";
import "../styles/scss/main.css";
import Layout from "../components/layout/layout";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
