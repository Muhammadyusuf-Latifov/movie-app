import { memo } from "react";
import { PlaceholdersAndVanishInputDemo } from "../../../shared/components/ui/aceternityComponents/searchInput";
import { useSelector } from "react-redux";
import MovieViewOrnidary from "../../movies/components/movieImage/movieViewOrnidary";
const Search = () => {
  const data = useSelector((state: any | undefined) => state.search.value);
  console.log(data);

  return (
    <section className="bg-[#000] pb-[80px]">
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
