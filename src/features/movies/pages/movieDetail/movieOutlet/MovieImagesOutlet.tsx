import { memo } from "react";
import noImage from "../../../../../shared/assets/Image_not_available.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useNavigate } from "react-router-dom";
import { useMovie } from "../../../service/useMovie";
import { useParams } from "react-router-dom";
import { Pagination, Navigation } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";

const MovieImagesOutlet = () => {
  const { id } = useParams();
  const toNumber = Number(id);
  const { getMOvieEndpoint } = useMovie();
  const { data } = getMOvieEndpoint(toNumber, "images");
  console.log(data);

  return (
    <div className="mt-[70px]">
      <h2 className="text-center text-[30px] text-white mb-[30px]"> Images</h2>
      <div className="border border-[#646464] rounded-[12px] px-[10px] py-[20px]  bg-[#1a1a1a]">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            420: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 10 },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper  min-h-[170px]"
        >
          {data?.backdrops.length === 0 ? (
           
              <div className="w-full flex items-center justify-center">
              <div>
                <img className="block max-w-[270px]  w-[100%]" src={noImage} alt="" />
               
                </div>
            </div>
             
           
          ) : (
            data?.backdrops?.map((img: any) => (
              <SwiperSlide className="rounded[12px]">
                <div className="border h-[240px] border-[#343434] rounded-[12px] overflow-hidden">
                  <img
                    className="h-[100%] object-cover"
                    src={`https://image.tmdb.org/t/p/original${img.file_path}`}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(MovieImagesOutlet);
