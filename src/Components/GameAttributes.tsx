import GameDetail from "./GameDetail";
import GameProps from "../entities/GameProps";
import GameMetaCritic from "./GameMetaCritic";

interface Props {
  game: GameProps;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4 py-8">
      <GameDetail title="platforms">
        {game.parent_platforms.map(({ platform }, index) => (
          <p key={index}>{platform.name}</p>
        ))}
      </GameDetail>
      {game.publishers && (
        <GameDetail title="Publishers">
          {game.publishers.map((publisher) => (
            <p key={publisher.id}>{publisher.name}</p>
          ))}
        </GameDetail>
      )}
      <GameDetail title="Genres">
        {game.genres.map((genre) => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </GameDetail>
      {game.metacritic && (
        <GameDetail title="Score">
          <GameMetaCritic score={game.metacritic} />
        </GameDetail>
      )}
    </div>
  );
};

export default GameAttributes;
