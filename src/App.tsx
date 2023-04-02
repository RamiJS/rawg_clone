import Games from "./Components/Games";
import { Navbar } from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
const App = () => {
  return (
    <div className="grid grid-cols-12">
      {/* Navbar */}
      <div className="col-span-12">
        <Navbar />
      </div>

      {/* Sidebar */}
      <div className="col-span-2 py-4 px-6">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="col-span-10 py-4 px-6">
        <Games />
      </div>
    </div>
  );
};

export default App;
