import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useEvents from "../hooks/useEvents";
import EventCard from "../components/EventCard";

const EventsListPage = () => {
  const { data: events, isLoading, error } = useEvents();

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <Heading mb={7}>Kõik sündmused:</Heading>
      {isLoading && <Text>Loading...</Text>}
      {events?.length === 0 && <Text>Hetkel pole ühtegi sündmust tulemas.</Text>}
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 4, xl: 4 }} spacing={6}>
        {events?.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default EventsListPage;
