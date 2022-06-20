import { Box, Flex, Img, Text } from "@chakra-ui/react";

import img4 from "../../../images/img4.jpg";

export function Comment() {
  return (
    <Flex w="100%" align="flex-start" mb={10}>
      <Box w="150px" h="150px" borderRadius="full" mr="15px">
        <Img src={img4} w="100%" h="100%" borderRadius="full" />
      </Box>
      <Box w="calc(100% - 150px)" minH="150px" bg="white" p={8} borderRadius={8}>
        <Text fontWeight="light" fontSize={14}>
          Duis lobortis ullamcorper mollis. Aenean accumsan quam eu odio euismod tempus. Morbi commodo
        </Text>
      </Box>
    </Flex>
  );
}
