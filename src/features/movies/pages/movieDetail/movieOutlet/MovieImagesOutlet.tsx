import { memo } from "react";

import { useMovie } from "../../../service/useMovie";
import { useParams } from "react-router-dom";
import { ThreeDMarqueeDemo } from "../../../../../shared/components/ui/aceternityComponents/Image";
import { ThreeDot } from "react-loading-indicators";

const MovieImagesOutlet = () => {
  const { id } = useParams();
  const toNumber = Number(id);
  const { getMOvieEndpoint } = useMovie();
  const { data, isFetching } = getMOvieEndpoint(toNumber, "images");
  console.log(data);

  if (isFetching) {
    return (
      <div className=" flex items-center justify-center min-h-[400px]">
        <ThreeDot color="#fff" size="medium" text="" textColor="" />
      </div>
    );
  }

  return (
    <div className="mt-[70px]">
      <h2 className="text-center text-[30px] text-white mb-[30px]"> Images</h2>

      <ThreeDMarqueeDemo data={data?.backdrops} />
    </div>
  );
};

export default memo(MovieImagesOutlet);
