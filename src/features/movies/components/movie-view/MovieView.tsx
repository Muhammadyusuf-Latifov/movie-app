import { memo, type FC } from "react";
import { MdLanguage, MdOutlineStarOutline } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import poster from "../../../../shared/assets/noImage.png";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { toggleBookmark } from "../../../../app/redux/useBookmark";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  data: any[] | undefined;
  title?: string;
}

const MovieView: FC<Props> = ({ data, title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.bookmark.value);

  return (
    <section className="bg-[#000] pb-[100px]">
      <h2 className="text-white text-[30px] text-center pt-[50px] mb-[30px]">
        {title}
      </h2>

      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 12 },
            420: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper "
        >
          {data?.map((movie: any) => (
            <SwiperSlide key={movie.id} className="">
              <div>
                {movie?.poster_path ? (
                  <div
                    onClick={() => navigate(`/movie/${movie.id}`)}
                    className="h-[430px] overflow-hidden border rounded-[12px] border-[#5e5e5e] max-[1000px]:h-[400px]  max-[700px]:h-[380px]  max-[600px]:h-[320px]"
                  >
                    <img
                      className=" h-[100%] w-[100%] "
                      src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                      alt=""
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => navigate(`/movie/${movie.id}`)}
                    className="relative bg-[#6e6e6e]   h-[430px] overflow-hidden border rounded-[12px] border-[#5e5e5e] max-[1000px]:h-[400px] max-[700px]:h-[380px] max-[600px]:h-[320px]"
                  >
                    <img
                      className="absolute top-[50%]  p-[20px] left-[50%] -translate-x-1/2  -translate-y-1/2"
                      src={poster}
                      alt=""
                    />
                  </div>
                )}

                <div
                  className="p-2"
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default memo(MovieView);
