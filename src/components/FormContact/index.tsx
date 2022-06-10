import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";

export function FormContact() {
  return (
    <Flex
      as="article"
      bg="white"
      direction="column"
      align="center"
      p={4}
      w="350px"
      borderRadius={4}
      mr={{ base: 0, lg: "40px" }}
    >
      <Heading color="#008F8C" fontWeight="medium" fontSize={24} mb={8}>
        Entre em contato
      </Heading>

      <form style={{ width: "90%" }}>
        <FormControl isRequired mb={6}>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Nome..."
            colorScheme="cyan"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl isRequired mb={6}>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail..."
            colorScheme="cyan"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl isRequired mb={6}>
          <FormLabel htmlFor="phone">Telefone</FormLabel>
          <Input
            id="phone"
            name="phone"
            type="number"
            placeholder="Telefone..."
            colorScheme="cyan"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl mb={6}>
          <FormLabel htmlFor="mensagem">Deixe sua mensagem</FormLabel>
          <Textarea
            id="mensagem"
            name="msg"
            placeholder="Deixe sua mensagem..."
            colorScheme="cyan"
            borderColor="gray.300"
            resize="none"
          />
        </FormControl>

        <Button
          w="100%"
          bg="#0FC2C0"
          _hover={{ bg: "#0CABA8" }}
          _active={{ border: "none" }}
          _focus={{
            outline: "none",
            ring: "2px",
            ringOffset: "2px",
            ringOffsetColor: "#fff",
            ringColor: "#0CABA8",
          }}
          color="white"
        >
          ENVIAR
        </Button>
      </form>
    </Flex>
  );
}
