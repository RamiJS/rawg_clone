import { useState } from "react";
import Games from "./Components/Games";
import { Navbar } from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./Hooks/useGames";
const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <div className="grid grid-cols-12 p-8">
      {/* Navbar */}
      <div className="col-span-12">
        <Navbar />
      </div>

      {/* Sidebar */}
      <div className="col-span-2 py-4 lg:block hidden">
        <Sidebar
          selectedGenre={selectedGenre}
          onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}
        />
      </div>

      {/* Main content */}
      <div className="col-span-12 lg:col-span-10 py-4 px-6">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <Games
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </div>
    </div>
  );
};

export default App;
