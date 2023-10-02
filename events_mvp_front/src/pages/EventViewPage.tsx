import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import EventInfo from "../components/EventInfo";
import EventRegistrationForm from "../components/EventRegistrationForm";

const EventViewPage = () => {
  return (
    <>
      <Box
        py={6}
        px={24}
        my={6}
        bg={"white"}
        boxShadow={"md"}
        borderRadius={"xl"}
      >
        <SimpleGrid columns={2} spacingY={10} spacingX={10} my={10}>
          <EventInfo />
        </SimpleGrid>
      </Box>
      <Box
        py={6}
        px={24}
        my={6}
        bg={{ base: "white" }}
        boxShadow={"md"}
        borderRadius={"xl"}
      >
        <Heading size={"lg"} gridColumn={"span 2"} my={10}>
          Registreeri
        </Heading>
        <EventRegistrationForm />
      </Box>
    </>
  );
};

export default EventViewPage;
