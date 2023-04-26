import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<GameProps>('/games')

export interface GameProps {
    id: number; // id of the game
    name: string; // name of the game
    background_image: string; // background image of the game
    parent_platforms: {platform: Platform}[]; // array of platforms
    metacritic: number; // rating of the game
    rating_top: number; // rating of the game
}

const useGames = (gameQuery: GameQuery) => 
useQuery<FetchResponse<GameProps>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => apiClient.getAll({
    params: {
    genres: gameQuery.genre?.id, 
    parent_platforms: gameQuery.platform?.id, 
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText
    }
  })
})

export default useGames;

