import Link from 'next/link'
import styles from '../css/navbar.css'

export default function Navbar() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-default" >
                <div class="container-fluid" >
                    <Link class="navbar-brand" href="/">BuscaFilmes</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/search">Filmes</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="/about">Sobre</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}