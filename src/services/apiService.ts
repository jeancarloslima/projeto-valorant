import api from "./api/api";
import type { Agent } from "../types/types";

export const apiService = {
    getAll: async (): Promise<Agent[]> => {
        const response = await api.get<Agent[]>('agents');
        return response.data
    },

    getByUuid: async (id: number): Promise<Agent> => {
        const response = await api.get<Agent>(`/agents/${id}`);
        return response.data;
    }
}