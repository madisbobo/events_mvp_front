
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { RegistrationCount } from "../entities/Registration";

const useRegistrationsCount = (eventId: number) => {
  return useQuery<RegistrationCount, Error>({
    queryKey: ["registrationCount"],
    queryFn: () => apiClient.get(`/registrations/total/${eventId}`).then((res) => res.data),
    cacheTime: 0,
  });
};


export default useRegistrationsCount;
