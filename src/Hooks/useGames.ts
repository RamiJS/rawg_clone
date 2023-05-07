import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "../store/GameQuery";
const apiClient = new APIClient<GameProps>('/games')

export interface GameProps {
    id: number; // id of the game
    name: string; // name of the game
    background_image: string; // background image of the game
    parent_platforms: {platform: Platform}[]; // array of platforms
    metacritic: number; // rating of the game
    rating_top: number; // rating of the game
}

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)
  return useInfiniteQuery<FetchResponse<GameProps>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({pageParam = 1}) => 
  apiClient.getAll({
    params: {
    genres: gameQuery.genreId, 
    parent_platforms: gameQuery.platformId, 
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText,
    page: pageParam,
    }
  }),
  staleTime: ms('1d'),
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined
  }
})
}

export default useGames;


