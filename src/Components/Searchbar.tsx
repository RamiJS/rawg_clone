import { RiSearch2Line } from "react-icons/ri";

const Searchbar = () => {
  return (
    // create a div that will justify the items to center using tailwind classes
    // create a div that will align the items to center using tailwind classes
    <div className="w-full flex flex-row items-center justify-center py-3 bg-[#404040] text-white hover:text-gray-800 hover:bg-white transition duration-300  rounded-full">
      <RiSearch2Line className="text-inherit mx-3 text-xl" />
      <input
        type="text"
        className="w-full px-2 rounded-lg bg-inherit focus:outline-none"
        placeholder="Search for games"
      />
    </div>
  );
};

export default Searchbar;
