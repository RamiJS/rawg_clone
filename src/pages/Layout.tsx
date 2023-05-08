import { Navbar } from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-8">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
