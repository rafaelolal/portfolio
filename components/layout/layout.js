import Navbar from "./navbar";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <main className="container-md p-0">
        {props.children}
      </main>
    </>
  );
}
