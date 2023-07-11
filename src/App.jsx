import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <>
      <div className=" flex h-screen w-full bg-gradient-to-r from-sidebar-gradient-start/75 to-sidebar-gradient-end/75 ">
        <div className=" box-border w-8/12 h-full object-cover object-center dragon bg-cover"
>
          
        </div>
        {/* <img
          className=" box-border w-8/12 h-full object-cover object-center"
          src="../src/assets/background_dragon.png"
          alt="background_dragon.png"
        /> */}
        <Navbar />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
