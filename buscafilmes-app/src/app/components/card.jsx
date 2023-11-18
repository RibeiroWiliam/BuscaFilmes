import styles from '../css/card.css'
import Link from 'next/link'

export default function Card(movie) {
    console.log(movie)
    const url = "https://image.tmdb.org/t/p/w500" + movie.movie.poster_path;

    return (
        <div class="card-box" className={styles.cardBox}>
             <Link href={"../movie/" + movie.movie.id}>
            <div class="img-box" className={styles.imgBox}>
                <img src={url} alt={movie.movie.title} />
            </div>
            </Link>
        </div>
    )
}