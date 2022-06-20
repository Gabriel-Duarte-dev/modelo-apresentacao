import { Button, Flex, FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";

export function FormContact() {
  return (
    <Flex as="article" bg="white" direction="column" align="center" p={4} w="350px" borderRadius={4} mr={{ base: 0, lg: "40px" }}>
      <Heading color="aqua.secondary" fontWeight="medium" fontSize={24} mb={8}>
        Entre em contato
      </Heading>

      <form style={{ width: "90%" }}>
        <FormControl isRequired mb={6}>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input id="name" name="name" type="text" placeholder="Nome..." borderColor="gray.300" focusBorderColor="aqua.primary" />
        </FormControl>

        <FormControl isRequired mb={6}>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail..."
            borderColor="gray.300"
            focusBorderColor="aqua.primary"
          />
        </FormControl>

        <FormControl isRequired mb={6}>
          <FormLabel htmlFor="phone">Telefone</FormLabel>
          <Input
            id="phone"
            name="phone"
            type="number"
            placeholder="Telefone..."
            borderColor="gray.300"
            focusBorderColor="aqua.primary"
          />
        </FormControl>

        <FormControl mb={6}>
          <FormLabel htmlFor="mensagem">Deixe sua mensagem</FormLabel>
          <Textarea
            isRequired
            id="mensagem"
            name="msg"
            placeholder="Deixe sua mensagem..."
            borderColor="gray.300"
            focusBorderColor="aqua.primary"
            resize="none"
          />
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
