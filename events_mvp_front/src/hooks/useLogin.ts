import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { LoginCredentials, LoginResponse } from "../entities/Login";

const useLogin = () => {

  const login = (loginDetails: LoginCredentials) =>
    apiClient.post<LoginResponse>("/user/login", loginDetails).then((res) => res.data);

  return useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: login,
  });
};

export default useLogin;
