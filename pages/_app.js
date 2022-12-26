import { AppWrapper } from "../context/state";
import "../styles/main.scss";
import Layout from "../components/layout/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}
