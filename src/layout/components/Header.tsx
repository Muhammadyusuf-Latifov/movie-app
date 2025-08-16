import { memo } from "react";
import { NavLink } from "react-router-dom";
import rasm from "../../shared/assets/logo.svg";
import movie from "../../shared/assets/movie.svg";

import { Clapperboard, Search, Tickets, NotebookTabs } from "lucide-react";

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
        <ul className="flex items-center gap-[20px]">
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
              className="navlink text-[#A1A1A1] duration-300 hover:text-[red] flex flex-col items-center"
              to={"/sessions"}
            >
              <NotebookTabs className="text-[14px] " />
              <p className="text-center text-[12px]">Sessions</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-[#A1A1A1] navlink duration-300 hover:text-[red] flex flex-col items-center"
              to={"/tickets"}
            >
              <Tickets className="text-[14px] " />
              <p className="text-center text-[12px]">Tickets</p>
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
          <button className="text-white bg-[red] px-[60px] duration-300 py-[16px] rounded-[12px] hover:bg-[#ca0505]">
            Login
          </button>
        </div>
      </nav>
    </header>
    
  );
};

export default memo(Header);
