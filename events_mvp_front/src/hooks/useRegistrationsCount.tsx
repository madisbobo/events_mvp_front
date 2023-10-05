
import { useQuery } from "@tanstack/react-query";
import RegistrationCount from "../entities/RegistrationsCount";
import apiClient from "../services/apiClient";

const useRegistrationsCount = (eventId: number) => {
  return useQuery<RegistrationCount, Error>({
    queryKey: ["registrationCount"],
    queryFn: () => apiClient.get(`/registrations/total/${eventId}`).then((res) => res.data),
    cacheTime: 0,
  });
};


export default useRegistrationsCount;
