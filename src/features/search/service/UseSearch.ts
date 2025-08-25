import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

interface iParams {
  query: string;
}
export const useSearch = () => {
  const getMovieBySearch = (params: iParams) =>
    useQuery({
      queryKey: ["search-key", params],
      queryFn: () =>
        api.get("/search/movie", { params }).then((res) => res.data),
    });
  const getCompanyBySearch = (params: iParams) =>
    useQuery({
      queryKey: ["company-key", params],
      queryFn: () =>
        api.get("/search/company", { params }).then((res) => res.data),
    });
  return { getMovieBySearch, getCompanyBySearch };
};
