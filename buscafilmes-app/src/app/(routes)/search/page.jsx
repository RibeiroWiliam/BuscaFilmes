"use client";

import BarraPesquisa from "../../components/barraPesquisa";
import Card from "../../components/card";
import React, { createContext, useContext, useEffect, useState } from "react";

import styles from "../../page.module.css";
import { useSearchParams } from "next/navigation";

export const MoviesContext = createContext([]);

export default function Search() {
  const [movies, setMovies] = useState([]);
  const searchParams = useSearchParams();

  const search = searchParams.get("q");

  useEffect(() => {
    const apiKey = "afbeee5dc8a56d84b3457702342ba299";
    if (search != undefined) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${search}&language=pt-BR&api_key=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          const movies = data.results;
          setMovies(movies);
        });
    }
  }, [search]);

  return (
    <MoviesContext.Provider value={movies}>
      <main className={styles.mainBox}>
        <section className={styles.sectionBox}>
          <div className={styles.searchBox}>
            <BarraPesquisa setMovies={setMovies} />
          </div>
        </section>
        <MoviesGrid />
      </main>
    </MoviesContext.Provider>
  );
}

function MoviesGrid() {
  const movies = useContext(MoviesContext);
  const searchParams = useSearchParams();

  const search = searchParams.get("q");

  return (
    <section>
      {movies && movies.length > 0 && (
        <label className={styles.gridTitle}>
          {movies.length} Resultados para {search}
        </label>
      )}
      <div className={styles.movieList}>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
