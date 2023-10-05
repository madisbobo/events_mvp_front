import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import EventInfo from "../components/EventInfo";
import EventRegistrationForm from "../components/EventRegistrationForm";
import { useParams } from "react-router-dom";

const EventViewPage = () => {
  const params = useParams();
  const eventId = parseFloat(params.id ?? "0");

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
          <EventInfo eventId = {eventId}/>
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
        <EventRegistrationForm eventId={eventId} />
      </Box>
    </>
  );
};

export default EventViewPage;
