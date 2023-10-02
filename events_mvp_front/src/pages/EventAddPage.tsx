import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
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
        <SimpleGrid columns={2} spacingY={10} spacingX={10} my={50}>
          <Heading size={"md"} gridColumn={"span 2"}>
            Lisa sündmus:
          </Heading>
          <EventAddForm />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default EventAddPage;
