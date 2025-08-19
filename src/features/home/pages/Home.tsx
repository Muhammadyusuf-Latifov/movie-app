import { memo, useLayoutEffect } from "react";
import { useMovie } from "../../movies/service/useMovie";
import MovieView from "../../movies/components/movie-view/MovieView";
import SwiperHome from "../components/swiper/Swiper";
import MovieSkaleton from "../../movies/components/movie-view/MovieSkaleton";
import HeadSkaleton from "../../movies/components/headSkaleton/HeadSkaleton";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { getMovies } = useMovie();

  const { data, isFetching } = getMovies();

  if (isFetching) {
    return (
      <div className="bg-[#000] ">
        <HeadSkaleton />
        <div className="bg-[#000] pt-[500px] pb-[120px]">
          <MovieSkaleton />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="Home">
          <SwiperHome data={data?.results} />

          <MovieView data={data?.results} title={"Movies"} />
        </div>
      </>
    );
  }
};

export default memo(Home);
