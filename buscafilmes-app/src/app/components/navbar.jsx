import Link from "next/link";
import Image from "next/image";

import styles from "../css/navbar.css";
import logo from "../images/logoIcon.png";

export default function Navbar() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand" href="/">
            <Image
              src={logo}
              width="30"
              height="30"
              class="navbar-brand-img d-inline-block align-top"
              alt=""
            />
            buscafilmes
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
              <NavLink href="/" name="Home" />
              <NavLink href="/nowplaying" name="Em alta" />
              <NavLink href="/toprated" name="Melhor avaliados" />
              <NavLink href="/about" name="Sobre" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, name, activePage }) {
  const isActive = activePage === href;
  return (
    <li class={`nav-item ${isActive ? "active" : ""}`}>
      <Link href={href} class="nav-link">
        {name}
      </Link>
    </li>
  );
}
