import { useCallback, useState, type ReactNode } from "react";
import { apiService } from "../../services/apiService";
import type { Agent } from "../../types/types";
import { AgentsContext } from "./AgentContext";

export const AgentsProvider = ({ children }: { children: ReactNode }) => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadAgents = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await apiService.getAll();
      setAgents(data);
      console.log(data);
    } catch (err) {
      setError('Erro ao carregar a lista de agentes do Valorant.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getAgent = (uuid: string) => {
    const agent = agents.find((agt) => agt.uuid == uuid);

    setSelectedAgent(agent || null);
  }

  return (
    <AgentsContext.Provider 
      value={{ agents, selectedAgent, isLoading, error, loadAgents, getAgent }}
    >
      {children}
    </AgentsContext.Provider>
  )
}