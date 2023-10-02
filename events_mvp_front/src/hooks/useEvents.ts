
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import EventPreview from "../entities/EventPreview";

const useEvents = () => {
  return useQuery<EventPreview[], Error>({
    queryKey: ["events"],
    queryFn: () => apiClient.get("/events/all").then((res) => res.data),
  });
};


export default useEvents;
