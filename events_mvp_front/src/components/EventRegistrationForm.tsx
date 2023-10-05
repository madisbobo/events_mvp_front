import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useAddRegistration from "../hooks/useAddRegistration";
import useRegistrationsCount from "../hooks/useRegistrationsCount";

interface Props {
  eventId: number;
  capacity: number;
}

const EventRegistrationForm = ({ eventId, capacity }: Props) => {
  const { handleSubmit, register, reset } = useForm();
  const addRegistration = useAddRegistration(eventId);
  const { data: totalRegistrations } = useRegistrationsCount(eventId);
  const toast = useToast();

  const registrationCount = totalRegistrations?.registrationCount || 0;

  const onSubmit = (data: any) => {
    addRegistration.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Registreerimine õnnestus.",
          description: "Oled edukalt sündmusele registreeritud.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        reset();
      },
      onError: (err) => {
        toast({
          title: "Registreerimine ebaõnnestus.",
          description: err.response.data.message, // Kuva siia backist tulev teade
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
    });
  };

  if (capacity <= registrationCount)
    return <Text my={10}>Antud sündmusele vabu kohti ei ole.</Text>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <SimpleGrid columns={2} spacingY={10} spacingX={10} my={10}>
          <Stack w={"80%"}>
            <FormLabel>Eesnimi *</FormLabel>
            <Input isRequired={true} {...register("firstName")} />
          </Stack>
          <Stack w={"80%"}>
            <FormLabel>Perekonnanimi *</FormLabel>
            <Input isRequired={true} {...register("lastName")} />
          </Stack>
          <Stack w={"80%"}>
            <FormLabel>Isikukood *</FormLabel>
            <Input
              isRequired={true}
              pattern="[0-9]{11}"
              title="Sisesta isikukood (11 numbrit)"
              {...register("personalId")}
            />
          </Stack>
          <Stack w={"40%"} gridColumn={1} my={5}>
            <Button
              type="submit"
              colorScheme="teal"
              isDisabled={addRegistration.isLoading}
            >
              {addRegistration.isLoading ? "Registreerin..." : "Registreeri"}
            </Button>
          </Stack>
        </SimpleGrid>
      </FormControl>
    </form>
  );
};

export default EventRegistrationForm;
