import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSignIn } from "../../hooks/useSignIn";

function Login() {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const { onSubmit, isLoading } = useSignIn();

  const onChange = (e: any) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Center w="100vw" h="100vh">
      <Flex w={400} h={500} direction="column" justify="center" align="center" bg="white" boxShadow="lg" borderRadius={7} p={4}>
        <Heading color="#42C2FF" textDecoration="underline" mb={10}>
          LOGIN
        </Heading>

        <form style={{ width: "90%" }} onSubmit={(e) => onSubmit(formFields, e)}>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="E-mail..."
              colorScheme="cyan"
              value={formFields.email}
              onChange={onChange}
            />
          </FormControl>

          <FormControl isRequired mb={8}>
            <FormLabel htmlFor="psw">Senha</FormLabel>
            <Input
              id="psw"
              type="password"
              name="password"
              placeholder="Senha..."
              colorScheme="cyan"
              value={formFields.password}
              onChange={onChange}
            />
          </FormControl>

          <Button w="full" isLoading={isLoading} colorScheme="cyan" color="white" type="submit">
            ENTRAR
          </Button>
        </form>
      </Flex>
    </Center>
  );
}

export default Login;
