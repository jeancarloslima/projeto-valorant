import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.css";
import { FaXmark } from "react-icons/fa6";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <button
              onClick={() => setIsMenuOpen(true)}
              className={styles.menuHamburguerButton}
            >
              <span className={styles.menuHamburguerBar}></span>
            </button>
          </div>

          <motion.div
            initial={
              isDesktop ? { opacity: 1, x: 100 } : { opacity: 1, x: 100 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`${styles.headerLinksContainer} ${isMenuOpen ? styles.menuOpen : ""}`}
          >
            <div className={styles.menuHeaderTop}>
              <img src="/valorant-logo.svg" alt="Logo Valorant" />

              <button
                onClick={() => setIsMenuOpen(false)}
                className={styles.closeButton}
              >
                <FaXmark color="#FFF" size={24} />
              </button>
            </div>

            <div className={styles.searchInput}></div>

            <ul className={styles.headerList}>
              <li>
                <a href="#">INFORMAÇÕES DO JOGO</a>
              </li>
              <li>
                <a href="#">MÍDIA</a>
              </li>
              <li>
                <a href="#">NOTÍCIAS</a>
              </li>
              <li>
                <a href="#">SUPORTE</a>
              </li>
              <li>
                <a href="#">SOCIAL</a>
              </li>
              <li>
                <a href="#">ESPORTS</a>
              </li>
              <li>
                <a href="#">COMUNIDADE</a>
              </li>
              <li>
                <a href="#">DUELO: ASCENSÃO</a>
              </li>
              <li>
                <a href="#">MAIS</a>
              </li>
            </ul>

            <div>
              <div></div>
              <a href="#">
                <img src="" alt="" />
              </a>
              <button className={styles.headerButton}>Jogue agora</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
