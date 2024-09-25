import EmailMe from "./email-me";
import CenterNavbar from "./center-navbar";
import OffCanvasBar from "./off-canvas-bar";

export default function Navbar() {
  return (
    <nav className="navbar bg-white shadow-sm">
      <OffCanvasBar />
      <CenterNavbar />
      <EmailMe />
    </nav>
  );
}
