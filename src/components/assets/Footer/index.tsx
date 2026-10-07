import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
import { FaX } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTitle}>
        <a className={styles.footerTextLink}>
          BAIXE O APLICATIVO DE CELULAR RIOT MOBILE
        </a>
      </div>

      <div className={styles.footerInfoContainer}>
        <ul className={styles.footerLinksList}>
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaX />
            </a>
          </li>
          <li>
            <a href="#">
              <FaDiscord />
            </a>
          </li>
        </ul>

        <a href="#" className={styles.footerLogo}>
          <img src="/riot-games-seeklogo-gray.svg" alt="Logo Riot Games" />
        </a>

        <p className={styles.copyText}>
          &copy; 2020-2026 Riot Games, Inc, RIOT GAMES, VALORANT e todos os
          logotipos associados são marcas comerciais, marcas de serviço e/ou
          marcas registradas da Riot Games, Inc.
        </p>

        <ul className={styles.footerContractsList}>
          <li>
            <a href="#" className={styles.footerTextLink}>
              POLÍTICA DE PRIVACIDADE
            </a>
          </li>
          <li>
            <a href="#" className={styles.footerTextLink}>
              TERMOS DE SERVIÇO
            </a>
          </li>
          <li>
            <a href="#" className={styles.footerTextLink}>
              PREFERÊNCIAS DE COOKIES
            </a>
          </li>
        </ul>

        <a href="#" className={styles.footerIndicativeRatingLink}>
          <img
            className={styles.footerIndicativeRatingImage}
            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar_live/56b9995c67f68a2c0fd24eb770044bf7050b3aa6-4149x2395.png?&h=100&fit=max"
            alt="Classificação indicativa: 14 anos"
          />
        </a>
      </div>
    </div>
  );
}
