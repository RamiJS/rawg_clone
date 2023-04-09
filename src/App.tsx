import { useState } from "react";
import Games from "./Components/Games";
import { Navbar } from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./Hooks/useGames";
import SortSelector from "./Components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="grid grid-cols-12 p-8">
      {/* Navbar */}
      <div className="col-span-12">
        <Navbar />
      </div>

      {/* Sidebar */}
      <div className="col-span-2 py-4 lg:block hidden">
        <Sidebar
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre: Genre) =>
            setGameQuery({ ...gameQuery, genre })
          }
        />
      </div>

      {/* Main content */}
      <div className="col-span-12 lg:col-span-10 py-4 px-6">
        <div className="flex flex-row gap-3">
          <SortSelector />
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
        </div>
        <Games gameQuery={gameQuery} />
      </div>
    </div>
  );
};

export default App;
