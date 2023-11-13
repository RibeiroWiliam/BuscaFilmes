"use client";

import Link from "next/link";
import styles from "../css/navbar.css";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const home = useRef(),
    about = useRef();

  const router = useRouter;

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        home.class.toggle("active");
        home.aria - current.toggle("page");
        break;
      case "/about":
        about.class.toggle("active");
        about.aria - current.toggle("page");
        break;
    }
  }, []);

  return (
    <header>
      <nav class="navbar navbar-expand-md fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand" href="/">
            BuscaFilmes
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
                <Link ref={home} class="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link ref={about} class="nav-link" href="/about">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
