import api from "./api/api";
import type { Agent, ValorantApiResponse, ValorantApiSingleResponse } from "../types/types";

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

  getByUuid: async (uuid: number): Promise<Agent> => {
    try {
      const response = await api.get<ValorantApiSingleResponse>(
        `/agents/${uuid}?language=pt-BR`,
      );

      return response.data.data;
    } catch (error) {
      console.error("Algo deu errado", error);
      throw error;
    }
  },
};
