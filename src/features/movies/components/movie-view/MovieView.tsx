import { memo, type FC } from "react";
import { MdLanguage, MdOutlineStarOutline } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

interface Props {
  data: any[] | undefined;
}

const MovieView: FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  const getElement = (id: number) => {
    navigate(`/movie/${id}`);
  };

  return (
    <section className="bg-[#000] pb-[100px]">
      <h2 className="text-white text-[30px] text-center pt-[50px] mb-[30px]">
        Movies
      </h2>

      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            550: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper "
        >
          {data?.map((movie: any) => (
            <SwiperSlide
              key={movie.id}
              className=""
              onClick={() => getElement(movie.id)}
            >
              <div>
                <img
                  className="border border-[#dddddd28] rounded-[12px]"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                />
                <div className="p-2">
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
                  <p className="text-yellow-500 font-bold flex items-center gap-[4px]">
                    {movie.vote_average}
                    <MdOutlineStarOutline />
                  </p>
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
