const SortSelector = () => {
  return (
    <div className="w-fit my-6 dropdown dropdown-bottom">
      <label
        tabIndex={0}
        className="btn bg-selector border-none capitalize flex flex-row justify-between"
      >
        Order by: Relavince
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow rounded-box w-52 bg-white text-primary capitalize"
      >
        <li className="text-gray-400 pointer-events-none py-2 px-4">
          Relavince
        </li>
        <li className="hover:bg-gray-200 rounded-lg py-2 px-4 cursor-pointer">
          Date Added
        </li>
        <li className="hover:bg-gray-200 rounded-lg py-2 px-4 cursor-pointer">
          Release Date
        </li>
        <li className="hover:bg-gray-200 rounded-lg py-2 px-4 cursor-pointer">
          Name
        </li>
        <li className="hover:bg-gray-200 rounded-lg py-2 px-4 cursor-pointer">
          Average Rating
        </li>
        <li className="hover:bg-gray-200 rounded-lg py-2 px-4 cursor-pointer">
          Popularity
        </li>
      </ul>
    </div>
  );
};

export default SortSelector;
