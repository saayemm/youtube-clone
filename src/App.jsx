import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import Loading from "./loader/Loading";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const { loading } = useAuth();
  return (
    <div>
      <Navbar />
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/playVideo/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
};

export default App;
