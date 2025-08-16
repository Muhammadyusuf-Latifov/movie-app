import { memo } from "react";
import { useMovie } from "../../movies/service/useMovie";
import MovieView from "../../movies/components/movie-view/MovieView";
import SwiperHome from "../components/swiper/Swiper";


const Home = () => {
  const { getMovies } = useMovie();

  const { data } = getMovies();

  return (
    <div className="Home">
     
      <SwiperHome data={data?.results} />

      <MovieView data={data?.results} />
    </div>
  );
};

export default memo(Home);
