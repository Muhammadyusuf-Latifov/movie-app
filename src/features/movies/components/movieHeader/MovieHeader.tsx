import { memo } from 'react';
import { NavLink } from 'react-router-dom';

const MovieHeader = () => {
  return (
    <div className="container">
      <ul className="text-[#fff] flex items-center">
        <li>
          <NavLink className={"outlet"} end={true} to={""}>
            <span>Comments</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={"outlet"} to={"credits"}>
            <span>Actors</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={"outlet"} to={"images"}>
            <span>Images</span>
          </NavLink>
        </li>
      </ul>
      <hr className='bg-[#8b8b8b] h-[2px]'/>
    </div>
  );
};

export default memo(MovieHeader);