
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

const useEvents = () => {
  return useQuery<Event[], Error>({
    queryKey: ["events"],
    queryFn: () => apiClient.get("/events/all").then((res) => res.data),
  });
};


export default useEvents;
