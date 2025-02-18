import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="w-1/6 pl-6"><Sidebar/></div>
      </main>
    </div>
  );
};

export default App;
