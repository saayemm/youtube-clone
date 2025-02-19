import { IoIosMenu } from "react-icons/io";
import { ImYoutube2 } from "react-icons/im";
import { GoSearch } from "react-icons/go";
import { BiSolidMicrophone } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-2 fixed z-999 w-full bg-gray-100">
      {/* Left */}
      <div className="flex gap-4 text-3xl items-center">
        <span className="cursor-pointer">
          <IoIosMenu />
        </span>
        <Link to="/">
          <span className="text-7xl text-red-700 cursor-pointer">
            <ImYoutube2 />
          </span>
        </Link>
      </div>

      {/* Middle */}
      <div className="  flex items-center gap-4 w-1/2">
        <div
          className="flex justify-between border border-b-gray-500 rounded-2xl items-center 
        px-l-3 w-full"
        >
          <input
            className="outline-none px-4 rounded-2xl"
            type="text"
            placeholder="Search"
          />
          <span className="bg-gray-300 flex  py-2 px-3 rounded-r-2xl cursor-pointer">
            <GoSearch />
          </span>
        </div>
        <span className="bg-gray-300 p-2  rounded-full cursor-pointer">
          <BiSolidMicrophone />
        </span>
      </div>

      {/* right */}
      <div className="flex gap-4 items-center">
        <button
          className="bg-gray-300 flex text-xl cursor-pointer items-center rounded-4xl 
        py-1 gap-2 px-4 "
        >
          <span>
            <FaPlus />
          </span>
          Create
        </button>
        <span className="text-2xl cursor-pointer">
          <FaRegBell />
        </span>
        <span className="text-2xl cursor-pointer">
          <CgProfile />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
