import { Box, Flex, Img, Text } from "@chakra-ui/react";

type CardProps = {
  src: string;
  resume: string;
  pos: number;
};

export function Card({ src, resume, pos }: CardProps) {
  return (
    <Flex direction="column" w="330px" boxShadow="lg">
      <Box w="100%" h="330px" borderTopLeftRadius={7} borderTopRightRadius={7} pos="relative" overflow="hidden">
        <Img
          src={src}
          alt="Imagem do serviço"
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
      <Flex align="center" h="160px" borderBottomLeftRadius={7} borderBottomRightRadius={7} pos="relative" pl={6} pr={6}>
        <Text fontWeight="light" fontSize={14}>
          {resume}
        </Text>

        <Box w="2px" h="70px" bg="aqua.primary-md" pos="absolute" bottom={3} left={3} />
        <Box w="70px" h="2px" bg="aqua.primary-md" pos="absolute" bottom={3} left={3} />
      </Flex>
    </Flex>
  );
}
