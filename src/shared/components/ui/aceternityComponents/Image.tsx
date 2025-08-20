import type { FC } from "react";
import { ThreeDMarquee } from "../imageHover/ImageHover";
import { IMG_LINK } from "../../../static/imgUrl";
import notEnough from "../../../assets/movie.jpg";

interface iProps {
  data: any | undefined;
}

export const ThreeDMarqueeDemo: FC<iProps> = ({ data }) => {
  const imageCut = data?.slice(0,60)
  const yetmagan = [
    notEnough,
    notEnough,
    notEnough,
    notEnough,
    notEnough,
    notEnough,
    notEnough,
   
  
  ];


  const image = imageCut?.map((item: any) => `${IMG_LINK}${item?.file_path}`) || [];
  const result = image?.length < 7 ? [...image, ...yetmagan] : image;

  

  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={result} />
    </div>
  );
};
