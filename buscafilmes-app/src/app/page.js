"use client"

import Card from './card'
import Navbar from './navbar'
import styles from './page.module.css'
import React, { createContext, useContext, useState } from 'react';

export const MoviesContext = createContext([]);

export default function Home() {
  const [movies, setMovies] = useState([]);
  return (
    <MoviesContext.Provider value={movies}>
      <body>
        <Navbar />
        <main className={styles.mainBox}>
          <section className={styles.sectionBox}>
            <div className={styles.searchBox}>
              <BtnBuscar setMovies={setMovies} />
            </div>
          </section>
          <MoviesGrid />
        </main>
      </body>
    </MoviesContext.Provider>
  )


}

function BtnBuscar({ setMovies }) {
  let movies = useContext(MoviesContext);
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const apiKey = "afbeee5dc8a56d84b3457702342ba299"
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        movies = data.results;
        setMovies(movies);
      });
  }

  return (
    <div>
      <form className={styles.searchBox} onSubmit={handleFormSubmit}>
        <input type="search" name="" className={styles.searchInput} value={query} onChange={handleInputChange} placeholder="Digite o nome de um filme..." />
        <button type="submit" className={styles.btnBuscar}><i class='bx bx-search'></i></button>
      </form>
    </div>
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