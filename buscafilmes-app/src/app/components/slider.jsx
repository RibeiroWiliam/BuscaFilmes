import Link from "next/link";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import styles from "../css/slider.module.css";
register();

export default function Slider({ movies }) {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    // Slider main container
    <swiper-container
      className={styles.swiperSlide}
      ref={swiperElRef}
      slides-per-view="7"
      speed="500"
      loop="true"
      css-mode="true"
      pagination="true"
      pagination-clickable="true"
      navigation="true"
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id} movie={movie} />
      ))}
    </swiper-container>
  );
}

function SwiperSlide({ movie }) {
  const url = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <swiper-slide lazy="true" className={styles.swiperSlide}>
      <Link href={"../movie/" + movie.id}>
        <img
          src={url}
          alt={movie.title}
          loading="lazy"
          className={styles.img}
        />
      </Link>
    </swiper-slide>
  );
}
