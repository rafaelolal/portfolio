import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <main className="container my-5">
        {props.children}
      </main>
    </>
  );
}
