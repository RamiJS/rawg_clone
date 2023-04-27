import { Genre } from "../Hooks/useGenres";
import GenreList from "./GenreList";

interface Props {
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}

const Sidebar = ({ selectedGenreId, onSelectGenre }: Props) => {
  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold">Genres</h1>
      <GenreList
        selectedGenreId={selectedGenreId}
        onSelectGenre={onSelectGenre}
      />
    </div>
  );
};

export default Sidebar;
