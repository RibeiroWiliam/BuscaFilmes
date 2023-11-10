import styles from '../css/poster.module.css'

export default function Poster({ movie }) {
    console.log(movie)
    const url = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

    return (
        <div className={styles.cardBox}>
            <div className={styles.imgBox}>
                <img src={url} alt={movie.title} />
            </div>
        </div>
    )
}