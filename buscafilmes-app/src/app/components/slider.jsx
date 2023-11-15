import Link from "next/link";
import styles from "../css/poster.module.css";

export default function Slider({ movies }) {
  const navButtons = [];

  for (let i = 0; i < movies.length; i++) {
    navButtons.push(<NavButton slideNumber={i} />);
  }

  return (
    <div id="carouselBox" class="carousel slide">
      <div class="carousel-indicators">{navButtons}</div>
      <div class="carousel-inner">
        {Array.isArray(movies) &&
          movies.map((movie) => <CarouselItem key={movie.id} movie={movie} />)}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselBox"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselBox"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function NavButton(slideNumber) {
  return (
    <button
      type="button"
      data-bs-target="#carouselBox"
      data-bs-slide-to={slideNumber}
      aria-current="true"
    ></button>
  );
}

function CarouselItem({ movie }) {
  const url = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  console.log(url);

  return (
    <div class="carousel-item">
      <Link href={"../movie/" + movie.id}>
        <div class="card-box" className={styles.cardBox}>
          <div class="img-box" className={styles.imgBox}>
            <img src={url} alt={movie.title} />
          </div>
        </div>
      </Link>
    </div>
  );
}
