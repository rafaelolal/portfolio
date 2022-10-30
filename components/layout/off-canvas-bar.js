import Link from "next/link";
import DiscordIcon from "../icons/discord-icon";
import EmailIcon from "../icons/email-icon";
import HamburgerIcon from "../icons/hamburger-icon";
import LinkedInIcon from "../icons/linkedIn-icon";
import NavigiationIcon from "../icons/navigation-icon";
import TelephoneIcon from "../icons/telephone-icon";

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
        <a className="navbar-brand ms-2" href="#">
          Logo
        </a>
        <div
          className="offcanvas offcanvas-start"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h1
              className="offcanvas-title mx-auto fw-bold"
              id="offcanvasNavbarLabel"
            >
              CONTACT ME
            </h1>
          </div>
          <div className="offcanvas-body">
            <p className="nav-link fs-5" href="#">
              <TelephoneIcon />
              +1 (908) 937-4898
            </p>
            <p className="nav-link fs-5" href="#">
              <EmailIcon />
              rafaelpbcp@gmail.com
            </p>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/rafael-almeida-386bb0202/"
                >
                  <p className="fs-5" href="#">
                    <LinkedInIcon />
                    Rafael Almeida
                  </p>
                </a>
              </li>
            </ul>
            <p className="nav-link fs-5" href="#">
              <DiscordIcon />
              Rafael Almeida#3398
            </p>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <hr />
              <li className="nav-item pb-2 dropdown fs-5">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <NavigiationIcon />
                  Navigation
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/">
                      <a className="dropdown-item">Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="about">
                      <a className="dropdown-item">About Me</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="posts">
                      <a className="dropdown-item">Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="resume">
                      <a className="dropdown-item">Resume</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
