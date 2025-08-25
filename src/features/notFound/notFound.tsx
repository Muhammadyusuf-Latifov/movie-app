import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <section>
      <div className="w-full h-screen bg-[#000] flex items-center justify-center">
        <div>
          <h2 className="text-[#d00000] text-[7rem] text-center font-bold max-[600px]:text-[6rem]">
            404
          </h2>
          <p className="text-[#d00000] text-[20px] text-center">
            Ohh... This page is not available!
          </p>
          <div className="flex items-center justify-center gap-[10px] mt-[20px]">
            <button
              onClick={() => navigate("/")}
              className="px-[30px] py-[12px]  bg-[#fff] rounded-[12px] hover:bg-[#ddd] duration-200"
            >
              Go Home
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-[30px] py-[12px]  bg-[#fff] rounded-[12px] hover:bg-[#ddd] duration-200"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(NotFound);