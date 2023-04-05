import { Genre } from "../Hooks/useGenres";
import GenreList from "./GenreList";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const Sidebar = ({ selectedGenre, onSelectGenre }: Props) => {
  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold">Genres</h1>
      <GenreList selectedGenre={selectedGenre} onSelectGenre={onSelectGenre} />
    </div>
  );
};

export default Sidebar;
