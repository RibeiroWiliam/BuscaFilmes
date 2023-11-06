'use client'

import Poster from '@/app/poster';
import { useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react';

function Movie() {
    const params = useParams();
    const [movie, setMovie] = useState([]);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const apiKey = "afbeee5dc8a56d84b3457702342ba299";
        fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(response => {
                setMovie(response);
                const image = new Image();
                image.src = `https://image.tmdb.org/t/p/w500${response.movie.poster_path}`;
                const interval = setInterval(() => {
                    if (image.complete) {
                        setImageLoaded(true);
                        clearInterval(interval);
                    }
                }, 100);
            })
            .catch(err => console.error(err));
    }, [params.movieId]);

    return (
        <main>
            <section>
                {imageLoaded ? (
                    <Poster movie={movie} />
                ) : (
                    <div>Loading...</div>
                )}
            </section>
            <section>
                <div>Movie ID: {params.movieId}</div>
            </section>
        </main>
    );
}

export default Movie;