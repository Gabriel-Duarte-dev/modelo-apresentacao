import { Button, Flex, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import { Textarea } from "../Textarea";
import { Textfield } from "../Textfield";

export function FormContact() {
  return (
    <Flex as="article" bg="white" direction="column" align="center" p={4} w="350px" borderRadius={4} mr={{ base: 0, lg: "40px" }}>
      <Heading color="aqua.secondary" fontWeight="medium" fontSize={24} mb={8}>
        Entre em contato
      </Heading>

      <form style={{ width: "90%" }}>
        <FormControl isRequired mb={6}>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Textfield id="name" name="name" type="text" placeholder="Nome..." />
        </FormControl>

        <FormControl isRequired mb={6}>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Textfield id="email" name="email" type="email" placeholder="E-mail..." />
        </FormControl>

        <FormControl isRequired mb={6}>
          <FormLabel htmlFor="phone">Telefone</FormLabel>
          <Textfield id="phone" name="phone" type="number" placeholder="Telefone..." />
        </FormControl>

        <FormControl mb={6}>
          <FormLabel htmlFor="mensagem">Deixe sua mensagem</FormLabel>
          <Textarea isRequired id="mensagem" name="msg" placeholder="Deixe sua mensagem..." resize="none" />
        </FormControl>

        <Button
          w="100%"
          bg="aqua.primary"
          _hover={{ bg: "aqua.primary-md" }}
          _active={{ border: "none" }}
          _focus={{
            outline: "none",
            ring: "2px",
            ringOffset: "2px",
            ringOffsetColor: "#fff",
            ringColor: "aqua.primary-md",
          }}
          color="white"
          type="submit">
          ENVIAR
        </Button>
      </form>
    </Flex>
  );
}
