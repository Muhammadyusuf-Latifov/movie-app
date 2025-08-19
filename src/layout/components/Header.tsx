import { memo } from "react";
import { NavLink } from "react-router-dom";
import rasm from "../../shared/assets/logo.svg";
import movie from "../../shared/assets/movie.svg";

import { Clapperboard, Search,  Bookmark, House } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#000] sticky top-0 z-50 shadow-lg  ">
      <nav className="container flex items-center justify-between py-[16px]">
        <div>
          <NavLink to={"/"}>
            <div className="flex items-center gap-[7px]">
              <img src={rasm} alt="img" />
              <img src={movie} alt="img" />
            </div>
          </NavLink>
        </div>
        <ul className="flex items-center gap-[20px] max-[700px]:hidden">
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
              <p className="text-center text-[12px]">Movies</p>
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
        <div>
          <button className="text-white bg-[red] px-[60px] duration-300 py-[16px] rounded-[12px] hover:bg-[#ca0505] max-[560px]:py-[10px] max-[560px]:px-[40px]">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
