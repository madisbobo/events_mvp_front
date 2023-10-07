import { HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import imagePlaceholder from "../assets/imagePlaceholder.png";
import { formatDate, formatTime } from "../services/dateTimeFormatter";
import { Event } from "../entities/Event";

interface Props {
  eventData: Event;
}

const EventInfo = ({ eventData }: Props) => {

  return (
    <>
      <Stack align={"start"}>
        <Image
          objectFit="contain"
          h="350px"
          src={imagePlaceholder}
          alt="posterImage"
        />
      </Stack>
      <Stack spacing="9">
        <Heading>{eventData.name}</Heading>
        <Stack spacing="3">
          <HStack>
            <Text fontWeight={"bold"}>Kuupäev:</Text>
            <Text>{formatDate(eventData.startDateTime)}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={"bold"}>Kellaaeg:</Text>
            <Text>{formatTime(eventData.startDateTime)}</Text>
          </HStack>
        </Stack>
        <Stack spacing="3">
          <HStack>
            <Text fontWeight={"bold"}>Toimumiskoht:</Text>
            <Text>{eventData.locationName}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={"bold"}>Aadress:</Text>
            <Text>{eventData.locationAddress}</Text>
          </HStack>
        </Stack>
      </Stack>

      <Stack gridColumn={"span 2"}>
        <Heading size={"md"}>Kirjeldus</Heading>
        <Text>{eventData.description}</Text>
      </Stack>
    </>
  );
};

export default EventInfo;
