import { memo, type FC } from "react";
import { MdLanguage, MdOutlineStarOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa6";
import { toggleBookmark } from "../../../../app/redux/useBookmark";
import { FaBookmark } from "react-icons/fa6";

interface Props {
  data: any[] | undefined;
  title? : string
}
const MovieViewOrnidary: FC<Props> = ({ data, title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.bookmark.value);
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
                  className="border border-[#dddddd28] min-h-[200px] rounded-[12px]"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
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
                <button className="cursor-pointer" onClick={() => dispatch(toggleBookmark(movie))}>
                  {user?.some((item: any) => item.id == movie.id) ? (
                    <FaBookmark className="text-[white] text-[20px] "/>
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
