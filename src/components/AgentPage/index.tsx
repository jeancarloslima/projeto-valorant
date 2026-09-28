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
    <div>
      <h1>{agent.displayName}</h1>
      <img src={agent.fullPortrait} alt={agent.displayName} />

      <p>{agent.description}</p>

      <h2>Habilidades</h2>
      <ul>
        {agent.abilities.map((ability, index) => (
          <li key={index}>
            <img
              src={ability.displayIcon}
              width={30}
              alt={ability.displayName}
            />
            <strong>{ability.displayName}:</strong> {ability.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
