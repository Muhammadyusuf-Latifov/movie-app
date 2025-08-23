import { memo, type FC } from "react";
import { MdLanguage, MdOutlineStarOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa6";
import { toggleBookmark } from "../../../../app/redux/useBookmark";
import { FaBookmark } from "react-icons/fa6";
import noImage from "../../../../shared/assets/noImage.png";
import { TbMovieOff } from "react-icons/tb";
import { Button } from "antd";
import { IMG_LINK } from "../../../../shared/static/imgUrl";
import { SearchX } from "lucide-react";
interface Props {
  data: any[] | undefined;
  title?: string;
  desc?: string;
  bool?: boolean;
}
const MovieViewOrnidary: FC<Props> = ({ data, title, desc, bool }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.bookmark.value);
  console.log(data);

  if (data?.length === 0) {
    return (
      <section className="min-h-[100vh] flex  pt-[200px] justify-center bg-[#000]">
        <div className="flex flex-col ">
          {bool ? (
            <SearchX className="text-[#858585] mx-auto w-[100px] h-[100px] mb-[20px]" />
          ) : (
            <TbMovieOff className="text-[#858585] mx-auto text-[90px] mb-[20px]" />
          )}

          <p className="text-[#858585] text-[24px]">
            {desc ? desc : "Movies are unavailable or banned"}
          </p>
          {bool ? (
            <></>
          ) : (
            <Button
              onClick={() => navigate(-1)}
              className="block mx-auto mt-[20px] "
            >
              Go Back
            </Button>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#000] pt-[80px]">
      <div className="container">
        <h2 className="text-center text-[#fff] text-[35px] mb-[40px]">
          {title}
        </h2>
        <div className="grid grid-cols-4 gap-[14px] max-[820px]:grid-cols-3 max-[590px]:grid-cols-2">
          {data?.map((movie: any) => (
            <div key={movie?.id} className="mb-[20px]">
              <div onClick={() => navigate(`/movie/${movie.id}`)}>
                <img
                  className="block h-[450px] w-full bg-[#393939]   rounded-[12px] object-cover max-[1000px]:h-[370px] max-[900px]:h-[300px]"
                  src={
                    movie?.poster_path
                      ? `${IMG_LINK}${movie?.poster_path}`
                      : noImage
                  }
                  alt=""
                />
              </div>
              <div
                className="p-2 "
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <h3
                  className="mt-[12px] line-clamp-1 text-[#fff] text-[22px] font-medium"
                  title={movie.title}
                >
                  {movie.title}
                </h3>
                <p className="text-[#9c9a9a] flex items-center gap-[4px]">
                  <MdLanguage className="mt-[2px]" />
                  {movie.original_language}
                </p>
              </div>

              <div className="border pr-[20px] flex items-center justify-between">
                <p className="text-yellow-500 font-bold flex items-center gap-[4px]">
                  {movie.vote_average}
                  <MdOutlineStarOutline />
                </p>
                <button
                  className="cursor-pointer"
                  onClick={() => dispatch(toggleBookmark(movie))}
                >
                  {user?.some((item: any) => item.id == movie.id) ? (
                    <FaBookmark className="text-[white] text-[20px] " />
                  ) : (
                    <FaRegBookmark className="text-[white] text-[20px]" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(MovieViewOrnidary);
