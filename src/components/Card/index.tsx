import { Box, Flex, Img, Text } from "@chakra-ui/react";

type CardProps = {
  src: string;
  alt: string;
  pos: number;
};

export function Card({ src, alt, pos }: CardProps) {
  return (
    <Flex direction="column" w="330px" boxShadow="lg">
      <Box
        w="100%"
        h="330px"
        borderTopLeftRadius={7}
        borderTopRightRadius={7}
        pos="relative"
        overflow="hidden"
      >
        <Img
          src={src}
          alt={alt}
          w="100%"
          h="100%"
          objectFit="cover"
          borderTopLeftRadius={7}
          borderTopRightRadius={7}
          pos="absolute"
          top={0}
          left={0}
          transition="0.3s"
          cursor="pointer"
          _hover={{ transform: "scale(1.1)" }}
        />
      </Box>
      <Flex
        align="center"
        h="160px"
        borderBottomLeftRadius={7}
        borderBottomRightRadius={7}
        pos="relative"
        pl={6}
        pr={6}
      >
        <Text fontWeight="light" fontSize={14}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue,
          dui non posuere imperdiet, odio nulla convallis quam, ac venenatis
          diam neque ut erat. Vestibulum suscipit varius urna ut dignissim.
        </Text>

        <Box w="2px" h="70px" bg="#0CABA8" pos="absolute" bottom={3} left={3} />
        <Box w="70px" h="2px" bg="#0CABA8" pos="absolute" bottom={3} left={3} />
      </Flex>
    </Flex>
  );
}
