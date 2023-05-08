import useGameTrailer from "../Hooks/useGameTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameTrailer(gameId);

  if (isLoading) return <p>isLoading ...</p>;

  if (error) throw error;

  const firstItem = data?.results[0];
  return firstItem ? (
    <video
      src={firstItem.data[480]}
      poster={firstItem.preview}
      controls
    ></video>
  ) : (
    <h1>trailer not available</h1>
  );
};

export default GameTrailer;
