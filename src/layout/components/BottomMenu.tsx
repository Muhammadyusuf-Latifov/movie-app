import { Clapperboard, Search, Bookmark, House } from "lucide-react";
import { memo } from "react";
import { NavLink } from "react-router-dom";

const BottomMenu = () => {
  return (
    <div className="hidden py-[10px] fixed w-[100%] bottom-0 z-40 bg-[#252525]  max-[700px]:block ">
      <div className="container">
        <ul className=" flex  items-center justify-between gap-[20px]  ">
          <li>
            <NavLink
              className="navlink text-[#A1A1A1] duration-300 hover:text-[red] flex flex-col items-center"
              to={"/"}
            >
              <House className="text-[14px] " />
              <p className="text-center text-[12px]">Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink text-[#A1A1A1] duration-300 hover:text-[red] flex flex-col items-center"
              to={"/movies"}
            >
              <Clapperboard className="text-[14px] " />
              <p className="text-center text-[12px]">Movie</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-[#A1A1A1] navlink duration-300 hover:text-[red] flex flex-col items-center"
              to={"/bookmark"}
            >
              <Bookmark className="text-[14px] " />
              <p className="text-center text-[12px]">Bookmark</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-[#A1A1A1] navlink duration-300 hover:text-[red] flex flex-col items-center"
              to={"/search"}
            >
              <Search className="text-[14px] " />
              <p className="text-center text-[12px]">Search</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(BottomMenu);
