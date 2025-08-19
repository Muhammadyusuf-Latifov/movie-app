import { memo, useLayoutEffect, useState } from "react";
import { useCast } from "../service/useCast";
import { useNavigate, useParams } from "react-router-dom";
import { IMG_LINK } from "../../../shared/static/imgUrl";
import { Commet } from "react-loading-indicators";
import rasm from "../../../shared/assets/user.jpg";
import { Undo2, ChevronRight, X } from "lucide-react";
import PersonImage from "../components/personImages/PersonImage";
import PersonMovie from "../components/personMovie/PersonMovie";

const CastDetail = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [open, setOpen] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPerson } = useCast();

  const { data, isFetching } = getPerson(Number(id));

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
  }
  return (
    <section className="bg-[#000] pt-[60px] pb-[120px] min-h-[500px]">
      <div className="container ">
        <div className="flex items-center justify-between gap-[40px] max-w-[80%] mx-auto max-[700px]:max-w-[100%] max-[640px]:flex-col">
          {data?.profile_path ? (
            <div className="w-[40%]  max-[640px]:w-[80%]  max-[500px]:w-[90%]">
              <img
                className="w-full  h-[470px] rounded-[12px]"
                src={`${IMG_LINK}${data?.profile_path}`}
                alt=""
              />
            </div>
          ) : (
            <div className="w-[50%]  max-[640px]:w-[80%] max-[500px]:w-[90%]">
              <img
                className="w-full h-[470px] rounded-[12px]"
                src={rasm}
                alt=""
              />
            </div>
          )}
          <div className="w-[60%] max-[640px]:w-[100%]">
            {data?.name ? (
              <h2 className="text-[#fff] text-[40px] max-[640px]:text-center">
                {data?.name}
              </h2>
            ) : (
              <h2 className="text-[#fff] text-[40px] max-[640px]:text-center">
                Name does not exist
              </h2>
            )}
            <p className="text-[#fff] max-[640px]:text-center">
              {data?.birthday}
            </p>
            {data?.biography ? (
              <p className="text-white mb-[20px] max-[640px]:text-center">
                {data?.biography.split(" ").slice(0, 60).join(" ")}
              </p>
            ) : (
              <p className="text-white mb-[20px] ">
                This actor is a talented performer known for their dedication
                and versatility on screen. Even though detailed biographical
                information is not available, they continue to inspire audiences
                with their work in film and television.
              </p>
            )}
            <div className="flex items-center gap-[8px] max-[640px]:justify-center">
              <button
                onClick={() => navigate(-1)}
                className="bg-[#fff] font-medium px-[30px] py-[10px] duration-200 rounded-[12px] flex items-center gap-[4px] hover:bg-[#ddd]"
              >
                Go Back <Undo2 />
              </button>
              <button
                onClick={() => setOpen(true)}
                className="bg-[#fff] font-medium px-[30px] py-[10px] duration-200 rounded-[12px] flex items-center gap-[4px] hover:bg-[#ddd]"
              >
                More <ChevronRight />
              </button>
              {open ? (
                <>
                  <div
                    onClick={() => setOpen(false)}
                    className="w-full top-0 left-0 fixed h-screen z-100 bg-[#0000006e]"
                  ></div>
                  <div className="fixed overflow-y-auto w-[80%] h-[80%] z-120 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 bg-[#585757] border-[1.5px] border-[#a7a7a7] rounded-[12px]">
                    <div
                      onClick={() => setOpen(false)}
                      className="sticky top-[5px] left-[15px] "
                    >
                      <X className="w-[30px] h-[30px] duration-200 rounded-[50%] hover:bg-[#dddddd67] hover:text-[#393939]" />
                    </div>
                    <div className="px-[30px] py-[10px]">
                      {data?.name ? (
                        <h2 className="text-[#fff] text-center text-[40px]">
                          {data?.name}
                        </h2>
                      ) : (
                        <h2 className="text-[#fff] text-center text-[40px]">
                          Name does not available
                        </h2>
                      )}
                      <p
                        className="flex-1 text-[#fff] text-center
                      "
                      >
                        {data?.birthday}
                      </p>
                      {data?.biography ? (
                        <p className=" whitespace-pre-line text-white mt-[20px]  p-[20px] rounded-[12px] bg-[#4d4d4d]">
                          {data?.biography}
                        </p>
                      ) : (
                        <p className="text-white mt-[20px] p-[20px] rounded-[12px] bg-[#4d4d4d]">
                          This actor is a talented performer known for their
                          dedication and versatility on screen. Even though
                          detailed biographical information is not available,
                          they continue to inspire audiences with their work in
                          film and television.
                        </p>
                      )}
                    </div>
                    <div></div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <PersonImage />
        <PersonMovie/>
      </div>
    </section>
  );
};

export default memo(CastDetail);
