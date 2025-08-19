import { memo, type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Play } from "lucide-react";
// @ts-ignore
import "swiper/css";
// @ts-ignore

import "swiper/css/navigation";

interface Props {
  data: any[] | undefined;
}
const SwiperHome: FC<Props> = ({ data }) => {
  console.log(data);

  return (
    <section className="bg-[#000] pb-[50px] ">
      <div className=" max-w-[1360px] w-[100%] mx-auto ">
        <Swiper
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {data?.map((item: any) => (
            <SwiperSlide key={item.id} className="">
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
                }}
                className="bg-center relative overflow-hidden bg-cover h-[640px] border-[1.5px]  rounded-[12px]  border-[#484848]"
              >
                <div className="absolute w-[100%] h-[100%] bg-[#00000061]"></div>
                <div className="w-[100%] h-[100%] flex items-center justify-center">
                  <div className="w-[40%] z-10 mt-[280px] max-[600px]:w-[100%]">
                    <h3 className="text-[white] text-center text-[40px]">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-center gap-[12px]">
                      <p className="text-[white]">{item.vote_average}</p>
                      <p className="text-[white]">|</p>
                      <p className="text-[white]">{item.original_language}</p>
                      <p className="text-[white]">|</p>
                      <p className="text-[white]">{item.release_date}</p>
                    </div>
                    <div className="flex items-center justify-center mt-[15px]">
                      <button className="max-w-[300px] duration-200 hover:bg-[#eaeaea] w-[100%] py-[10px] bg-[#fff] text-[#C61F1F] rounded-[12px] flex items-center justify-center gap-[4px] ">
                        <Play className="text-[red]" /> Watch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default memo(SwiperHome);
