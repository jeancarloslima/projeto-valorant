import axios from "axios";

const api = axios.create({
  baseURL: "https://dash.valorant-api.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;