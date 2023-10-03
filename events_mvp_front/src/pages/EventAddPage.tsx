import { Box, Heading } from "@chakra-ui/react";
import EventAddForm from "../components/EventAddForm";

const EventAddPage = () => {
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
