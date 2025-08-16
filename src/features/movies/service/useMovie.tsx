import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";
interface iProps {
  page?: number;
}
export const useMovie = () => {
  const getMovies = (params?: iProps) =>
    useQuery({
      queryKey: ["movie-key", params],
      queryFn: () =>
        api
          .get("/discover/movie", {
            params: { ...params, without_genres: "10749, 36, 18, 99,27" },
          })
          .then((res) => res.data),
    });
  const getMovieById = (id: number) =>
    useQuery({
      queryKey: ["movie-key", ],
      queryFn: () => api.get(`movie/${id}`).then((res) => res.data),
    });

  const createMovie = useMutation({
    mutationFn: (data: any) => api.post("/discover/movie", data),
  });

  return { getMovies, createMovie, getMovieById };
};
