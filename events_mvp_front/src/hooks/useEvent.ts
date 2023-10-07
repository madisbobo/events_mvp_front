import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { Event } from "../entities/Event";

const useEvent = (id: number) => {
  return useQuery<Event, Error>({
    queryKey: [`event/${id}`],
    queryFn: () => apiClient.get<Event>(`/events/${id}`).then((res) => res.data),
    cacheTime: 0,
  });
};

export default useEvent;
