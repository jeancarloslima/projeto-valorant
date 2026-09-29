import api from "./api/api";
import type { Agent, ValorantApiResponse } from "../types/types";

export const apiService = {
  getAll: async (): Promise<Agent[]> => {
    try {
      const response = await api.get<ValorantApiResponse>(
        "/agents?isPlayableCharacter=true&language=pt-BR",
      );

      return response.data.data;
    } catch (error) {
      console.error("Algo deu errado", error);
      throw error;
    }
  },
};
