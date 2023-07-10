import Sidebar from "./components/layout/Sidebar"

function App() {

  return (
    <>
    <div className=" flex h-screen w-full">
    <img className=' box-border w-7/12 h-full object-fit'
    src="../src/assets/background_dragon.png" 
    alt="background_dragon.png"
    />
    <Sidebar/>
    </div>
    </>
  )
}

export default App
