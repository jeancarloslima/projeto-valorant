import styles from "./AgentPage.module.css";
import { Navigate, useLocation } from "react-router";
import type { Agent } from "../../types/types";

export default function AgentPage() {
  const location = useLocation();
  const agent = location.state?.agent as Agent;

  if (!agent) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.container}>
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
        </div>
      </div>
    </div>
  );
}
