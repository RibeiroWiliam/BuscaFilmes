import Link from 'next/link'
import styles from './navbar.css'

export default function Navbar() {
    return (
        <header class="">
            <nav class="navbar navbar-expand-lg navbar-default" >
                <div class="container-fluid" >
                    <Link class="navbar-brand" href="../">BuscaFilmes</Link>
                </div>
            </nav>
        </header>
    )
}