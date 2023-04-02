import apiClient from "../services/api-client";
import { useState, useEffect } from "react";

interface GameProps {
  id: number; // id of the game
  name: string; // name of the game
}

interface GamesResponseData {
  count: number; // total number of games
  results: GameProps[]; // array of games
}

const Games = () => {
  const [games, setGames] = useState<GameProps[]>([]); // array of games
  const [error, setError] = useState(""); // error message

  useEffect(() => {
    apiClient
      .get<GamesResponseData>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err));
  }, []);

  return (
    <div>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </div>
  );
};

export default Games;
