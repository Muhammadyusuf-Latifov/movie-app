"use client";

import { useEffect, useState } from "react";
import { PlaceholdersAndVanishInput } from "../imageHover/searchInput";
import { useSearch } from "../../../../features/search/service/UseSearch";
import { SearchX, Search } from "lucide-react";

import useDebounce from "../../../hooks/useDebunce";
import MovieViewOrnidary from "../../../../features/movies/components/movieImage/movieViewOrnidary";

import MovieSkaleton from "../../../../features/movies/components/movie-view/MovieSkaleton";

export const PlaceholdersAndVanishInputDemo = () => {
  const [value, setValue] = useState<string>("");
  const [write, setWrite] = useState<boolean>(false);
  const placeholders = [
    "Looking for classics?",
    "Search for action movies...",
    "Search for company...",
    "Enter a movie or TV show...",
  ];
  const debunce = useDebounce(value);
  const { getMovieBySearch } = useSearch();
  const { data, isFetching } = getMovieBySearch({ query: debunce });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const malumot = e.target.value;

    setValue(malumot);
    setWrite(true);
  };
  useEffect(() => {
    if (!isFetching) {
      setWrite(false);
    }
  }, [isFetching]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="bg-[#000] ">
      <div className="container">
        <div>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>

        {value === "" ? (
          <div className="text-[#686868] min-h-[600px] flex items-center flex-col pt-[200px]">
            <Search className="w-[80px] h-[80px] mb-[12px]" />
            <p className="text-[24px]">Search for movie</p>
          </div>
        ) : write ? (
          <div className="pt-[130px]">
            <MovieSkaleton />
          </div>
        ) : data?.results?.length === 0 ? (
          <div className="flex items-center min-h-[600px]  flex-col pt-[200px] text-[#4d4d4d]">
            <SearchX className="w-[80px]  h-[80px] mb-[12px]" />
            <p className="text-[24px]">Movie does not exist.</p>
          </div>
        ) : (
          <div className="pb-[120px]">
            <MovieViewOrnidary data={data?.results} />
          </div>
        )}
      </div>
    </section>
  );
};
