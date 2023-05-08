import { useState } from "react";
import { useParams } from "react-router-dom";
import useGame from "../Hooks/useGame";
import ExpandedText from "../Components/ExpandedText";
import GameDetail from "../Components/GameDetail";
import GameMetaCritic from "../Components/GameMetaCritic";
import GameAttributes from "../Components/GameAttributes";
import useGameTrailer from "../Hooks/useGameTrailer";
import GameTrailer from "../Components/GameTrailer";

const GameDetailPage = () => {
  const { slug, id } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <p>...Loading</p>;

  if (error || !game) throw error;

  return (
    <div className="h-screen">
      <h1>{game.name}</h1>
      <ExpandedText children={game.description_raw} />
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      {/* <p>
        {game.parent_platforms.map((e) => (
          <p>{e.platform.name}</p>
        ))}
      </p> */}
    </div>
  );
};

export default GameDetailPage;
