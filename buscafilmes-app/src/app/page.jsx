"use client";

import BarraPesquisa from "./components/barraPesquisa";
import Card from "./components/card";
import Slider from "./components/slider";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = "afbeee5dc8a56d84b3457702342ba299";

    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        setMovies(movies);
        console.log(movies);
      });
  }, []);

  return (
    <main className={styles.mainBox}>
      <section className={styles.sectionBox}>
        <BarraPesquisa setMovies={setMovies} />
      </section>
      <Slider movies={movies} className={styles.slider} />
    </main>
  );
}
