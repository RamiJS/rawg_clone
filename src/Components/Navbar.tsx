import Searchbar from "./Searchbar";

export const Navbar = () => {
  return (
    <nav className="w-full flex flex-row justify-between gap-8">
      <div className="flex flex-row items-center gap-8">
        <a className="text-lg text-white font-extrabold tracking-[0.3em] cursor-pointer">
          RAWG
        </a>
      </div>
      <Searchbar />
      <div></div>
    </nav>
  );
};
