import {
    Button,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    useDisclosure,
    useToast
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useLogin from "../hooks/useLogin";

const LoginForm = () => {
  const { loginAuth } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const { handleSubmit, register } = useForm();
  const login = useLogin();
  const { isOpen, onToggle } = useDisclosure();

  const onClickReveal = () => {
    onToggle();
  };

  const onSubmit = (data: any) => {
    login.mutate(data, {
      onSuccess: (res) => {
        loginAuth(res.token);
        navigate("/");
      },
      onError: () => {
        toast({
          title: "Sisselogimine ebaõnnestus.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Stack spacing="5">
          <Stack>
            <FormLabel>Email</FormLabel>
            <Input
              id="email"
              type="email"
              required={true}
              {...register("email")}
            />
          </Stack>
          <Stack>
            <FormLabel>Parool</FormLabel>
            <InputGroup>
              <InputRightElement>
                <IconButton
                  variant="text"
                  aria-label={isOpen ? "Mask password" : "Reveal password"}
                  icon={isOpen ? <HiEyeOff /> : <HiEye />}
                  onClick={onClickReveal}
                />
              </InputRightElement>
              <Input
                id="password"
                type={isOpen ? "text" : "password"}
                required
                {...register("password")}
              />
            </InputGroup>
          </Stack>
          <Stack mt={6}>
            <Button type="submit" colorScheme="teal">
              Logi sisse
            </Button>
          </Stack>
        </Stack>
      </FormControl>
    </form>
  );
};

export default LoginForm;
