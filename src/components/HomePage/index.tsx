import { useEffect } from "react";
import { useAgents } from "../../context/agents/AgentContext";
import { GridList, GridListItem } from "react-aria-components";
import styles from "./GridList.module.css";
import { useNavigate } from "react-router";
import Header from "../assets/Header";
import { motion } from "framer-motion";

export default function HomePage() {
  const { agents, isLoading, error, loadAgents } = useAgents();
  const navigate = useNavigate();

  useEffect(() => {
    if (agents.length === 0) {
      loadAgents();
    }
  }, [agents.length, loadAgents]);

  if (isLoading)
    return (
      <p style={{ color: "#ece8e1", textAlign: "center", fontSize: "2rem" }}>
        Carregando agentes...
      </p>
    );
  if (error)
    return (
      <p style={{ color: "#D55B6A", textAlign: "center", fontSize: "2rem" }}>
        Erro: {error}
      </p>
    );

  return (
    <>
      <Header />

      <main className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>AGENTES</h1>

          <GridList
            className={styles.gridList}
            items={agents}
            aria-label="Lista de agentes"
            selectionMode="single"
            onAction={(key) => {
              const selectedAgent = agents.find((agt) => agt.uuid === key);

              if (selectedAgent) {
                navigate(`/agent/${key}`, { state: { agent: selectedAgent } });
              }
            }}
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
    </>
  );
}
