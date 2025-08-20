import { memo } from "react";
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
  const navigate = useNavigate();
  const { id } = useParams();
  const num = Number(id);
  const { getMOvieEndpoint } = useMovie();
  const { data, isFetching } = getMOvieEndpoint(num, "credits");
  const cast = data?.cast?.slice(0, 12);

  if (isFetching) {
    return (
      <section className="flex min-h-[400px] items-center justify-center ">
        <div className="">
          <ThreeDot color="#fff" size="medium" text="" textColor="" />;
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
          <div className="grid grid-cols-8 gap-[14px] gap-y-[26px]">
            {cast?.map((act: iProps) => (
              <div
                key={act.id}
                className="   max-w-[150px] w-[100%] "
                onClick={() => navigate(`/person/${act.id}`)}
              >
                <div className="w-[full] overflow-hidden  rounded-[12px]">
                  {act?.profile_path ? (
                    <img
                      className="w-full h-[150px] duration-200 object-cover hover:scale-[1.09]"
                      src={`https://image.tmdb.org/t/p/original${act.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-full object-cover rounded-[12px] h-[150px]"
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
        </div>
      
      </section>
    );
  }
};

export default memo(MovieCredits);
