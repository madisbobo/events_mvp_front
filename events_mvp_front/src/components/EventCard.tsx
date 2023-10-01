import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Event from "../entities/Event";

interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image objectFit="cover" src="#" alt="Chakra UI" />
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Stack spacing="3">
          <HStack justifyContent="space-between" mb={1}></HStack>
          <Heading size="md" mb={1}>
            {event.name}
          </Heading>
          <Text color="gray.500">{event.locationName}</Text>
          <Text color="gray.500">{event.startDateTime}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default EventCard;
