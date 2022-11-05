import EmailMe from "./email-me";
import MainNavbar from "./center-navbar";
import OffCanvasBar from "./off-canvas-bar";

export default function Navbar() {
  return (
    <nav className="navbar bg-white shadow-sm">
      <OffCanvasBar />
      <MainNavbar />
      <EmailMe />
    </nav>
  );
}
