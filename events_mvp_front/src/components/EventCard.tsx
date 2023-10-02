import {
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import EventPreview from "../entities/EventPreview";
import imagePlaceholder from "../assets/imagePlaceholder.png";
import { FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface Props {
  event: EventPreview;
}

const EventCard = ({ event }: Props) => {
  const navigate = useNavigate();

  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      maxW="400px"
      p="15px"
      _hover={{ cursor: "pointer" }}
      onClick={() => navigate(`/events/${event.id}`)}
    >
      <Image
        objectFit="contain"
        h="270px"
        src={imagePlaceholder}
        alt="posterImage"
      />
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Stack spacing="3">
          <HStack justifyContent="space-between" mb={1}></HStack>
          <Heading size="md" mb={1} height="55px">
            {event.name}
          </Heading>
          <Flex align="center">
            <FaRegCalendarDays />
            <Text ml={2}>{event.locationName}</Text>
          </Flex>
          <Flex align="center">
            <FaLocationDot />
            <Text ml={2}>{event.startDateTime}</Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default EventCard;
