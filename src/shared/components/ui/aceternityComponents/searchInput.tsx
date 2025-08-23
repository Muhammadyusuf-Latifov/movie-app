"use client";

import { useEffect, useState } from "react";
import { PlaceholdersAndVanishInput } from "../imageHover/searchInput";
import { useSearch } from "../../../../features/search/service/UseSearch";
import { useDispatch } from "react-redux";
import { element } from "../../../../app/redux/useSearch";

export const PlaceholdersAndVanishInputDemo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const placeholders = [
    "Looking for classics?",
    "Search for action movies...",
    "Find romantic comedies...",
    "Enter a movie or TV show...",
  ];
  const { getMovieBySearch } = useSearch();
  const { data } = getMovieBySearch({ query: value });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const malumot = e.target.value;

    setValue(malumot);
  };
  useEffect(() => {
    if (data) {
      dispatch(element(data));
    }
  }, [data, dispatch]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
    
  return (
    <section className="bg-[#000] min-h-[00px]">
      <div className="container">
        <div>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </section>
  );
};
