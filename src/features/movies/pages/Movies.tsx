import { memo, useEffect, useState } from "react";

import { useMovie } from "../service/useMovie";
import MovieViewOrnidary from "../components/movieImage/movieViewOrnidary";
import MovieSkaleton from "../components/movie-view/MovieSkaleton";

const Movies = () => {
  const [kino, setKino] = useState<number>(1);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [kino]);

  const { getMovies } = useMovie();

  const { data, isFetching } = getMovies({ page: kino });

  if (isFetching) {
    return (
      <div className="bg-[#000]  pt-[180px] pb-[120px]">
        <MovieSkaleton />
      </div>
    );
  } else {
    return (
      <div className="pb-[60px] bg-[#000] scroll-smooth">
        <MovieViewOrnidary data={data?.results} title={"Movies"} />
        <div className="flex items-center justify-center gap-[12px] mt-[30px]">
          <button
            disabled={kino === 1}
            onClick={() => setKino((p) => p - 1)}
            className="bg-[#d00000] text-[#fff] px-[20px] py-[8px] rounded-[10px] disabled:bg-[#4e0202]"
          >
            Previous page
          </button>
          <button className="bg-[#d00000] text-[#fff] px-[20px] py-[8px] rounded-[10px]" onClick={() => setKino((p) => p + 1)}>
            Next Page
          </button>
        </div>
      </div>
    );
  }
};

export default memo(Movies);
