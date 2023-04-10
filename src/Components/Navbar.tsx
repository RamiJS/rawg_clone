import Searchbar from "./Searchbar";

interface Props {
  onSearch: (search: string) => void;
}

export const Navbar = ({ onSearch }: Props) => {
  return (
    <nav className="w-full flex flex-row justify-between gap-8">
      <div className="flex flex-row items-center gap-8">
        <a className="text-lg text-white font-extrabold tracking-[0.3em] cursor-pointer">
          RAWG
        </a>
      </div>
      <Searchbar onSearch={onSearch} />
      <div></div>
    </nav>
  );
};
