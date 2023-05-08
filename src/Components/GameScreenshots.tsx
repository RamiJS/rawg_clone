import React from "react";
import useGameScreenshots from "../Hooks/useGameScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameScreenshots(gameId);

  if (isLoading) return <p>loading...</p>;

  if (error) throw error;

  return data ? (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
      {data.results.map((img, index) => (
        <img
          key={index}
          src={img.image}
          alt="game images"
          className="h-64 object-cover"
        />
      ))}
    </div>
  ) : null;
};

export default GameScreenshots;
