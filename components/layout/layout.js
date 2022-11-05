import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <main className="container">
        {props.children}
      </main>
    </>
  );
}
