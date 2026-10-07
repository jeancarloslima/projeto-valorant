import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AgentsProvider } from "./context/agents/AgentProvider";
import App from "./app";
import "../src/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AgentsProvider>
        <App />
      </AgentsProvider>
    </BrowserRouter>
  </StrictMode>,
);
