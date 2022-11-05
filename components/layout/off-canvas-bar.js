import Image from "next/image";
import Link from "next/link";
import DiscordIcon from "../icons/discord-icon";
import EmailIcon from "../icons/email-icon";
import HamburgerIcon from "../icons/hamburger-icon";
import LinkIcon from "../icons/link-icon";
import LinkedInIcon from "../icons/linkedIn-icon";
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
              <TelephoneIcon />
              +1 (908) 937-4898
            </p>
            <p className="nav-link fs-5">
              <EmailIcon />
              rafaelpbcp@gmail.com
            </p>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/rafael-almeida-386bb0202/"
                >
                  <p className="fs-5">
                    <LinkedInIcon />
                    Rafael Almeida
                  </p>
                </a>
              </li>
            </ul>
            <p className="nav-link fs-5">
              <DiscordIcon />
              Rafael Almeida#3398
            </p>

            <hr />

            <ul className="navbar-nav">
              <li
                className="nav-item"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
              >
                <Link href="/">
                  <a className="nav-link fs-5 pt-0 pb-0">
                    <LinkIcon />
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
                    <LinkIcon />
                    About Me
                  </a>
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
              >
                <Link href="/posts">
                  <a className="nav-link fs-5 pb-0">
                    <LinkIcon />
                    Blog
                  </a>
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
              >
                <Link href="/resume">
                  <a className="nav-link fs-5 pb-0">
                    <LinkIcon />
                    Resume
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
