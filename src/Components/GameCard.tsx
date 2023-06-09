import { Link } from "react-router-dom";
import GameProps from "../entities/GameProps";
import getCroppedImageUrl from "../services/image-url";
import GameRating from "./GameRating";
import PlatformList from "./PlatformList";
import GameMetaCritic from "./GameMetaCritic";

interface Props {
  game: GameProps;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="flex flex-col bg-secondary rounded-2xl">
      <img
        className="h-52 lg:h-36 xl:h-52 2xl:h-64 object-cover rounded-t-2xl"
        src={getCroppedImageUrl(game.background_image)}
        alt=""
      />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-row justify-between">
          <PlatformList
            platforms={
              game.parent_platforms &&
              game.parent_platforms.map((p) => p.platform)
            }
          />
          {game.metacritic && <GameMetaCritic score={game.metacritic} />}
        </div>
        <div className="flex flex-row items-center">
          <h1 className="text-white text-xl font-bold">
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
          </h1>
          <span className="inline-block">
            <GameRating rating={game.rating_top} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
