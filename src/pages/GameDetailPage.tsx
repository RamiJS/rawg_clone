import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../Hooks/useGame";
import ErrorPage from "./ErrorPage";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <p>...Loading</p>;

  if (error || !game) throw error;

  return (
    <div>
      <h1>{game.name}</h1>
      <p>{game.description_raw}</p>
    </div>
  );
};

export default GameDetailPage;
