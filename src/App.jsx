import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import FloatMenu from "./components/layout/FloatMenu";
import useViewport from "./hooks/useViewport";

function App() {
  const { width, isSmallScreen } = useViewport();
  const [isSidebarOpen, setIsSidebarOpen] = useState(isSmallScreen ? false : true);
  return (
    <>
      <div className=" flex h-full w-full bg-sidebar-gradient-end ">
        <div className=" box-border w-full md:w-9/12 lg:w-10/12 h-full object-cover object-center dragon custom-bg-size bg-no-repeat">
          {isSmallScreen && !isSidebarOpen && (
            <button
              className="relative top-1/2 left-1/3 z-30 custom-button rounded-xl p-4 text-white font-medium"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              See updates
            </button>
          )}
          {isSmallScreen && isSidebarOpen && (
            <div
              className="fixed top-1/2 z-30 w-24 h-24 -left-12 hover:cursor-pointer close-button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
            </div>
          )}
        </div>
        <Navbar />
        {isSidebarOpen && 
        <Sidebar />}
        {/* <FloatMenu /> */}
      </div>
    </>
  );
}

export default App;
