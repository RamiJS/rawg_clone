import useGenres from "../Hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <ul className="">
      {data.map((genre) => (
        <li
          key={genre.id}
          className="flex flex-row gap-2 py-2 items-center cursor-pointer"
        >
          <img
            className="w-8 h-8 object-cover rounded-md"
            src={genre.image_background}
            alt={genre.name}
          />
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
