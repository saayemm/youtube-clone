import { useAuth } from "../context/AuthProvider";
import ListItems from "./ListItems";
import Sidebar from "./Sidebar";
import Video from "./Video";

const Home = () => {
  const { data } = useAuth();
  const { loading } = useAuth();
  console.log(data);

  return (
    <div className="flex gap-8 pt-24 pr-8">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6">
        <ListItems />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
          {!loading &&
            data.map((item) => {
              if (item.type !== "video") return false;
              return <Video key={item.id} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
