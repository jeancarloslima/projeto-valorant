import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Header.module.css";
import { FaXmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import type { MenuTab } from "../../../types/types";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subMenuOpen, setsubMenuOpen] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);
  const [menuActiveTabs, setMenuActiveTabs] = useState<MenuTab[]>([
    {
      title: "Informações do jogo",
      items: ["Agentes", "Mapas", "Arsenal", "Premier"],
    },
    { title: "Mídia", items: [] },
    { title: "Notícias", items: [] },
    {
      title: "Suporte",
      items: ["Requisitos", "Suporte", "Código Da Comunidade"],
    },
    { title: "Social", items: ["Facebook", "Youtube", "Instagram", "X"] },
    { title: "Esports", items: [] },
    {
      title: "Comunidade",
      items: [
        "Jogue Torneios De Comunidade",
        "Organize Torneio De Comunidade",
        "Ranking Torneios De Comunidade",
        "Suporte Torneios De Comunidade",
      ],
    },
    { title: "Duelo: Anscesão", items: [] },
    { title: "Abater ou morrer", items: [] },
  ]);
  const [menuSpareTabs, setMenuSpareTabs] = useState<MenuTab[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);

      if (window.innerWidth >= 1024) {
        setIsMenuOpen(true);
      }

      if (window.innerWidth >= 1024 && window.innerWidth < 1800) {
        // 1285
        // 77 - 226
        // -190
        const itemsQuantity = Math.floor((window.innerWidth - 475) / 190);
        const itemsToMove = menuActiveTabs.slice(
          -(menuActiveTabs.length - itemsQuantity),
        );
        const itemsToMaintain = menuActiveTabs.slice(0, itemsQuantity);

        setMenuSpareTabs(itemsToMove);
        setMenuActiveTabs(itemsToMaintain);
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
                initial={isDesktop ? "" : { x: "100%" }}
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
                  {menuActiveTabs.map((tab) => (
                    <li key={tab.title} onClick={() => setsubMenuOpen(tab.title)} className={styles.headerItem}>
                      <a href="#" className={styles.headerLink}>
                        <p className={styles.headerParagraph}>
                          {tab.title}
                          {tab.items.length > 0 && (
                            <img
                              src="/caret-down-solid-full.svg"
                              alt="Logo Valorant"
                            />
                          )}
                        </p>
                      </a>

                      {tab.items.length > 0 && (
                        <ul className={`${styles.headerWithinList} ${tab.title === subMenuOpen ? 'headerWithinListActive' : ''}`}>
                          {tab.items.map((item) => (
                            <li className={styles.headerWithinItem}>
                              <a href="#" className={styles.headerWithinLink}>
                                <p className={styles.headerWithinParagraph}>
                                  {item}
                                </p>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                  {window.innerWidth >= 1024 && window.innerWidth <= 1800 && (
                    <li key="Mais" className={styles.headerItem}>
                      <a href="#" className={styles.headerLink}>
                        <p className={styles.headerParagraph}>
                          Mais
                          <img
                            src="/caret-down-solid-full.svg"
                            alt="Logo Valorant"
                          />
                        </p>
                      </a>

                      <ul className={styles.listWithinList}>
                        {menuSpareTabs.map((spareTab) => (
                          <li
                            key={spareTab.title}
                            className={styles.headerWithinItem}
                          >
                            <a href="#" className={styles.headerWithinLink}>
                              <p className={styles.headerWithinParagraph}>
                                {spareTab.title}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
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
