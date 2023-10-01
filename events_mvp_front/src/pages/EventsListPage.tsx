import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useEvents from "../hooks/useEvents";
import EventCard from "../components/EventCard";

const EventsListPage = () => {
  const { data: events, isLoading, error } = useEvents();

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <Heading>Kõik sündmused:</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading && <Text>Loading...</Text>}
        {events?.map((event) => (
          <EventCard event={event} key={event.id}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default EventsListPage;
