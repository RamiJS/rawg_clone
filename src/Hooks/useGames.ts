import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
  
export interface GamesResponseData {
    count: number; // total number of games
    results: GameProps[]; // array of games
  }

const useGames = () => {
    const [games, setGames] = useState<GameProps[]>([]); // array of games
    const [error, setError] = useState(""); // error message
    const [isLoading, setLoading] = useState(false); // loading state (true or false
    
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<GamesResponseData>("/games", {signal: controller.signal})
        .then((res) => {
          setGames(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)});
        
        return () => controller.abort();
    }, []);
    return { games, error, isLoading}
}

export default useGames;
