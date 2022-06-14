import {
  Text,
  Box,
  Flex,
  Center,
  Img,
  Heading,
  Link,
  Button,
} from "@chakra-ui/react";
import { Carousel } from "../../components/Carousel";
import { FormContact } from "../../components/FormContact";
import { Header } from "../../components/Header";

import pepleoImg from "../../../images/pessoa.png";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const images = [
  "paisagem de uma praia com rochas",
  "paisagem de uma praia com rochas",
  "paisagem de uma praia com rochas",
];

export function Home() {
  const navigate = useNavigate();
  return (
    <Box w="100%" h="100%">
      <Header />
      <Box as="section" w="100%" h="calc(100% - 100px)" mt="100px">
        <Carousel images={images} src="../../../images/" />
      </Box>
      <Box as="main" w="100%">
        <Flex
          as="section"
          direction={{ base: "column", lg: "row" }}
          w="100%"
          h={{ base: "auto", lg: "670px" }}
          bg="white"
        >
          <Box
            bg="white"
            w={{ base: "100%", lg: "40%" }}
            h={{ base: "auto", lg: "100%" }}
            pos="relative"
            zIndex={1}
          >
            <Text
              fontWeight="light"
              fontSize={{ base: 22, lg: 24 }}
              color="gray.700"
              mt={8}
              ml={{ base: 3, lg: 10 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue, dui non posuere imperdiet, odio nulla convallis quam, ac
              venenatis diam neque ut erat. Vestibulum suscipit varius urna ut
              dignissim. Duis vitae pharetra sem, vel dapibus lectus.
            </Text>

            <Box
              pos={{ base: "static", lg: "absolute" }}
              bottom={0}
              mt={{ base: 10, lg: 0 }}
            >
              <Img src={pepleoImg} alt="pessoa em pé sorrindo" />
            </Box>
          </Box>

          <Flex
            bg="aqua.secondary"
            w={{ base: "100%", lg: "60%" }}
            h={{ base: "auto", lg: "100%" }}
            clipPath={{
              base: "none",
              lg: "polygon(36% 0, 100% 0%, 100% 100%, 0 100%)",
            }}
            align="center"
            justify={{ base: "center", lg: "flex-end" }}
            p={{ base: 6, lg: 0 }}
            zIndex={0}
          >
            <FormContact />
          </Flex>
        </Flex>

        <Center as="section" w="100%" mt={20} pos="relative">
          <Flex
            direction="column"
            w="100%"
            maxW="1070px"
            align="center"
            pos="relative"
          >
            <Flex
              direction="column"
              alignSelf={{ base: "center", lg: "flex-start" }}
            >
              <Heading color="aqua.secondary" fontWeight="bold" mb="4px">
                Lorem ipsum
              </Heading>
              <Box as="span" w="70%" h="3px" bg="aqua.secondary" />
            </Flex>

            <Flex
              maxW="1070px"
              justify={{ base: "center", xl: "space-between" }}
              wrap="wrap"
              gap={8}
              mt="40px"
            >
              {images.map((img, index) => (
                <Card
                  key={index}
                  src={`../../../images/img${index + 1}.jpg`}
                  alt={img}
                  pos={index}
                />
              ))}
            </Flex>
            <Flex
              maxW="1070px"
              justify={{ base: "center", xl: "space-between" }}
              wrap="wrap"
              gap={8}
              mt={8}
            >
              {images.map((img, index) => (
                <Card
                  key={index}
                  src={`../../../images/img${index + 1}.jpg`}
                  alt={img}
                  pos={index}
                />
              ))}
            </Flex>
            <Button
              variant="outline"
              borderColor="aqua.primary"
              color="aqua.primary"
              mt={8}
              mb={12}
              onClick={() => navigate("/services")}
            >
              VER MAIS
            </Button>
          </Flex>
        </Center>
      </Box>
      <Footer />
    </Box>
  );
}
