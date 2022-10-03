import { Fragment } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <main class="container my-5">{props.children}
      <Footer />
      </main>
    </Fragment>
  );
}
