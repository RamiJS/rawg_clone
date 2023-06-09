import Genre from "../entities/Genre";
import GenreList from "./GenreList";

const Sidebar = () => {
  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold">Genres</h1>
      <GenreList />
    </div>
  );
};

export default Sidebar;
