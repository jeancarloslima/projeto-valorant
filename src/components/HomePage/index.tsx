import { useEffect, useState } from "react";
import { apiService } from "../../services/apiService";
import type { Agent } from "../../types/types";

export default function HomePage() {
  
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
