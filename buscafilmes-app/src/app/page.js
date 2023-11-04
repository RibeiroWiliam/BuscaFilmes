import BtnBuscar from './btnBuscar'
import Navbar from './navbar'
import styles from './page.module.css'

export default function Home() {
  return (
    <body>
      <Navbar />
      <main className={styles.mainBox}>
        <div className={styles.searchBox}>
          <BtnBuscar />
        </div>
      </main>
    </body>
  )
}
