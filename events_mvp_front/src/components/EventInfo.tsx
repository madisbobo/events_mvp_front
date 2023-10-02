import { HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import imagePlaceholder from "../assets/imagePlaceholder.png";
import useEvent from "../hooks/useEvent";
import { useParams } from "react-router-dom";

const EventInfo = () => {
  const params = useParams();
  const { data, error, isLoading } = useEvent(parseFloat(params.id ?? "0"));

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Text>Loading...</Text>;

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
        <Heading>{data?.name}</Heading>
        <Stack spacing="3">
          <HStack>
            <Text fontWeight={"bold"}>Kuupäev:</Text>
            <Text>{data.startDateTime}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={"bold"}>Kellaaeg:</Text>
            <Text>{data.startDateTime}</Text>
          </HStack>
        </Stack>
        <Stack spacing="3">
          <HStack>
            <Text fontWeight={"bold"}>Toimumiskoht:</Text>
            <Text>{data.locationName}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={"bold"}>Aadress:</Text>
            <Text>{data.locationAddress}</Text>
          </HStack>
        </Stack>
      </Stack>

      <Stack gridColumn={"span 2"}>
        <Heading size={"md"}>Kirjeldus</Heading>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, ut
          reprehenderit eos nulla nesciunt aperiam non sit provident, cumque
          animi doloremque? Natus perspiciatis eius a voluptate numquam ullam
          iure optio.
        </Text>
      </Stack>
    </>
  );
};

export default EventInfo;
