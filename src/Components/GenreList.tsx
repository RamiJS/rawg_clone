import React from "react";
import useGenre from "../Hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenre();
  return (
    <div>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </div>
  );
};

export default GenreList;
