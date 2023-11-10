"use client"

import BarraPesquisa from '../../components/barraPesquisa';
import Card from '../../components/card'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'next/navigation'

import styles from '../../page.module.css'

export const MoviesContext = createContext([]);

export default function Search() {
    const [movies, setMovies] = useState([]);

    const params = useParams();

    useEffect(() => {
        const apiKey = "afbeee5dc8a56d84b3457702342ba299"
        if (params.query != undefined) {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${params.query}&language=pt-BR&api_key=${apiKey}`)
                .then((response) => response.json())
                .then((data) => {
                    const movies = data.results;
                    setMovies(movies);
                });
        }
    }, [params.query]);

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
    const params = useParams();

    return (
        <section>
            {movies && movies.length > 0 && <label>{movies.length} Resultados para {params.query}</label>}      
            <div className={styles.movieList}>
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    )
}