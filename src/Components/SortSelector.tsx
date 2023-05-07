import useGameQueryStore from "../store/GameQuery";

const SortSelector = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const onSortSelect = useGameQueryStore((s) => s.setSortOrder);

  const sortItems = [
    { label: "Relavince", value: "" },
    { label: "Date Added", value: "-added" },
    { label: "Release Date", value: "-released" },
    { label: "Name", value: "name" },
    { label: "Average Rating", value: "-rating" },
    { label: "Popularity", value: "-metacritic" },
  ];

  const currentSort = sortItems.find(
    (sortItem) => sortItem.value === sortOrder
  );

  return (
    <div className="w-fit my-6 dropdown dropdown-bottom">
      <label
        tabIndex={0}
        className="btn bg-selector border-none capitalize flex flex-row justify-between"
      >
        Order by: {sortOrder ? currentSort?.label : "Relavence"}
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow rounded-box w-52 bg-white text-primary capitalize"
      >
        {sortItems.map((sortItem) => (
          <li
            key={sortItem.value}
            className="hover:bg-gray-200 rounded-lg py-2 px-4 cursor-pointer"
            onClick={() => onSortSelect(sortItem.value)}
            value={sortItem.value}
          >
            {sortItem.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortSelector;
