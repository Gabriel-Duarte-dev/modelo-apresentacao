import { Text, Box, Flex, Center, Img, Heading } from "@chakra-ui/react";
import { Carousel } from "../../components/Carousel";
import { FormContact } from "../../components/FormContact";
import { Header } from "../../components/Header";

import pepleoImg from "../../../images/pessoa.png";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

const images = [
  "paisagem de uma praia com rochas",
  "paisagem de uma praia com rochas",
  "paisagem de uma praia com rochas",
];

export function Home() {
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
            bg="#008F8C"
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

        <Flex
          as="section"
          w="100%"
          mt={20}
          pos="relative"
          direction="column"
          align="center"
        >
          <Flex
            direction="column"
            ml={10}
            pos="absolute"
            alignSelf="flex-start"
          >
            <Heading color="#008F8C" fontWeight="bold" mb="4px">
              Lorem ipsum
            </Heading>
            <Box as="span" w="70%" h="3px" bg="#008F8C" />
          </Flex>

          <Flex
            maxW="1070px"
            justify={{ base: "center", lg: "space-between" }}
            wrap="wrap"
            gap={8}
            mt={40}
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
            justify={{ base: "center", lg: "space-between" }}
            wrap="wrap"
            gap={8}
            mt={8}
            mb={12}
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
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
}
