import Link from "next/link";
import EmailIcon from "../icons/email-icon";
import HamburgerIcon from "../icons/hamburger-icon";
import LinkedInIcon from "../icons/linkedIn-icon";
import VisitIcon from "../icons/visit-icon";

export default function OffCanvasBar() {
  return (
    <nav className="navbar me-auto">
      <div className="container-fluid">
        <a
          className=""
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <HamburgerIcon />
        </a>
        <a className="navbar-brand ms-2">
          <img
            src="/blog/logo.png"
            alt="..."
            height="32"
            width="32"
          />
        </a>
        <div
          className="offcanvas offcanvas-start"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <p
              className="offcanvas-title mx-auto fw-bold fs-1"
              id="offcanvasNavbarLabel"
            >
              CONTACT ME
            </p>
          </div>
          <div className="offcanvas-body">
            <p className="nav-link fs-5">
              <EmailIcon />
              portfolio@ralmeida.dev
            </p>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/ralmeidadev/"
                >
                  <p className="fs-5">
                    <LinkedInIcon />
                    Rafael Almeida
                  </p>
                </a>
              </li>
            </ul>

            <hr />

            <ul className="navbar-nav">
              <li
                className="nav-item"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
              >
                <Link href="/">
                  <a className="nav-link fs-5 pt-0 pb-0">
                    <VisitIcon />
                    Home
                  </a>
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
              >
                <Link href="/about">
                  <a className="nav-link fs-5 pb-0">
                    <VisitIcon />
                    About Me
                  </a>
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
              >
                <Link href="/portfolio">
                  <a className="nav-link fs-5 pb-0">
                    <VisitIcon />
                    Portfolio
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
