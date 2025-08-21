import { memo, useLayoutEffect } from "react";
import { SparklesPreview } from "../../../shared/components/ui/aceternityComponents/Title";
import { useCompany } from "../service/UseCompany";
import { ThreeDot } from "react-loading-indicators";
import { useParams } from "react-router-dom";
import { IMG_LINK } from "../../../shared/static/imgUrl";
import noCompany from "../../../shared/assets/No-Image-Placeholder.svg.png";

const Company = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { id } = useParams();

  const { getCompany, getCompanyEndpoint } = useCompany();
  const { data, isFetching } = getCompany(id);
  const { data: imageData } = getCompanyEndpoint(Number(id), "images");

  console.log(imageData);

  if (isFetching) {
    return (
      <section className="bg-[#000] h-screen flex items-center justify-center">
        <ThreeDot color="#fff" size="medium" text="" textColor="" />
      </section>
    );
  } else {
    return (
      <section className="Company bg-[#000] min-h-[500px] pb-[80px]">
      
        <SparklesPreview title={data?.name} />
        <div className=" container ">
          <div className="flex items-center gap-[30px] max-w-[1200px] mx-auto w-[100%] max-[820px]:gap-[12px] max-[700px]:flex-col">
            <div className="border   w-[50%] max-[700px]:w-[80%] max-[600px]:w-[100%] max-[700px]:mb-[30px]">
              {data?.logo_path ? (
                <img
                  className="w-[100%] p-[20px] max-w-[90%] max-[700px]:max-w-[100%] bg-[#fff] rounded-[14px] h-[380px]"
                  src={`${IMG_LINK}${data?.logo_path}`}
                  alt=""
                />
              ) : (
                <img
                  className="w-[100%] p-[20px] max-w-[90%] max-[700px]:max-w-[100%] bg-[#fff] rounded-[14px] h-[380px]"
                  src={noCompany}
                  alt=""
                />
              )}
            </div>
            <div className="w-[50%] max-[700px]:w-[100%]">
              <h2 className="text-white text-[30px] font-medium max-[700px]:text-center">
                {data?.name || "Unknown"}{" "}
              </h2>
              <p className="text-[#ddd] text-[18px] mb-[12px] max-[700px]:text-center">
                {data?.headquarters || "unknown"}
              </p>
              <p className="text-[#9d9d9d] max-[700px]:text-center">
                This company is a trusted provider of entertainment and media
                content, specializing in movies, cartoons, series, and digital
                experiences. Dedicated to quality and creativity, it delivers
                engaging and memorable experiences for audiences worldwide. With
                a focus on innovation, reliability, and customer satisfaction,
                it supports the global film industry’s growth and success.
              </p>
            </div>
          </div>
          {imageData?.logos.length == 0 ? (
            <></>
          ) : (
            <div className="mt-[100px] p-[20px] grid grid-cols-3 gap-[12px] max-[700px]:grid-cols-2 bg-[#171717] rounded-[12px]">
              {imageData?.logos.map((item: any) => (
                <div
                  key={item?.id}
                  className="bg-[#fff]  p-[20px] rounded-[12px] overflow-hidden"
                >
                  <img
                    className="block mx-auto h-[200px] max-[800px]:h-[160px] max-[600px]:h-[120px]"
                    src={`${IMG_LINK}${item?.file_path}`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
};

export default memo(Company);
