import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import LoginResponse from "../entities/LoginResponse";
import Login from "../entities/Login";

const useLogin = () => {

  const login = (loginDetails: Login) =>
    apiClient.post<LoginResponse>("/user/login", loginDetails).then((res) => res.data);

  return useMutation<LoginResponse, Error, Login>({
    mutationFn: login,
  });
};

export default useLogin;
