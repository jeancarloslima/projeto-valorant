import { useEffect } from "react";
import { useAgents } from "../../context/agents/AgentContext";
import { GridList, GridListItem } from "react-aria-components";
import styles from "./GridList.module.css";
import { useNavigate } from "react-router";

export default function HomePage() {
  const { agents, isLoading, error, loadAgents } = useAgents();
  const navigate = useNavigate();

  useEffect(() => {
    if (agents.length === 0) {
      loadAgents();
    }
  }, [agents.length, loadAgents]);

  if (isLoading) return <p>Carregando agentes...</p>;
  if (error) return <p style={{ color: "red" }}>Erro: {error}</p>;

  return (
    <main className={styles.content}>
      <div className={styles.container}>
        <h2 className={styles.pageTitle}>AGENTES</h2>

        <GridList
          className={styles.gridList}
          items={agents}
          aria-label="Lista de agentes"
          selectionMode="single"
          onAction={(key) => navigate(`/agent/${key}`)}
        >
          {(agent) => (
            <GridListItem
              className={styles.gridItem}
              textValue={agent.displayName}
              id={agent.uuid}
            >
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.agentImage}
                    src={agent.fullPortrait}
                    alt={`Retrato do ${agent.displayName}`}
                  />
                </div>
                <span className={styles.agentName}>{agent.displayName}</span>
              </div>
            </GridListItem>
          )}
        </GridList>
      </div>
    </main>
  );
}
