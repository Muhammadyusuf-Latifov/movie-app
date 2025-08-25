import { memo, useLayoutEffect } from "react";
import { PlaceholdersAndVanishInputDemo } from "../../../shared/components/ui/aceternityComponents/searchInput";

const Search = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  

  return (
    <section className="bg-[#000] pb-[80px] min-h-[700px]">
      <div className="pt-[50px]">
        <PlaceholdersAndVanishInputDemo />
      </div>
    </section>
  );
};

export default memo(Search);
