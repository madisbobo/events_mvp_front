import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { Event } from "../entities/Event";
import { RegistrationError } from "../entities/ErrorCustom";

const useAddEvent = () => {
  const queryClient = useQueryClient();

  const addEvent = (event: Event) =>
    apiClient.post<Event>("/events/add", event).then((res) => res.data);

  return useMutation<any, RegistrationError, Event>({
    mutationFn: addEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });
};

export default useAddEvent;

