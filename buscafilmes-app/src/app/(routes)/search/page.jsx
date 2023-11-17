"use client";

import BarraPesquisa from "../../components/barraPesquisa";

import React, { useEffect, useState } from "react";

import styles from "../../page.module.css";
import { useSearchParams } from "next/navigation";
import MovieGrid from "@/app/components/movieGrid";

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
      <main className={styles.mainBox}>
        <section className={styles.sectionBox}>
            <BarraPesquisa setMovies={setMovies} />
        </section>
        <section className={styles.movieList}>
        {movies && movies.length > 0 && (
          <div className={styles.gridTitle}>
            {movies.length} Resultados para {search}
          </div>
        )}
        <MovieGrid movies={movies}/>
        </section>     
      </main>
  );
}


