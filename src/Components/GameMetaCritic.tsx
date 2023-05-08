type Props = {
  score: number;
};

const GameMetaCritic = ({ score }: Props) => {
  return (
    <p
      className={`${
        score >= 90
          ? "text-green-400 border-green-400"
          : "text-yellow-400 border-yellow-400"
      }`}
    >
      {score}
    </p>
  );
};

export default GameMetaCritic;
