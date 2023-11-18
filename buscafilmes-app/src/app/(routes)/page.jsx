"use client";

import Link from "next/link";
import BarraPesquisa from "../components/barraPesquisa";
import Slider from "../components/slider";
import styles from "../page.module.css";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [hypeMovies, setHypeMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const apiKey = "afbeee5dc8a56d84b3457702342ba299";

    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const hypeMovies = data.results;
        setHypeMovies(hypeMovies);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const topMovies = data.results;
        setTopMovies(topMovies);
      });
  }, []);

  return (
    <main className={styles.mainBox}>
      <section className={styles.sectionBox}>
        <BarraPesquisa setMovies={setHypeMovies} />
      </section>
      <section class={styles.moviesBox}>
        <div className={styles.sliderBox}>
          <div className={styles.sliderTitleBox}>
            <Link href="/nowplaying" className={styles.sliderTitle}>
              <span >Em alta</span>
              <i class='bx bxs-chevron-right' ></i>
            </Link>
          </div>
          <Slider movies={hypeMovies} className={styles.slider} />
        </div>
        <div className={styles.sliderBox}>
          <div className={styles.sliderTitleBox}>
            <Link href="/nowplaying" className={styles.sliderTitle}>
              <span>Melhor avaliados</span>
              <i class='bx bxs-chevron-right' ></i>
            </Link>
          </div>
          <Slider movies={topMovies} className={styles.slider} />
        </div>
      </section>
    </main>
  );
}
