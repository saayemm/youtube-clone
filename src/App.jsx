import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/playVideo/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
};

export default App;
