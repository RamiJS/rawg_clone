import { GameQuery } from "../App";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardShrimming from "./GameCardShrimming";

interface Props {
  gameQuery: GameQuery;
}

const Games = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const shrimmerLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {isLoading &&
          shrimmerLoading.map((shrimmer) => (
            <GameCardShrimming key={shrimmer} />
          ))}
        {error && <p>{error}</p>}
        {data.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </div>
    </>
  );
};

export default Games;
