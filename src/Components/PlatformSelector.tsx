import { FiChevronDown } from "react-icons/fi";
import usePlatforms from "../Hooks/usePlatforms";
import { Platform } from "../Hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <div className="w-36 my-6 dropdown dropdown-bottom">
      <label
        tabIndex={0}
        className="btn bg-selector border-none capitalize flex flex-row justify-between"
      >
        {selectedPlatform ? (
          <span>{selectedPlatform.name}</span>
        ) : (
          <span>Platforms</span>
        )}
        <FiChevronDown />
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow rounded-box w-52 bg-white text-primary capitalize"
      >
        <li className="text-gray-400 pointer-events-none">Platforms</li>
        {data.map((platform) => (
          <li
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
            className="hover:bg-gray-200 rounded-lg px-4 cursor-pointer"
          >
            {platform.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformSelector;
