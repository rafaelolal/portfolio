import Link from "next/link";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link href="/">
          <a class="navbar-brand">Home</a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link href="projects">
                <a class="nav-link">Projects</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="about">
                <a class="nav-link">About</a>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link href="activities">
                    <a class="dropdown-item">Activities</a>
                  </Link>
                </li>
                <li>
                  <Link href="education">
                    <a class="dropdown-item">Education</a>
                  </Link>
                </li>
                <li>
                  <Link href="resume">
                    <a class="dropdown-item">Resume</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
