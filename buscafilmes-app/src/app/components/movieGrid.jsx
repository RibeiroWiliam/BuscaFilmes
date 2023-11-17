import Card from "./card";
import styles from "../css/movieGrid.module.css"

export default function MovieGrid({movies}) {
    return (
        <div className={styles.movieGrid}>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
    );
  }