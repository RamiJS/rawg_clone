import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store/GameQuery";
import { GameProps } from "../entities/GameProps";
const apiClient = new APIClient<GameProps>('/games')

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


