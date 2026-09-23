import { createContext, useContext } from "react";
import { type AgentsContextType } from "../../types/types";

export const AgentContext = createContext<AgentsContextType | undefined>(undefined);

export const useAgents = (): AgentsContextType => {
    const context = useContext(AgentContext);

    if (context === undefined) {
        throw new Error('useAgents deve ser utilizado dentro de um AgentsProvider');
    }

    return context;
}