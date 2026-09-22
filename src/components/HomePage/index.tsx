import { useEffect, useState } from "react";
import { apiService } from "../../services/apiService";
import type { Agent } from "../../types/types";

export default function HomePage() {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const data = await apiService.getAll();

        setAgents(data);

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div>
      <h1>Teste</h1>
      <ul>
        {agents.map((agt) => (
          <li key={agt.uuid}>{agt.displayName}</li>
        ))}
      </ul>
    </div>
  );
}
