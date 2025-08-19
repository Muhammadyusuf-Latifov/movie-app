import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const useCast = () => {
  const getPerson = (id: number) =>
    useQuery({
      queryKey: ["person-key", id],
      queryFn: () => api.get(`/person/${id}`).then((res) => res.data),
    });
  const getPersonEndpoint = (id: number, endpoint:string) =>
    useQuery({
      queryKey: ["personEndpoint-key", id, endpoint],
      queryFn: () => api.get(`/person/${id}/${endpoint}`).then((res) => res.data),
    });
  //   const getMovieById = (id: number) =>
  //     useQuery({
  //       queryKey: ["movie-id", id],
  //       queryFn: () => api.get(`movie/${id}`).then((res) => res.data),
  //     });
  //   const getMOvieEndpoint = (id: number, path: string) =>
  //     useQuery({
  //       queryKey: ["movie-endpoint", id, path],
  //       queryFn: () => api.get(`movie/${id}/${path}`).then((res) => res.data),
  //     });

  const createMovie = useMutation({
    mutationFn: (data: any) => api.post("/discover/movie", data),
  });

  return { getPerson, getPersonEndpoint, createMovie };
};
