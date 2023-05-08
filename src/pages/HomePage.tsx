import React from "react";
import Games from "../Components/Games";
import PlatformSelector from "../Components/PlatformSelector";
import Sidebar from "../Components/Sidebar";
import SortSelector from "../Components/SortSelector";

const HomePage = () => {
  return (
    <div className="grid grid-cols-12">
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

export default HomePage;
