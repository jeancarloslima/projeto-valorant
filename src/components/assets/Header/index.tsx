import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Header.module.css";
import { FaXmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);

      if (window.innerWidth >= 1024) {
        setIsMenuOpen(true);
      }
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

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className={styles.headerLinksContainer}
                initial={ isDesktop ? '' : { x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
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

                <div className={styles.searchInput}>
                  <FaSearch size={20} />
                </div>

                <ul className={styles.headerList}>
                  <li>
                    <a href="#">
                      <p>INFORMAÇÕES DO JOGO</p>
                      <span></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>MÍDIA</p>
                      <span></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>NOTÍCIAS</p>
                      <span></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>MAIS</p>
                      <span></span>
                    </a>
                  </li>
                </ul>

                <button className={styles.headerButton}>Jogue agora</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
