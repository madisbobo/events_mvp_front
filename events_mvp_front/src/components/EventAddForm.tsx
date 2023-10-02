import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const EventAddForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <SimpleGrid columns={2} spacingY={10} spacingX={10} my={10}>
          <Stack>
            <FormLabel>Ürituse nimi *</FormLabel>
            <Input isRequired={true} {...register("firstName")} />
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
            <Button type="submit" colorScheme="teal">
              Registreeri
            </Button>
          </Stack>
        </SimpleGrid>
      </FormControl>
    </form>
  );
};

export default EventAddForm;
