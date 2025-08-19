import { memo } from "react";
import { useCast } from "../../service/useCast";
import { useParams } from "react-router-dom";
import { Commet } from "react-loading-indicators";
import { IMG_LINK } from "../../../../shared/static/imgUrl";

const PersonImage = () => {
  const { id } = useParams();
  const { getPersonEndpoint } = useCast();
  const { data, isFetching } = getPersonEndpoint(Number(id), "images");
  const malumot = data?.profiles.slice(0, 4) || [];
  

  if (isFetching) {
    return (
      <div className="flex items-center justify-center bg-[#000] min-h-[500px]">
        <Commet
          color="#ffffff"
          size="large"
          text="loading"
          textColor="#ffffff"
        />
      </div>
    );
  } else {
    return (
      <section>
        <div className="container">
          <div className="min-h-[300px] grid grid-cols-4 mt-[60px] gap-[12px] border border-[#7b7a7a] p-[20px] max-[900px]:grid-cols-3 max-[730px]:grid-cols-2 max-[500px]:grid-cols-1">
            {malumot?.map((item: any, inx: number) => (
              <div
                key={inx}
                className=" h-[360px] border border-[#747474] p-[2px] rounded-[12px] max-[600px]:h-[320px] max-[500px]:grid-cols-1"
              >
                {malumot?.file_path ? (
                  <></>
                ) : (
                  <img
                    className="h-[100%] w-full rounded-[8px]"
                    loading="lazy"
                    src={`${IMG_LINK}${item.file_path}`}
                    alt=""
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default memo(PersonImage);
