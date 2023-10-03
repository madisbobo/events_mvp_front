import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

const useAddRegistration = (eventId: number) => {

  const addRegistration = (event: any) =>
    apiClient.post<any>(`/registrations/add/${eventId}`, event).then((res) => res.data);

  return useMutation({
    mutationFn: addRegistration,
  });
};

export default useAddRegistration;
