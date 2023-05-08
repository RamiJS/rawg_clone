import { useRef } from "react";
import { RiSearch2Line } from "react-icons/ri";
import useGameQueryStore from "../store/GameQuery";
import { redirect, useLocation, useNavigate } from "react-router-dom";

const Searchbar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <div className="w-full flex flex-row items-center justify-center py-3 bg-[#404040] text-white hover:text-gray-800 hover:bg-white transition duration-300  rounded-full">
        <RiSearch2Line className="text-inherit mx-3 text-xl" />
        <input
          ref={ref}
          type="text"
          className="w-full px-2 rounded-lg bg-inherit focus:outline-none"
          placeholder="Search for games"
        />
      </div>
    </form>
  );
};

export default Searchbar;
