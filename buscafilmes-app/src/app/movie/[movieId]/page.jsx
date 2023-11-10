'use client'

import Poster from '@/app/components/poster';
import { useParams, useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react';
import styles from '../../css/moviePage.module.css'

export default function Movie() {
    const router = useRouter();
    const params = useParams();
    const [movie, setMovie] = useState([]);
    const movieGenres = movie.genres ? movie.genres.map(genre => genre.name).join(", ") : "";

    useEffect(() => {
        const apiKey = "afbeee5dc8a56d84b3457702342ba299";
        fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?language=pt-BR&api_key=${apiKey}`)
            .then(response => response.json())
            .then(response => {
                setMovie(response);
            })
            .catch(err => console.error(err));
    }, []);

    const handleGoBack = () => {
        router.back();
    }

    return (
        <main className={styles.main}>
            <section>
                <button onClick={handleGoBack}>Voltar</button>
                <Poster movie={movie} />
            </section>
            <section className={styles.detailsBox}>
                <h1>{movie.title}</h1>
                <div>{movieGenres}</div>
                <div>{movie.release_date}</div>
                <div>{movie.overview}</div>
            </section>
        </main>
    );
}