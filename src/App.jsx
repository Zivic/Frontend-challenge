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
              className="relative top-1/2 left-1/3 z-30 custom-button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              OPEN SIDEBAR
            </button>
          )}
          {isSmallScreen && isSidebarOpen && (
            <button
              className="fixed top-1/2 left-0 z-30 custom-button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              Close SIDEBAR
            </button>
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
