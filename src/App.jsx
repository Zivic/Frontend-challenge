import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import FloatMenu from "./components/layout/FloatMenu";
import useViewport from "./hooks/useViewport";

function App() {
  const { isSmallScreen } = useViewport();
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    isSmallScreen ? false : true
  );
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <div className=" flex h-full w-full bg-sidebar-gradient-end ">
        <div className=" box-border w-full md:w-9/12 lg:w-10/12 h-full object-cover object-center dragon custom-bg-size bg-no-repeat">
          {isSmallScreen && (!isSidebarOpen && !isNavbarOpen) && (
            <button
              className="relative top-3/4 left-1/3 z-30 custom-button rounded-xl p-4 text-white font-medium"
              onClick={() => setIsSidebarOpen(true)}
            >
              See updates!
            </button>
          )}
          {isSmallScreen && isSidebarOpen && (
            <div
              className="fixed top-1/2 z-30 w-24 h-24 -left-12 hover:cursor-pointer close-button"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}
        </div>
        <Navbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
        {(!isSmallScreen || (isSmallScreen && isSidebarOpen)) && <Sidebar />}
        {!isSmallScreen && <FloatMenu />}
      </div>
    </>
  );
}

export default App;
