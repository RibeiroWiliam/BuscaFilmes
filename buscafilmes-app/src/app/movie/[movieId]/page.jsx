"use client";

import Poster from "@/app/components/poster";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import styles from "../../css/moviePage.module.css";
import Image from "next/image";

export default function Movie() {
  const router = useRouter();
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const movieProductionCompanies = movie.production_companies
    ? movie.production_companies.map((genre) => genre.name).join(", ")
    : "";
  const movieGenres = movie.genres
    ? movie.genres.map((genre) => genre.name).join(", ")
    : "";

  useEffect(() => {
    const apiKey = "afbeee5dc8a56d84b3457702342ba299";
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}?language=pt-BR&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className={styles.main}>
      <section className={styles.posterBox}>
        <Poster movie={movie} />
      </section>
      <section className={styles.detailsBox}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h2 className={styles.subtitle}>{movie.original_title}</h2>
        <div className={styles.title}>{movieGenres}</div>
        <div className={styles.date}>
          Data de Lançamento: {movie.release_date}
        </div>
        <div className={styles.companies}>{movieProductionCompanies}</div>
        <div className={styles.budget}>
          <i class="bx bx-dollar"></i>
          {movie.budget}
        </div>
        <p className={styles.overview}>{movie.overview}</p>

        <button className={styles.btnGoBack} onClick={handleGoBack}>
          <i class="bx bx-arrow-back"></i>
          Voltar
        </button>
      </section>
    </main>
  );
}
