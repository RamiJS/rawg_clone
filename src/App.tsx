import Games from "./Components/Games";
import { Navbar } from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import PlatformSelector from "./Components/PlatformSelector";
import SortSelector from "./Components/SortSelector";

const App = () => {
  return (
    <div className="grid grid-cols-12 p-8">
      {/* Navbar */}
      <div className="col-span-12">
        <Navbar />
      </div>

      {/* Sidebar */}
      <div className="col-span-2 py-4 lg:block hidden">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="col-span-12 lg:col-span-10 py-4 px-6">
        <div className="flex flex-row gap-3">
          <SortSelector />
          <PlatformSelector />
        </div>
        <Games />
      </div>
    </div>
  );
};

export default App;
