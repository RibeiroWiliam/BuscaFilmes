import Image from "next/image";
import styles from "../../css/about.module.css";

export default function About() {
    return (
        <main>
            <div className={styles.authorBox}>
                <Image/>
            </div>
            <div className={styles.technologiesBox}>

            </div>
        </main>
    )
}