import { memo } from "react";
import { NavLink } from "react-router-dom";

const MovieHeader = () => {
  return (
    <div className="MovieHeader container">
      <ul className="flex items-center justify-around gap-[10px]">
        <li>
          <NavLink
            end={true}
            to={""}
            className={
              "outlet block w-[120px] text-center bg-[#c4c4c4] font-medium text-[18px] text-[#d00000] rounded-[12px] py-[14px] "
            }
          >
            <span className="">Comments</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"credits"}
            className={
              "outlet block w-[120px] text-center  font-medium bg-[#c4c4c4] text-[18px] text-[#d00000] rounded-[12px] py-[14px]"
            }
          >
            <span className=" ">Actors</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"images"}
            className={
              "outlet block w-[120px] text-center font-medium bg-[#c4c4c4] text-[18px] text-[#d00000] rounded-[12px] py-[14px] "
            }
          >
            <span className=" ">Images</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default memo(MovieHeader);
