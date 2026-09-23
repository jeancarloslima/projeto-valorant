import { useEffect, useState, type ReactNode } from "react";
import { apiService } from "../../services/apiService";
import axios from "axios";
import type { Agent } from "../../types/types";

interface AgentsProviderProps {
  children: ReactNode;
}

export const AgentProvider: React.FC<AgentsProviderProps> = ({ children }) => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgents = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await apiService.getAll();

        setAgents(data);

        console.log(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message || 'Erro ao buscar agentes da API');
        } else {
          setError('Ocorre um erro inesperado:');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchAgents();
  }, []);

  
};
