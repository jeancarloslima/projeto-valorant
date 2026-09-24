import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import { AgentsProvider } from "./context/agents/AgentProvider";
import AgentPage from "./components/AgentPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AgentsProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/agent/:uuid' element={<AgentPage />} />
        </Routes>
      </AgentsProvider>
    </BrowserRouter>
  </StrictMode>,
);
