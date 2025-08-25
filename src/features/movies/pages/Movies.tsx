import { memo, useEffect } from "react";

import { useMovie } from "../service/useMovie";
import MovieViewOrnidary from "../components/movieImage/movieViewOrnidary";
import MovieSkaleton from "../components/movie-view/MovieSkaleton";
import { Pagination, Select } from "antd";
import { useSearchParams } from "react-router-dom";
import { useGenres } from "../service/useGenre";
import { Film } from "lucide-react";

const Movies = () => {
  const { getMovies } = useMovie();
  const { getGenres } = useGenres();

  const [params, setParams] = useSearchParams();

  const page = params.get("page") || "1";
  const with_genres = params.get("genre") || "";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const { data: dataGenres } = getGenres();
  const { data, isFetching } = getMovies({ page, with_genres });

  const selectOptions = dataGenres?.genres.map(({ id, name }: any) => ({
    value: id.toString(),
    label: name,
  }));
  
  

  const handleChange = (value: number) => {
    params.set("page", value.toString());
    setParams(params);
  };

  const handleChangeGenre = (value: string) => {
    params.set("genre", value);
    setParams(params);
  };
  

  if (isFetching) {
    return (
      <>
        <div className="bg-[#000]  pt-[240px] pb-[120px]">
          <MovieSkaleton />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="pb-[60px] bg-[#000] scroll-smooth">
          <div className="container">
            <div className="pt-[40px] w-[35%] mx-auto max-[700px]:w-[60%] max-[600px]:w-[100%]">
              <Select
                placeholder={
                  <span style={{ color: "#fff" }}>Select genre</span>
                }
                onChange={handleChangeGenre}
                className="w-[100%] "
                options={selectOptions}
                value={with_genres || undefined}
              />
            </div>
          </div>
          {data?.results.length === 0 ? (
            <div className="container">
              <div className="text-[#4c4c4c] pt-[200px] pb-[200px] ">
                <Film className="mx-auto w-[80px] h-[80px]" />
                <p className="text-[24px] text-center">
                  Movies are unavailable or banned
                </p>
              </div>
            </div>
          ) : (
            <MovieViewOrnidary data={data?.results} title={"Movies"} />
          )}
        </div>
        <div className="bg-[#000]  flex items-center justify-center pb-[40px]">
          <div className=" py-[10px] px-[30px] rounded-[12px]">
            <Pagination
              total={500}
              current={Number(page)}
              showSizeChanger={false}
              onChange={handleChange}
              defaultPageSize={1}
            />
          </div>
        </div>
      </>
    );
  }
};

export default memo(Movies);
