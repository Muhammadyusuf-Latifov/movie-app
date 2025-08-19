import { memo } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../../../service/useMovie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import user from "../../../../../shared/assets/user.jpg";
import { IoIosStarOutline } from "react-icons/io";
import { MessageCircleOff } from "lucide-react";

// @ts-ignore
import "swiper/css";
// @ts-ignore

import "swiper/css/navigation";

interface Comment {
  id: string;

  author_details: any;
  content: string;
}
const MovieComments = () => {
  const { id } = useParams();

  const { getMOvieEndpoint } = useMovie();
  const { data } = getMOvieEndpoint(Number(id), "reviews");
  console.log(data);
  return (
    <section className="mt-[70px]">
      <h2 className="text-[30px] text-center text-[#fff] mb-[30px]">Comments</h2>
      <div className="container bg-[#282828] rounded-[10px] ">
        <div className=" p-[15px] ">
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper border border-[#6f6d6d] rounded-[10px]"
          >
            {data?.results?.length === 0 ? (
              <SwiperSlide className="min-h-[240px]">
                <div className="w-full  flex items-center justify-center">
                  <div className="pt-[40px]">
                     <MessageCircleOff className="mx-auto text-[#fff] w-[80px] h-[80px] mb-[20px]"/>
                  <p className="text-white text-[24px]">The comment does not exist</p>
                </div>
                </div>
              </SwiperSlide>
            ) : (
              data?.results?.map((comment: Comment) => (
                <SwiperSlide className=" " key={comment.id}>
                  <div className="py-[30px]">
                    <div className="">
                      <div className="mx-auto w-[65px] h-[65px] rounded-[50%] overflow-hidden border border-[#ddd] p-[2px]">
                        {comment?.author_details?.avatar_path ? (
                          <img
                            className="w-[100%] h-[100%] rounded-[50%]"
                            src={`https://image.tmdb.org/t/p/original${comment.author_details.avatar_path}`}
                            alt=""
                          />
                        ) : (
                          <img
                            className="w-[100%] rounded-[50%]"
                            src={user}
                            alt=""
                          />
                        )}
                      </div>
                      {comment?.author_details.name ? (
                        <h3 className="text-center text-[18px] text-[#fff]">
                          {comment?.author_details.name}
                        </h3>
                      ) : (
                        <h3 className="text-center text-[18px] text-[#fff]">
                          Unknown
                        </h3>
                      )}
                      <p className="text-center text-[14px] text-[#7a7a7a]">
                        @{comment?.author_details?.username}
                      </p>

                      {comment?.author_details?.rating ? (
                        <p className="flex text-[#ffdd00] items-center gap-[2px] justify-center">
                          {comment?.author_details?.rating}
                          <IoIosStarOutline className="text-[#ffdd00]" />
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="context p-[20px] bg-[#474747] rounded-[12px] max-[700px]:max-w-[90%] mt-[30px] max-w-[80%] mx-auto">
                      {comment?.content ? (
                        <p className="text-[#ddd]">
                          {comment.content.split(" ").slice(0, 50).join(" ")}...
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default memo(MovieComments);
