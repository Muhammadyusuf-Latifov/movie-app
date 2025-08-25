import { memo, useState } from "react";
import { useMovie } from "../../../service/useMovie";
import { useNavigate, useParams } from "react-router-dom";
import user from "../../../../../shared/assets/user.jpg";
import { ThreeDot } from "react-loading-indicators";

interface iProps {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}
const MovieCredits = () => {
  const [allCredit, setAllCredit] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const num = Number(id);
  const { getMOvieEndpoint } = useMovie();
  const { data, isFetching } = getMOvieEndpoint(num, "credits");

  const cast = data?.cast.slice(0, 16);
  console.log(data);

  if (isFetching) {
    return (
      <section className="flex min-h-[400px] items-center justify-center ">
        <div className="">
          <ThreeDot color="#fff" size="medium" text="" textColor="" />;
        </div>
      </section>
    );
  } else if (allCredit) {
    return (
      <section className="mt-[70px]">
        <div className="container ">
          <h2 className="text-center text-[#fff] text-[30px] mb-[30px]">
            Actors
          </h2>
          <div className="grid grid-cols-8 gap-[14px] gap-y-[26px] max-[940px]:grid-cols-6 max-[740px]:grid-cols-4 max-[550px]:grid-cols-3">
            {isFetching && (
              <div className=" pt-[40px] flex items-center justify-center">
                <ThreeDot color="#fff" size="medium" text="" textColor="" />
              </div>
            )}
            {data?.cast?.map((act: iProps) => (
              <div
                key={act.id}
                className="   max-w-[150px] w-[100%] "
                onClick={() => navigate(`/person/${act.id}`)}
              >
                <div className="w-[full] overflow-hidden  rounded-[12px]">
                  {act?.profile_path ? (
                    <img
                      className="w-full bg-[#444] h-[150px] duration-200 object-cover hover:scale-[1.09]"
                      src={`https://image.tmdb.org/t/p/original${act.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <img 
                      className="w-full object-cover bg-[#444] rounded-[12px] h-[150px]"
                      src={user}
                      alt=""
                    />
                  )}
                </div>
                <div className="px-[6px] mt-[8px]">
                  <h3
                    title={act.name}
                    className="text-white cursor-pointer hover:underline line-clamp-1"
                  >
                    {act?.name}
                  </h3>
                  <p
                    title={act.character}
                    className="text-[#939393] hover:underline cursor-pointer line-clamp-1 text-[12px]"
                  >
                    {act?.character}
                  </p>
                </div>
              </div>
            ))}
            {data?.crew?.map((act: any, son: number) => (
              <div
                key={son}
                className="   max-w-[150px] w-[100%] "
                onClick={() => navigate(`/person/${act.id}`)}
              >
                <div className="w-[full] overflow-hidden  rounded-[12px]">
                  {act?.profile_path ? (
                    <img
                      className="w-full bg-[#444] h-[150px] duration-200 object-cover hover:scale-[1.09]"
                      src={`https://image.tmdb.org/t/p/original${act.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-full bg-[#444] object-cover rounded-[12px] h-[150px]"
                      src={user}
                      alt=""
                    />
                  )}
                </div>
                <div className="px-[6px] mt-[8px]">
                  <h3
                    title={act.name}
                    className="text-white cursor-pointer hover:underline line-clamp-1"
                  >
                    {act?.name}
                  </h3>
                  <p
                    title={act.job}
                    className="text-[#939393] hover:underline cursor-pointer line-clamp-1 text-[12px]"
                  >
                    {act?.job}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setAllCredit((p) => !p)}
            className="block mt-[40px] px-[30px] py-[10px] bg-[#fff] rounded-[12px] mx-auto duration-200 hover:bg-[#ddd]"
          >
            {allCredit ? "Show less" : "Show More"}
          </button>
        </div>
      </section>
    );
  } else {
    return (
      <section className="mt-[70px]">
        <div className="container ">
          <h2 className="text-center text-[#fff] text-[30px] mb-[30px]">
            Actors
          </h2>
          <div className="grid grid-cols-8 gap-[14px] gap-y-[26px] max-[940px]:grid-cols-6 max-[740px]:grid-cols-4 max-[550px]:grid-cols-3">
            {cast?.map((act: iProps) => (
              <div
                key={act.id}
                className="   max-w-[150px] w-[100%] "
                onClick={() => navigate(`/person/${act.id}`)}
              >
                <div className="w-[full] overflow-hidden  rounded-[12px]">
                  {act?.profile_path ? (
                    <img
                      className="w-full h-[150px] bg-[#444] duration-200 object-cover hover:scale-[1.09]"
                      src={`https://image.tmdb.org/t/p/original${act.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-full bg-[#444] object-cover rounded-[12px] h-[150px]"
                      src={user}
                      alt=""
                    />
                  )}
                </div>
                <div className="px-[6px] mt-[8px]">
                  <h3
                    title={act.name}
                    className="text-white cursor-pointer hover:underline line-clamp-1"
                  >
                    {act?.name}
                  </h3>
                  <p
                    title={act.character}
                    className="text-[#939393] hover:underline cursor-pointer line-clamp-1 text-[12px]"
                  >
                    {act?.character}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setAllCredit((p) => !p)}
            className="block mt-[40px] px-[30px] py-[10px] bg-[#fff] rounded-[12px] mx-auto duration-200 hover:bg-[#ddd]"
          >
            {allCredit ? "Show less" : "Show More"}
          </button>
        </div>
      </section>
    );
  }
};

export default memo(MovieCredits);
