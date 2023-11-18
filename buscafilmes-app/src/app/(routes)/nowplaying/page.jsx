"use client";

import MovieGrid from "@/app/components/movieGrid";
import BarraPesquisa from "../../components/barraPesquisa";
import Card from "../../components/card";
import styles from "../../page.module.css";
import React, { createContext, useContext, useEffect, useState } from "react";

export const MoviesContext = createContext([]);

export default function NowPlaying() {
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
      });
  }, []);

  return (
      <main className={styles.mainBox}>
        <section className={styles.sectionBox}>
          <BarraPesquisa setMovies={setMovies} />
        </section>
        <div className={styles.gridTitle}>Em alta</div>
        <MovieGrid movies={movies}/>
      </main>
  );
}