import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerLogos}>
          <a href="#" className={styles.headerRiotLink}>
            <img src="/riot-games-seeklogo.svg" alt="Logo Riot Games" />
          </a>

          <a href="#" className={styles.headerValorantLink}>
            <img src="/valorant-logo.svg" alt="Logo Valorant" />
          </a>
        </div>

        <div className={styles.headerLinks}>
          <div className={styles.menuHamburguer}>
            <div className={styles.menuHamburguerLogo}>
              <span className={styles.menuHamburguerBar}></span>
            </div>
          </div>

          <div className={styles.headerLinksContainer}>
            <ul className={styles.headerList}>
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
      </div>
    </div>
  );
}
