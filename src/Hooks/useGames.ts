import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface GameProps {
    id: number; // id of the game
    name: string; // name of the game
    background_image: string; // background image of the game
    platforms: { platform: { name: string } }[]; // array of platforms
    metacritic: number; // rating of the game
  }
  
export interface GamesResponseData {
    count: number; // total number of games
    results: GameProps[]; // array of games
  }

const useGames = () => {
    const [games, setGames] = useState<GameProps[]>([]); // array of games
    const [error, setError] = useState(""); // error message
    
    useEffect(() => {
        const controller = new AbortController();
      apiClient
        .get<GamesResponseData>("/games", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)});
        
        return () => controller.abort();
    }, []);
    return { games, error}
}

export default useGames;

