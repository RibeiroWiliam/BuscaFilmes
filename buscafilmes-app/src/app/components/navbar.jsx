"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import styles from "../css/navbar.css";
import logo from "../images/logoIcon.png";

export default function Navbar() {
  const home = useRef(),
    nowplaying = useRef(),
    toprated = useRef(),
    about = useRef();

  const router = useRouter;

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        home.class.toggle("active");
        home.aria - current.toggle("page");
        break;
      case "/nowplaying":
        about.class.toggle("active");
        about.aria - current.toggle("page");
        break;
      case "/toprated":
        about.class.toggle("active");
        about.aria - current.toggle("page");
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
            <Image
              src={logo}
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
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
                <Link ref={nowplaying} class="nav-link" href="/nowplaying">
                  Em alta
                </Link>
              </li>
              <li class="nav-item">
                <Link ref={toprated} class="nav-link" href="/toprated">
                  Melhores avaliados
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
