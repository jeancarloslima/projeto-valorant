import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import HomePage from "./components/HomePage";
import AgentPage from "./components/AgentPage";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/agent/:uuid" element={<AgentPage />} />
      </Routes>
    </AnimatePresence>
  );
}