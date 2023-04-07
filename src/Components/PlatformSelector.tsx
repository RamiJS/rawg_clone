import { FiChevronDown } from "react-icons/fi";

const PlatformSelector = () => {
  return (
    <div className="w-36 my-6 dropdown dropdown-bottom">
      <label
        tabIndex={0}
        className="btn bg-selector border-none capitalize flex flex-row justify-between"
      >
        <span>Platforms</span>
        <FiChevronDown />
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow rounded-box w-52 bg-white text-primary capitalize"
      >
        <li className="text-gray-400 pointer-events-none">
          <a>Platforms</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default PlatformSelector;
