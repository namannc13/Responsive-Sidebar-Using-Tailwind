import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <main className="bg-gray-200 flex flex-row h-screen">
        <Sidebar />
        <div className="bg-black"></div>
      </main>
    </>
  );
}

export default App;
