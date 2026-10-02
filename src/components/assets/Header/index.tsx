import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <ul className={styles.headerList}>
                    <li>
                        <img src="" alt="" />
                    </li>

                    <li>
                        <img src="" alt="" />
                    </li>

                    <li>INFORMAÇÕES DO JOGO</li>
                    <li>MÍDIA</li>
                    <li>NOTÍCIAS</li>
                    <li>SUPORTE</li>
                    <li>SOCIAL</li>
                    <li>ESPORTS</li>
                    <li>COMUNIDADE</li>
                    <li>DUELO: ASCENSÃO</li>
                    <li>MAIS</li>
                </ul>

                <div>
                    <div></div>
                    <a href="#">
                        <img src="" alt="" />
                    </a>
                    <button className={styles.headerButton}>Jogue agora</button>
                </div>
            </div>
        </div>
    )
}