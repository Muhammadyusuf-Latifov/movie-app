import { memo, useLayoutEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../../service/useMovie";
import { Tickets, ChevronLeft, Frown } from "lucide-react";
import img from "../../../../shared/assets/Image_not_available.png";
import HeadSkaleton from "../../components/headSkaleton/HeadSkaleton";

import MovieView from "../../components/movie-view/MovieView";
import MovieSkaleton from "../../components/movie-view/MovieSkaleton";
import MovieHeader from "../../components/movieHeader/MovieHeader";


interface Rasm {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}
const MovieDetail = () => {
  const { id } = useParams();
  const toNumber = Number(id);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [toNumber]);

  const { getMovieById, getMOvieEndpoint } = useMovie();
  const { data, isFetching } = getMovieById(toNumber);
  const { data: similarMovie, isFetching: fetching } = getMOvieEndpoint(
    toNumber,
    "similar"
  );

  if (isFetching) {
    return <HeadSkaleton />;
  } else {
    return (
      <>
        <section className="bg-[#000] pb-[100px]">
          <div className="container ">
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
              }}
              className="bg-center bg-[#222] overflow-hidden relative bg-cover h-[640px] border-[1.5px] rounded-[12px]  "
            >
              <button
                onClick={() => navigate(-1)}
                className="absolute z-20 top-[15px] px-[20px] py-[10px]  rounded-[12px]  left-[20px] flex items-center justify-center duration-200 bg-[#eaeaea] text-[red] font-medium hover:bg-[#ddd]"
              >
                <ChevronLeft className="text-[red]" />
                Back
              </button>
              <div className="absolute w-full h-[100%] z-2 bg-[#0000007c]"></div>
              <div className="relative z-10 w-full h-[100%] mt-[170px] flex items-center justify-center">
                <div className=" ">
                  <h3 className="text-[#fff] text-[44px] text-center ">
                    {data?.original_title}
                  </h3>
                  <div className="flex items-center gap-[14px] justify-center">
                    <p className="text-[#fff]">
                      {data?.release_date.split("").slice(0, 4).join("")}
                    </p>
                    <p className="text-[white]">|</p>
                    {data?.genres?.length === 0 ? (
                      <></>
                    ) : (
                      <p className="text-[#fff]">{data?.genres[0].name}</p>
                    )}

                    <p className="text-[white]">|</p>
                    <p className="text-[white]">{data?.vote_average} </p>
                    <p className="text-[white]">|</p>
                    <p className="text-[#fff]">
                      {data?.original_language.toUpperCase()}
                    </p>
                  </div>
                  <div className="flex items-center justify-center mt-[20px]">
                    <button
                      onClick={() => navigate("/tickets")}
                      className="max-w-[300px] flex items-center justify-center gap-[10px] duration-200 hover:bg-[red] w-[100%] py-[10px] bg-[#C61F1F] text-[#ffff] rounded-[12px]"
                    >
                      <Tickets />
                      Buy ticket
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[50%] mx-auto max-[820px]:max-w-[80%] max-[600px]:max-w-[100%] ">
              <h3 className="text-center text-white text-[32px] mt-[50px] mb-[40px]">
                Details
              </h3>
              <div className="flex items-center justify-between">
                <h3 className="text-[#959595]">Name</h3>
                <p className="text-[#f0f0f0]"> {data?.original_title}</p>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-[#959595]">Premiere</h3>
                <p className="text-[#f0f0f0]"> {data?.release_date}</p>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-[#959595]">Production</h3>
                {data?.production_countries.length === 0 ? (
                  <></>
                ) : (
                  <p className="text-[#f0f0f0]">
                    {data?.production_countries[0].name}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-[#959595]">Genre</h3>
                <div className="flex items-center gap-[10px]">
                  {data?.genres?.map((movie: any) => (
                    <p className="text-[#f0f0f0]" key={movie.id}>
                      {movie?.name}
                    </p>
                  ))}
                </div>
              </div>
              <hr className=" mt-[20px] h-[2px] mb-[20px]  bg-[#969595]" />
              <div className="flex flex-col">
                <div className="flex items-center justify-between flex-wrap mb-[30px]">
                  <h3 className="text-[#959595]">Tagline</h3>
                  <p className="text-[#f0f0f0]"> {data?.tagline}</p>
                </div>

                <h3 className="text-[#959595]  text-nowrap mb-[10px]">
                  Production companies
                </h3>
                <div className="flex items-center justify-between flex-wrap   gap-x-[18px] mb-[45px]">
                  {data?.production_companies?.map((movie: any) => (
                    <p
                      className="text-[#f0f0f0] hover:underline cursor-pointer"
                      key={movie.id}
                    >
                      {movie?.name} ,
                    </p>
                  ))}
                </div>
                <h3 className="text-[#959595]  text-nowrap mb-[10px]">
                  Overview
                </h3>
                <div className="">
                  <p className="text-[#f0f0f0]">{data?.overview}</p>
                </div>
              </div>
            </div>
            <section className=" mt-[100px] mb-[150px]">
              <MovieHeader />
              <Outlet />
            </section>
            <h2 className="text-center text-[#fff] text-[30px]">Companies</h2>
            {data?.production_companies?.length === 0 ? (
              <section className="min-h-[250px] flex item justify-center">
                <div className="pt-[40px]">
                  <Frown className="text-[#686868] w-[100px] mx-auto mb-[20px] h-[100px]" />
                  <p className="text-[#686868] text-[18px]">
                    Company is not available
                  </p>
                </div>
              </section>
            ) : (
              <div className="bg-[#ddd] grid grid-cols-4 gap-[10px] p-[20px] mt-[30px] rounded-[12px] max-[800px]:grid-cols-3 max-[580px]:grid-cols-2">
                {data?.production_companies.map((rasm: Rasm) => (
                  <div
                    className="cursor-pointer"
                    onClick={() => navigate(`/company/${rasm?.id}`)}
                    key={rasm?.id}
                  >
                    <img
                      className="block w-[100%] duration-200 h-[150px] border-[1.5px] hover:shadow-lg rounded-[12px] border-[#bab9b9] p-[20px]"
                      src={
                        rasm?.logo_path
                          ? `https://image.tmdb.org/t/p/original${rasm?.logo_path}`
                          : img
                      }
                      alt=""
                    />
                    <h2 className="text-center text-[#787777] text-[20px] mt-[12px] mb-[10px] max-[800px]:text-[15px] max-[800px]:mb-[2px] max-[800px]:mt-[3px]">
                      {rasm?.name}
                    </h2>
                  </div>
                ))}
              </div>
            )}

            {fetching ? (
              <div className="mt-[150px]">
                <MovieSkaleton />
              </div>
            ) : (
              <MovieView data={similarMovie?.results} title={"Similar"} />
            )}
          </div>
        </section>
      </>
    );
  }
};

export default memo(MovieDetail);
