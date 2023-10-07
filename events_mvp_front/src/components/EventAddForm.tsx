import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAddEvent from "../hooks/useAddEvent";

const EventAddForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const addEvent = useAddEvent();
  const toast = useToast();

  const onSubmit = (data: any) => {
    const combinedDateTime = new Date(`${data.startDate}T${data.startTime}`);
    data.startDateTime = combinedDateTime.toISOString();
    delete data.startDate;
    delete data.startTime;

    addEvent.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Ürituse lisamine õnnestus.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        navigate("/");
      },
      onError: (err) => {
        toast({
          title: "Ürituse lisamine ebaõnnestus.",
          description: err.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <SimpleGrid columns={2} spacingY={10} spacingX={10} my={10}>
          <Stack>
            <FormLabel>Ürituse nimi *</FormLabel>
            <Input isRequired={true} {...register("name")} />
          </Stack>
          <Stack>
            <FormLabel>Maksimaalne osalejate arv *</FormLabel>
            <Input type="number" isRequired={true} {...register("capacity")} />
          </Stack>
          <Stack>
            <FormLabel>Kuupäev *</FormLabel>
            <Input type="date" isRequired={true} {...register("startDate")} />
          </Stack>
          <Stack>
            <FormLabel>Alguskellaaeg *</FormLabel>
            <Input type="time" isRequired={true} {...register("startTime")} />
          </Stack>
          <Stack>
            <FormLabel>Toimumiskoht *</FormLabel>
            <Input isRequired={true} {...register("locationName")} />
          </Stack>
          <Stack>
            <FormLabel>Aadress *</FormLabel>
            <Input isRequired={true} {...register("locationAddress")} />
          </Stack>
          <Stack gridColumn={"span 2"}>
            <FormLabel>Kirjeldus</FormLabel>
            <Textarea {...register("description")} />
          </Stack>
          <Stack w={"40%"} gridColumn={1} my={5}>
            <Button
              type="submit"
              colorScheme="teal"
              isDisabled={addEvent.isLoading}
            >
              {addEvent.isLoading ? "Salvestan..." : "Salvesta"}
            </Button>
          </Stack>
        </SimpleGrid>
      </FormControl>
    </form>
  );
};

export default EventAddForm;
