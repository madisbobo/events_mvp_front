import { useQuery } from "@tanstack/react-query";
import Event from "../entities/Event";
import apiClient from "../services/apiClient";

const useEvent = (id: number) => {
  return useQuery<Event, Error>({
    queryKey: ["event"],
    queryFn: () => apiClient.get(`/events/${id}`).then((res) => res.data),
  });
};

export default useEvent;