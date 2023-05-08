import { useState } from "react";
import { useParams } from "react-router-dom";
import useGame from "../Hooks/useGame";
import ExpandedText from "../Components/ExpandedText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const Maximum = 20;
  const [maxLetters, setMaxletters] = useState(Maximum);

  if (isLoading) return <p>...Loading</p>;

  if (error || !game) throw error;

  return (
    <div className="h-screen">
      <h1>{game.name}</h1>
      <ExpandedText children={game.description_raw} />
    </div>
  );
};

export default GameDetailPage;
