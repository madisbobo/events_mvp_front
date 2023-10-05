import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import Participant from "../entities/Participant";

const useAddRegistration = (eventId: number) => {

  const addRegistration = (participant: Participant) =>
    apiClient.post<any>(`/registrations/add/${eventId}`, participant).then((res) => res.data);

  return useMutation<Participant, Error, Participant>({
    mutationFn: addRegistration,
  });
};

export default useAddRegistration;
