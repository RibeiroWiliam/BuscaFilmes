"use client"

import BarraPesquisa from './components/barraPesquisa';
import Card from './components/card'
import styles from './page.module.css'
import React, { createContext, useContext, useState } from 'react';

export const MoviesContext = createContext([]);

export default function Home() {
  const [movies, setMovies] = useState([]);
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
  )


}

function MoviesGrid() {
  const movies = useContext(MoviesContext);

  return (
    <section className={styles.movieList}>
      {movies.map((movie) => (
        <Card movie={movie} />
      ))}
    </section>
  )
}