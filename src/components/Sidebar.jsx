import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="pt-4  px-6">
      <div className="mb-4 text-xm font-medium border-b pb-2">
        <div className="flex items-center gap-2">
          <GoHomeFill />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-2">
          <SiYoutubeshorts />
          <span>Shorts</span>
        </div>
        <div className="flex items-center gap-2">
          <MdSubscriptions />
          <span>Subscriptions</span>
        </div>
      </div>

      <div className="border-b pb-2 flex flex-col gap-2 font-semibold">
        <h1 className="text-2xl font-semibold">You</h1>
        <span>History</span>
        <span>PlayLists</span>
        <span>Your Videos</span>
        <span>Watched-later</span>
        <span>Liked-videos</span>
      </div>

      <div className="border-b pb-2 flex flex-col gap-2 font-semibold mt-8">
        <h1 className="text-2xl font-semibold">Subscriptions</h1>
        <span>Ts</span>
        <span>Mr.Beat</span>
        <span>SayemChess</span>
        <span>Amaz</span>
        <span>javes</span>
      </div>

      <div className="border-b pb-2 flex flex-col gap-2 font-semibold mt-8">
        <h1 className="text-2xl font-semibold">Explore</h1>
        <span>Explore</span>
        <span>Music</span>
        <span>Gaming</span>
        <span>Sports</span>
      </div>

      <div className="border-b pb-2 flex flex-col gap-2 font-semibold mt-8 text-red-900">
        <h1 className="text-2xl font-semibold text-black">More From Youtube</h1>
        <span>Explore</span>
        <span>Music</span>
        <span>Gaming</span>
        <span>Sports</span>
      </div>

      <div className="mt-6 pb-12">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
