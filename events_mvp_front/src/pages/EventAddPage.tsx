import { Box, Heading } from "@chakra-ui/react";
import EventAddForm from "../components/EventAddForm";
import { useAuth } from "../context/AuthContext";

const EventAddPage = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated)
    return <Heading size="lg" textAlign={"center"}>Ligipääs puudub</Heading>;

  return (
    <>
      <Box
        py={6}
        px={24}
        my={6}
        bg={{ base: "white" }}
        boxShadow={"md"}
        borderRadius={"xl"}
      >
        <Heading size={"lg"} gridColumn={"span 2"} my={10}>
          Lisa sündmus
        </Heading>
        <EventAddForm />
      </Box>
    </>
  );
};

export default EventAddPage;
