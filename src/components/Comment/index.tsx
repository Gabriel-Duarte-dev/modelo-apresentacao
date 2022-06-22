import { Box, Flex, Img, Text } from "@chakra-ui/react";

interface CommentProps {
  userImg: string;
  comment: string;
  date: Date;
}

export function Comment({ userImg, comment, date }: CommentProps) {
  return (
    <Flex w="100%" align="flex-start" mb={10}>
      <Box w="100px" h="90px" borderRadius="full" mr="15px">
        <Img src={userImg} w="100%" h="100%" borderRadius="full" />
      </Box>
      <Flex direction="column" w="100%">
        <Box w="calc(100% - 100px)" minH="90px" bg="white" p={4} mb={1} borderRadius={8}>
          <Text fontWeight="light" fontSize={14}>
            {comment}
          </Text>
        </Box>
        <Text fontWeight="light" fontSize={12} color="gray.500">
          {new Date(date).toLocaleDateString()} - {new Date(date).toLocaleTimeString()}
        </Text>
      </Flex>
    </Flex>
  );
}
