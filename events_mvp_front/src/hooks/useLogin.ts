import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

const useLogin = () => {

  const login = (loginDetails: any) =>
    apiClient.post<any>("/user/login", loginDetails).then((res) => res.data);

  return useMutation({
    mutationFn: login,
  });
};

export default useLogin;
