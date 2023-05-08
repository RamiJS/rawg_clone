import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Screenshots from "../entities/Screenshots";

const useGameScreenshots = (id: number) => {
    const apiClient = new APIClient<Screenshots>(`/games/${id}/screenshots`)
    
    return useQuery({
    queryKey: ['screenshots', id],
    queryFn: apiClient.getAll
})
}

export default useGameScreenshots;