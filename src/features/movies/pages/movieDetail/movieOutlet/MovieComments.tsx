import { memo } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../../../service/useMovie";

import { ThreeDot } from "react-loading-indicators";
import { AnimatedTestimonialsDemo } from "../../../../../shared/components/ui/aceternityComponents/Testimonal";
import { MessageCircleOff } from "lucide-react";

const MovieComments = () => {
  const { id } = useParams();

  const { getMOvieEndpoint } = useMovie();
  const { data, isFetching } = getMOvieEndpoint(Number(id), "reviews");

  if (isFetching) {
    return (
      <section className="min-h-[400px] flex items-center justify-center">
        <ThreeDot color="#fff" size="medium" text="" textColor="" />
      </section>
    );
  } else if (data?.results.length === 0) {
    return (
      <section className="min-h-[300px] flex items-center justify-center">
        <div className="pt-[60px]">
          <MessageCircleOff className="text-[#686868] w-[100px] mx-auto mb-[20px] h-[100px]" />
          <p className="text-[#686868] text-[18px]">Comment is not available</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="mt-[70px]">
        <AnimatedTestimonialsDemo data={data?.results} />
      </section>
    );
  }
};

export default memo(MovieComments);
