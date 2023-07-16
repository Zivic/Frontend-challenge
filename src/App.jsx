
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <>
      <div className=" flex h-screen w-full bg-sidebar-gradient-end ">
        <div className=" box-border w-full md:w-9/12 lg:w-10/12 h-full object-cover object-center dragon custom-bg-size bg-no-repeat"
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
