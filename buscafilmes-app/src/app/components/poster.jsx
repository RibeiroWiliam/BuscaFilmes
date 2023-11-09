import styles from '../css/poster.css'

export default function Poster({ movie }) {
    console.log(movie)
    const url = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

    return (
        <div class="card-box" className={styles.cardBox}>
            <div class="img-box" className={styles.imgBox}>
                <img src={url} alt={movie.title} />
            </div>
        </div>
    )
}