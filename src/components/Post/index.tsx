import { Box, Button, Flex, Heading, HStack, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiMessage } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface PostProps {
  id: string;
  title: string;
  description: string;
  dateHour: string;
  image: string;
}

export function Post({ id, title, description, dateHour, image }: PostProps) {
  const navigate = useNavigate();
  const MotionFlex = motion(Flex);

  return (
    <MotionFlex
      direction="column"
      width="100%"
      maxW="500px"
      bg="white"
      boxShadow="lg"
      pos="relative"
      layout
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      exit={{ transform: "scale(0)" }}>
      <Box w="100%" h="420px" borderTopRadius={4}>
        <Img src={image} w="100%" h="100%" objectFit="cover" borderTopRadius={4} />
      </Box>
      <Box w="100%" p="16px" borderBottomRadius={4} pos="relative" mb="40px">
        <Heading color="aqua.secondary" mb={4}>
          {title}
        </Heading>
        <Text fontSize={13} fontWeight="light" textOverflow="ellipsis">
          {description.length > 405 ? description.substring(0, 405) + "..." : description}
        </Text>
      </Box>
      <Flex align="center" justify="space-between" w="100%" pos="absolute" bottom="8px" p="0 16px">
        <HStack align="center">
          <Box pos="relative" mr={4}>
            <Text as="span" fontSize={14} ml="5px" color="#7c7c7c" pos="absolute" top="-18px" right="-5px">
              8
            </Text>
            <BiMessage color="#7c7c7c" size="24px" />
          </Box>
          <Text fontWeight="light" fontSize={14} color="#7c7c7c">
            {dateHour.split("T")[0].split("-").reverse().join("/")}
          </Text>
        </HStack>
        <Button
          variant="link"
          color="aqua.secondary"
          rightIcon={<BsArrowRight />}
          size="sm"
          _active={{ color: "none" }}
          onClick={() => navigate(`/blog/${id}`)}>
          Ver mais
        </Button>
      </Flex>
    </MotionFlex>
  );
}
