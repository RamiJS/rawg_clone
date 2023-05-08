import { useState } from "react";
import { useParams } from "react-router-dom";
import useGame from "../Hooks/useGame";
import ExpandedText from "../Components/ExpandedText";
import GameDetail from "../Components/GameDetail";
import GameMetaCritic from "../Components/GameMetaCritic";
import GameAttributes from "../Components/GameAttributes";
import useGameTrailer from "../Hooks/useGameTrailer";
import GameTrailer from "../Components/GameTrailer";
import GameScreenshots from "../Components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <p>...Loading</p>;

  if (error || !game) throw error;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="py-8 grid grid-cols-1 2xl:grid-cols-2 gap-6 items-center">
        <div className="flex flex-col gap-5 order-2 2xl:order-1">
          <h1 className="text-2xl lg:text-4xl font-bold ">{game.name}</h1>
          <ExpandedText children={game.description_raw} />
          <GameAttributes game={game} />
        </div>
        <div className="flex justify-center order-1 2xl:order-2">
          <GameTrailer gameId={game.id} />
        </div>
      </div>
      <GameScreenshots gameId={game.id} />

      {/* <p>
        {game.parent_platforms.map((e) => (
          <p>{e.platform.name}</p>
        ))}
      </p> */}
    </div>
  );
};

export default GameDetailPage;
