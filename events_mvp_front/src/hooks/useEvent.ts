import { useQuery } from "@tanstack/react-query";
import Event from "../entities/Event";
import apiClient from "../services/apiClient";

const useEvent = (id: number) => {
  return useQuery<Event, Error>({
    queryKey: [`event/${id}`],
    queryFn: () => apiClient.get<Event>(`/events/${id}`).then((res) => res.data),
    cacheTime: 0,
  });
};

export default useEvent;
