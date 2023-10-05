import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import EventInfo from "../components/EventInfo";
import EventRegistrationForm from "../components/EventRegistrationForm";
import { useParams } from "react-router-dom";
import useEvent from "../hooks/useEvent";

const EventViewPage = () => {
  const params = useParams();
  const eventId = parseFloat(params.id ?? "0");
  const { data: eventData, error, isLoading } = useEvent(eventId);
  

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Text>Loading...</Text>;

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
          <EventInfo eventData={eventData} />
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
        <EventRegistrationForm eventId={eventData.id} capacity={eventData.capacity}/>
      </Box>
    </>
  );
};

export default EventViewPage;
