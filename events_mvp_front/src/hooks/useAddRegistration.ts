import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import Participant from "../entities/Participant";

const useAddRegistration = (eventId: number) => {
    const queryClient = useQueryClient();

  const addRegistration = (participant: Participant) =>
    apiClient.post<any>(`/registrations/add/${eventId}`, participant).then((res) => res.data);

  return useMutation<Participant, Error, Participant>({
    mutationFn: addRegistration,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["registrationCount"] });
      },
  });
};

export default useAddRegistration;
