import axios from "axios";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const fetchAgents = async () => {
      const response = await axios.get("https://valorant-api.com/v1/agents");

      console.log(response);
    };

    fetchAgents();
  }, []);

  return <></>;
}

export default App;
