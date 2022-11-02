import Link from "next/link";

export default function MainNavbar() {
  return (
    <nav className="navbar navbar-expand-lg mx-auto">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link fw-bold" aria-current="page">
                  HOME
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link fw-bold">ABOUT ME</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a className="nav-link fw-bold">BLOG</a>
              </Link>
            </li>
            <li>
              <Link href="/resume">
                <a className="nav-link fw-bold">RESUME</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
