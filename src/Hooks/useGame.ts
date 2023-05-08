import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { GameProps } from "../entities/GameProps";

const apiClient = new APIClient<GameProps>('/games')

const useGame = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug)
})

export default useGame;