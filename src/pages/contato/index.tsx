import { Button, Center, Flex, FormControl, FormLabel, Heading, Img, Input, Textarea } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import pessoa2 from "../../../images/pessoa2.png";

export function Contact() {
  return (
    <>
      <Header />
      <Flex
        align="center"
        justify="center"
        w="100%"
        h="100vh"
        bg="linear-gradient(to right top, #023535, #045555, #067877, #0a9c9b, #0fc2c0);">
        <Flex w="100%" maxW="514px" m={{ base: "0 20px", lg: 0 }}>
          <form>
            <Flex w="100%" align="center" justify="center" gap="14px" wrap="wrap">
              <Heading color="white">Entre em contato</Heading>
              <FormControl isRequired w={{ base: "100%", sm: "calc(50% - 14px)" }} color="white">
                <FormLabel htmlFor="name" fontWeight="light">
                  Nome
                </FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nome..."
                  _placeholder={{ color: "gray.300" }}
                  borderColor="white"
                  focusBorderColor="aqua.primary"
                />
              </FormControl>
              <FormControl isRequired w={{ base: "100%", sm: "50%" }} color="white">
                <FormLabel htmlFor="tel" fontWeight="light">
                  Telefone
                </FormLabel>
                <Input
                  id="tel"
                  name="tel"
                  type="number"
                  placeholder="Telefone..."
                  _placeholder={{ color: "gray.300" }}
                  borderColor="white"
                  focusBorderColor="aqua.primary"
                />
              </FormControl>
            </Flex>
            <FormControl isRequired m="14px 0" color="white">
              <FormLabel htmlFor="email" fontWeight="light">
                E-mail
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail..."
                _placeholder={{ color: "gray.300" }}
                borderColor="white"
                focusBorderColor="aqua.primary"
              />
            </FormControl>
            <FormControl isRequired color="white">
              <FormLabel htmlFor="mensagem" fontWeight="light">
                Deixe sua mensagem
              </FormLabel>
              <Textarea
                id="mensagem"
                name="mensagem"
                placeholder="Deixe sua mensagem..."
                _placeholder={{ color: "gray.300" }}
                focusBorderColor="aqua.primary"
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
                ringOffsetColor: "aqua.strong-md",
                ringColor: "aqua.primary-md",
              }}
              color="white"
              mt="14px"
              type="submit">
              ENVIAR
            </Button>
          </form>
        </Flex>

        <Img src={pessoa2} ml="-80px" display={{ base: "none", lg: "inherit" }} />
      </Flex>
      <Footer />
    </>
  );
}
