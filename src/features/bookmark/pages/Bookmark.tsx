import { memo, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import MovieViewOrnidary from "../../movies/components/movieImage/movieViewOrnidary";
import { GoBookmarkSlash } from "react-icons/go";
const Bookmark = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const user = useSelector((state: any) => state.bookmark.value);
  console.log(user);
  if (user?.length == 0) {
    return (
      <section className="bg-[#000] min-h-[700px] w-full">
        <div className="container flex flex-col items-center justify-center pt-[130px]">
          <GoBookmarkSlash className="text-[#858585] text-[80px] mb-[20px]" />
          <p className="text-[#8b8b8b] text-[20px]">Your bookmark list is empty</p>
        </div>
      </section>
    );
  }
  return (
    <section>
      <MovieViewOrnidary data={user} title={"Bookmark"} />
    </section>
  );
};

export default memo(Bookmark);
