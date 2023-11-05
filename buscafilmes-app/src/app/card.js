import styles from './card.css'
import fetch from 'node-fetch';

export default function Card(movie) {
    console.log(movie)
    const url = "https://image.tmdb.org/t/p/w500" + movie.movie.poster_path;

    return (
        <div className={styles.cardBox}>
            <div className={styles.imgBox}>
                <img src={url} />
            </div>
            {movie.title}
            <a className={styles.Link}>Ver Mais</a>
        </div>
    )
}