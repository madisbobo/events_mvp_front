import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { PasswordField } from "../components/PasswordField";
import { useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Tee loginform eraldi komponendiks (Hetkel ainult password)

const LoginPage = () => {
  const { loginAuth } = useAuth();
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const login = useLogin();

  const onSubmit = (data: any) => {
    login.mutate(data, {
      onSuccess: (res) => {
        loginAuth(res.token);
        navigate("/");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxW="lg" py={24} px={8}>
        <Stack spacing="8">
          <Stack spacing="6"></Stack>
          <Box
            py={8}
            px={10}
            bg={{ base: "white" }}
            boxShadow={"md"}
            borderRadius={"xl"}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input id="email" type="email" {...register("email")} />
                </FormControl>
                <PasswordField {...register("password")} />
              </Stack>
              <Stack spacing="6">
                <Button type="submit" colorScheme="teal">
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </form>
  );
};

export default LoginPage;
