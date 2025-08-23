import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const useCompany = () => {
  const getCompany = (id: string | undefined) =>
    useQuery({
      queryKey: ["movie-key", id],
      queryFn: () => api.get(`/company/${id}`).then((res) => res.data),
    });
  const getCompanyEndpoint = (id: number | undefined, path: string) =>
    useQuery({
      queryKey: ["company-endpoint", id, path],
      queryFn: () => api.get(`/company/${id}/${path}`).then((res) => res.data),
    });

  const create = useMutation({
    mutationFn: (data: any) => api.post("/company/", data),
  });

  return { getCompany, create, getCompanyEndpoint };
};
