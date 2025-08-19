import { memo } from "react";
import { useParams } from "react-router-dom";
import { useCast } from "../../service/useCast";
import MovieViewOrnidary from "../../../movies/components/movieImage/movieViewOrnidary";
import MovieSkaleton from "../../../movies/components/movie-view/MovieSkaleton";

const PersonMovie = () => {
  const { id } = useParams();
  const { getPersonEndpoint } = useCast();
  const { data, isFetching } = getPersonEndpoint(Number(id), "movie_credits");
  const kino = data?.cast.slice(0, 8);
  console.log(kino);

  if (isFetching) {
    return (
      <section>
        <MovieSkaleton />
      </section>
    );
  } else {
    return (
      <div className="PersonMovie">
        <MovieViewOrnidary data={kino} title={"Movies"} />
      </div>
    );
  }
};

export default memo(PersonMovie);
