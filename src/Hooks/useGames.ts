import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

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
  queryFn: () => apiClient.get<FetchResponse<GameProps>>("/games", {
    params: {
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id, 
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  })
  .then((res) => res.data)
})

export default useGames;

