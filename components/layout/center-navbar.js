import Link from "next/link";

export default function CenterNavbar() {
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
              <Link href="/portfolio">
                <a className="nav-link fw-bold">PORTFOLIO</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
