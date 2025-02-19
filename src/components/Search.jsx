import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../context/AuthProvider";
import { fetchData } from "../utils/rapidApi";
import Sidebar from "./Sidebar";
import SearchCard from "./SearchCard";

const Search = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { loading } = useAuth();

  useEffect(() => {
    fetchSearchResult();
  }, [searchQuery]);

  const fetchSearchResult = () => {
    fetchData(`search/?q=${searchQuery}`).then(({ contents }) => {
      console.log(contents);
      setResult(contents);
    });
  };
  return (
    <div>
      <div className="pt-24 flex flex-row h-[calc(100%-56px]">
        <Sidebar />
        <div>
          {result?.map((item, idx) => {
            if (item?.type !== "video") return false;
            return <SearchCard key={idx} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
