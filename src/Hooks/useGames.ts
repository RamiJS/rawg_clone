import useData from "./useData";
import { Genre } from "./useGenres";

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
  
const useGames = (selectedGenre: Genre | null) => useData<GameProps>("/games", {params: {genres: selectedGenre?.id} }, [selectedGenre?.id]);

export default useGames;

