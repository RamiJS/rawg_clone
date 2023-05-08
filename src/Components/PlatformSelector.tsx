import { FiChevronDown } from "react-icons/fi";
import usePlatforms from "../Hooks/usePlatforms";
import Platform from "../entities/Platform";
import useGameQueryStore from "../store/GameQuery";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const onSelectPlatform = useGameQueryStore((s) => s.setPlatformId);

  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );
  if (error) return null;
  return (
    <div className="w-36 my-6 dropdown dropdown-bottom">
      <label
        tabIndex={0}
        className="btn bg-selector border-none capitalize flex flex-row justify-between"
      >
        {selectedPlatformId ? (
          <span>{selectedPlatform?.name}</span>
        ) : (
          <span>Platforms</span>
        )}
        <FiChevronDown />
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow rounded-box w-52 bg-white text-primary capitalize"
      >
        <li className="text-gray-400 pointer-events-none py-2 px-4">
          Platforms
        </li>
        {data?.results.map((platform) => (
          <li
            key={platform.id}
            onClick={() => onSelectPlatform(platform.id)}
            className="hover:bg-gray-200 rounded-lg py-2 px-4 cursor-pointer"
          >
            {platform.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformSelector;
