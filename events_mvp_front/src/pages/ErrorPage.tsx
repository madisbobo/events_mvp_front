import { Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/layout/NavBar";

interface ErrorResponse {
  status: number;
}

const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse | undefined;
  if (error) console.log(error);

  return (
    <>
      <NavBar />
      <SimpleGrid justifyContent={"center"} mt={24}>
        <Center>
          <Heading mb={5}>Ups...</Heading>
        </Center>
        {isRouteErrorResponse(error) ? (
          <Text>Sellist lehte pole olemas. Error: {error.status} </Text>
        ) : (
          <Text>{error?.status} Midagi läks valestsi.</Text>
        )}
      </SimpleGrid>
    </>
  );
};

export default ErrorPage;
