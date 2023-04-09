import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface GameProps {
    id: number; // id of the game
    name: string; // name of the game
    background_image: string; // background image of the game
    parent_platforms: {platform: Platform}[]; // array of platforms
    metacritic: number; // rating of the game
}
  
const useGames = (gameQuery: GameQuery) => useData<GameProps>("/games", {params: {genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id}}, [gameQuery]);

export default useGames;

