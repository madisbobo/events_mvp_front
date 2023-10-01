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

const LoginPage = () => (
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
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <Stack spacing="6">
            <Button colorScheme="teal">Sign in</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
);

export default LoginPage;
