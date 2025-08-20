"use client";

import { useParams } from "react-router-dom";
import { Carousel } from "../imageHover/MovieCreditImageHover";
import { useCast } from "../../../../features/cast/service/useCast";
import { IMG_LINK } from "../../../static/imgUrl";
import noImage from "../../../assets/user.jpg"
export const CarouselDemo = () => {
  const { id } = useParams();
  const { getPersonEndpoint } = useCast();
  const { data } = getPersonEndpoint(Number(id), "images");
  const image = data?.profiles;

  const object = image?.length > 0  
      ? image?.map((item: any) => ({
          title: `vote-${item?.vote_average}`,
          src: `${IMG_LINK}${item?.file_path}`,
        }))
      : [{ title: "Image is not available", src: noImage }];

  const slideData = [...object];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
};
