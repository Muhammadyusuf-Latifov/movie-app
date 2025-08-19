import { memo } from 'react';
import logo from "../../../assets/logo.svg" 
const Logo = () => {
  return (
    <div className="w-[full] h-screen bg-[#000] flex items-center justify-center">
          <div>
              <img className='block mx-auto' src={logo} alt="" />
              <h2 className='text-center text-[#d00000] text-[30px]'>Movie</h2>
     </div>
    </div>
  );
};

export default memo(Logo);