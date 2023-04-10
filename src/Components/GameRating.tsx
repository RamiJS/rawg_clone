import exceptional from "../assets/rating_icons/exceptional.webp";
import recommended from "../assets/rating_icons/recommended.webp";
import skip from "../assets/rating_icons/skip.webp";

interface Props {
  rating: number;
}

interface RateMap {
  [key: number]: { src: string; alt: string };
}

const GameRating = ({ rating }: Props) => {
  const rateMap: RateMap = {
    3: { src: skip, alt: "Skip" },
    4: { src: recommended, alt: "Recommended" },
    5: { src: exceptional, alt: "Exceptional" },
  };

  return (
    <img
      className="w-4 object-contain ml-2"
      src={rateMap[rating].src}
      alt={rateMap[rating].alt}
    />
  );
};

export default GameRating;
