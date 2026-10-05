import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTitle}>
        <a>
          BAIXE O APLICATIVO DE CELULAR RIOT MOBILE
        </a>
      </div>

      <div className={styles.footerInfoContainer}>
        <ul>
          <li>
            <a href="#">
              <img src="" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" alt="" />
            </a>
          </li>
        </ul>

        <a href="#">
            <img src="" alt="" />
        </a>

        <p>
          2020-2026 Riot Games, Inc, RIOT GAMES, VALORANT e todos os logotipos
          associados são marcas comerciais, marcas de serviço e/ou marcas
          registradas da Riot Games, Inc.
        </p>

        <ul className={styles.footerContractsList}>
          <li>
            <a href="#">POLÍTICA DE PRIVACIDADE</a>
          </li>
          <li>
            <a href="#">TERMOS DE SERVIÇO</a>
          </li>
          <li>
            <a href="#">PREFERÊNCIAS DE COOKIES</a>
          </li>
        </ul>

        <img src="" alt="Classificação indicativa: 14 anos" />
      </div>
    </div>
  );
}
