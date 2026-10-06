import styles from "./AgentPage.module.css";
import { Navigate, useLocation } from "react-router";
import type { Agent } from "../../types/types";
import Header from "../assets/Header";
import { motion } from "framer-motion";
import Footer from "../assets/Footer";

export default function AgentPage() {
  const location = useLocation();
  const agent = location.state?.agent as Agent;

  if (!agent) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <Header />

      <section className={styles.agentSection}>
        <div className={styles.agentContainer}>
          <div className={styles.agentImageContainer}>
            <img
              className={styles.agentImage}
              src={agent.fullPortrait}
              alt={agent.displayName}
            />
          </div>
          <div className={styles.agentInfoContainer}>
            <h1 className={styles.agentName}>{agent.displayName}</h1>
            <p className={styles.agentDescription}>{agent.description}</p>

            <div className={styles.roleCard}>
              <img
                src={agent.role.displayIcon}
                alt={`Ícone de ${agent.role.displayName}`}
              />
              <span>FUNÇÃO</span>
              <h3>{agent.role.displayName}</h3>
            </div>

            <span className={styles.horizontalRow}></span>
          </div>
        </div>
      </section>

      <section className={styles.abilitiesSection}>
        <img
          className={styles.abilitiesSectionBackgroundImage}
          src={agent.role.displayIcon}
        />
        <div className={styles.abilitiesNameContainer}>
          <h2 className={styles.titleAbilitiesContainer}>
            HABILIDADES ESPECIAIS
          </h2>
          <ul className={styles.abilitiesList}>
            {agent.abilities.map((abl) => (
              <li className={styles.abilityItem}>
                <img
                  className={styles.abilityIcon}
                  src={abl.displayIcon ? abl.displayIcon : ""}
                  alt={`Ícone da habilidade ${abl.displayName}`}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.abilityInfoContainer}>
          <img
            className={styles.abilityVideoImage}
            src="/the-range-valorant-guide-shooting.avif"
            alt={`Vídeo da habilidade ${agent.abilities[0].displayName}`}
          />
          <h3 className={styles.abilityTitle}>
            {agent.abilities[0].displayName}
          </h3>
          <p className={styles.abilityDescription}>
            {agent.abilities[0].description}
          </p>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
