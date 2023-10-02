import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const EventRegistrationForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
              type="number"
              isRequired={true}
              {...register("personalId")}
            />
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

export default EventRegistrationForm;
