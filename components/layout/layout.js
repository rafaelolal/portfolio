import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <main className="container mb-5">
        {props.children}
      </main>
    </>
  );
}
