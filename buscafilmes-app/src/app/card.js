import styles from './card.css'

export default function Card(movie) {
    console.log(movie)
    const url = "https://image.tmdb.org/t/p/w500" + movie.movie.poster_path;

    return (
        <div class="card-box" className={styles.cardBox}>
            <div class="img-box" className={styles.imgBox}>
                <img src={url} alt={movie.movie.title} />
            </div>
            <a href={"./movie/" + movie.movie.id} class="detalhes-link" role="button"><span class="text">Detalhes</span></a>
        </div>
    )
}