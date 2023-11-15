"use client";

import BarraPesquisa from "../components/barraPesquisa";
import Card from "../components/card";
import styles from "../page.module.css";
import React, { createContext, useContext, useEffect, useState } from "react";

export const MoviesContext = createContext([]);

export default function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = "afbeee5dc8a56d84b3457702342ba299";

    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        setMovies(movies);
      });
  }, []);

  return (
    <MoviesContext.Provider value={movies}>
      <main className={styles.mainBox}>
        <section className={styles.sectionBox}>
          <BarraPesquisa setMovies={setMovies} />
        </section>
        <MoviesGrid />
      </main>
    </MoviesContext.Provider>
  );
}

function MoviesGrid() {
  const movies = useContext(MoviesContext);

  return (
    <section>
      <label>Filmes em Alta</label>
      <div className={styles.movieList}>
        {Array.isArray(movies) &&
          movies.map((movie) => <Card key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
}
