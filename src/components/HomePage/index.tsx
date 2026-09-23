import { useAgents } from "../../context/agents/AgentContext";

export default function HomePage() {
  const { agents, isLoading, error } = useAgents();

  console.log(agents);
  
  
  if (isLoading) return <p>Carregando agentes...</p>;
  if (error) return <p style={{ color: 'red' }}>Erro: {error}</p>;

  return (
    <div>
      <h1>Teste</h1>
      <ul>
        {agents.map((agt) => (
          <li key={agt.uuid}>{agt.displayName}</li>
        ))}
      </ul>
    </div>
  );
}
