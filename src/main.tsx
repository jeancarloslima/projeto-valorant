import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import { AgentsProvider } from "./context/agents/AgentProvider";
import AgentPage from "./components/AgentPage";
import "../src/index.css";
import { AnimatePresence } from "motion/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AgentsProvider>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/agent/:uuid" element={<AgentPage />} />
          </Routes>
        </AnimatePresence>
      </AgentsProvider>
    </BrowserRouter>
  </StrictMode>,
);
