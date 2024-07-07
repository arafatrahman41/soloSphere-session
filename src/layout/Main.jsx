import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* outlet */}
        <div className="container mx-auto px-4 min-h-[calc(100vh-306px)]">
        <Outlet />
        </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Main;
