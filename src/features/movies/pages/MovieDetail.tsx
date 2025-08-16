import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../service/useMovie";
import { Tickets } from "lucide-react";
import img from "../../../shared/assets/Image_not_available.png";
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
  const { getMovieById } = useMovie();
  const { data, isLoading, isError } = getMovieById(toNumber);
  console.log(data);

  if (isError) {
    return <p>xato</p>;
  } else {
    return (
      <>
        {isLoading && <p>loading...</p>}

        <section className="bg-[#000] pb-[200px]">
          <div className="container">
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
              }}
              className="bg-center  relative bg-cover h-[640px] border-[1.5px] rounded-[12px]  border-[#484848]"
            >
              <div className="absolute w-full h-[100%] z-2 bg-[#0000006b]"></div>
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
                    <p className="text-[#fff]">
                      {data?.genres[1]
                        ? data?.genres[1].name
                        : data?.genres[0].name}
                    </p>

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
                <p className="text-[#f0f0f0]">
                  {data?.production_countries[0].name}
                </p>
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
                <div className="flex items-center justify-between mb-[30px]">
                  <h3 className="text-[#959595]">Tagline</h3>
                  <p className="text-[#f0f0f0]"> {data?.tagline}</p>
                </div>

                <h3 className="text-[#959595]  text-nowrap mb-[10px]">
                  Production companies
                </h3>
                <div className="flex items-center justify-between  gap-x-[12px] mb-[45px]">
                  {data?.production_companies?.map((movie: any) => (
                    <p
                      className="text-[#f0f0f0] hover:underline cursor-pointer"
                      key={movie.id}
                    >
                      {movie?.name}
                    </p>
                  ))}
                </div>
                <h3 className="text-[#959595]  text-nowrap mb-[10px]">
                  Production companies
                </h3>
                <div className="">
                  <p className="text-[#f0f0f0]">{data?.overview}</p>
                </div>
              </div>
            </div>
            <div className="bg-[white] grid grid-cols-3 gap-[10px] p-[20px] mt-[100px]">
              {data?.production_companies.map((rasm: Rasm) => (
                <div
                  className=" p-[10px]  border-[1.5px] border-[#ddd]"
                  key={rasm?.id}
                >
                  <img
                    className="block w-[100%] h-[250px] "
                    src={
                      rasm?.logo_path
                        ? `https://image.tmdb.org/t/p/original${rasm?.logo_path}`
                        : img
                    }
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default memo(MovieDetail);
