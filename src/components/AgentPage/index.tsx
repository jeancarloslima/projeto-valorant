import { useEffect } from "react";
import { apiService } from "../../services/apiService";

export default function AgentPage() {
    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const data = await apiService.getAll();
                console.log(data);
                
            } catch (error) {
                console.error(error);
            }
        }
    }, []);
}