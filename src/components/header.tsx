import Logo from "./ui/logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo */}
            <Logo />
            {/* <!-- Main Menu start --> */}
            <div className="collapse navbar-collapse main-menu">
              <ul className="navbar-nav mr-auto" id="menu">
                <li className="nav-item">
                  <Link className="nav-link" href="about.html">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="about.html">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="services.html">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="projects.html">
                    Projects
                  </Link>
                </li>
                <li className="nav-item highlighted-menu">
                  <Link className="nav-link" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- Main Menu End --> */}

            <div className="navbar-toggle"></div>
          </div>
        </nav>

        <div className="responsive-menu"></div>
      </div>
    </header>
  );
}
