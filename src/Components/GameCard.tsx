import { GameProps } from "../Hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import PlatformList from "./PlatformList";
interface Props {
  game: GameProps;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="flex flex-col bg-secondary rounded-2xl">
      <img
        className="h-52 lg:h-36 xl:h-52 2xl:h-64 object-cover"
        src={getCroppedImageUrl(game.background_image)}
        alt=""
      />
      <div className="p-4">
        <div className="flex flex-row justify-between">
          <PlatformList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <p
            className={`px-[6px] py-[3px] font-bold rounded-md text-[12px] border ${
              game.metacritic >= 90
                ? "text-green-400 border-green-400"
                : "text-yellow-400 border-yellow-400"
            }`}
          >
            {game.metacritic}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="text-white text-xl font-bold">{game.name}</h1>
        </div>
        <p>{game.id}</p>
      </div>
    </div>
  );
};

export default GameCard;
