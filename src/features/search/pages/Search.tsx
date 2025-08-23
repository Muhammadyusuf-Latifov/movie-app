import { memo, useLayoutEffect } from "react";
import { PlaceholdersAndVanishInputDemo } from "../../../shared/components/ui/aceternityComponents/searchInput";
import { useSelector } from "react-redux";
import MovieViewOrnidary from "../../movies/components/movieImage/movieViewOrnidary";
const Search = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const data = useSelector((state: any | undefined) => state.search.value);
  console.log(data);

  return (
    <section className="bg-[#000] pb-[80px] min-h-[700px]">
      <div className="pt-[50px]">
        <PlaceholdersAndVanishInputDemo />
        <MovieViewOrnidary
          data={data?.results}
          bool={true}
          desc="No information found yet"
        />
      </div>
    </section>
  );
};

export default memo(Search);
