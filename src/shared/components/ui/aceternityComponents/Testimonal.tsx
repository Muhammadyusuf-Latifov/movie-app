import type { FC } from "react";
import { AnimatedTestimonials } from "../imageHover/TestimonalHover";
import user from "../../../assets/user.jpg";
import { IMG_LINK } from "../../../static/imgUrl";

interface iProps {
  data: any[] | undefined;
}
interface info {
  author_details: any;
  id: number;
  content: string;
}
export const AnimatedTestimonialsDemo: FC<iProps> = ({ data }) => {
  console.log(data);

  const malumot =
    data?.map((item: info) => ({
      id: item?.id,
      quote: item?.content
        ? item?.content.split(" ").slice(0, 30).join(" ")
        : "The comment is not available",
      name: item?.author_details.name ? item?.author_details?.name : "Unknown",
      designation: item?.author_details.username
        ? item?.author_details.username
        : "Unknown",
      src: item?.author_details?.avatar_path
        ? `${IMG_LINK}${item?.author_details?.avatar_path}`
        : user,
    })) || [];
  console.log(malumot);

  const testimonials = malumot;
  return <AnimatedTestimonials testimonials={testimonials} />;
};
