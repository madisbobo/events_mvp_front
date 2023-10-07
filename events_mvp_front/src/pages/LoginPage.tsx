import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <Container maxW="lg" py={24} px={8}>
      <Box
        py={8}
        px={10}
        bg={{ base: "white" }}
        boxShadow={"md"}
        borderRadius={"xl"}
      >
        <Stack spacing={"6"}>
          <Heading size={"md"} textAlign={"center"}>
            Admin sissepääs
          </Heading>
          <LoginForm />
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginPage;
