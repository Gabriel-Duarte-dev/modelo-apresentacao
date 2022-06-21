import { Box, Button, Flex, Img, Text, Textarea } from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";

import img4 from "../../../images/img4.jpg";
import { useFirebaseAuth } from "../../context/firebase";

export function AddComment() {
  const { googleSignIn, googleUser, isLoading } = useFirebaseAuth();
  return (
    <Flex w="100%" align="flex-start" mb={10}>
      <Box w="150px" h="150px" borderRadius="full" mr="15px">
        <Img src={img4} w="100%" h="100%" borderRadius="full" />
      </Box>

      <Flex direction="column" w="calc(100% - 150px)">
        <Textarea
          placeholder="Adicionar comentário..."
          w="100%"
          minH="150px"
          bg="white"
          borderColor="transparent"
          fontWeight="light"
          fontSize={14}
          padding={8}
          focusBorderColor="aqua.primary"
        />
        <Button
          rightIcon={<IoIosSend size="24px" />}
          alignSelf="flex-end"
          mt={4}
          bg="aqua.primary"
          _hover={{ bg: "aqua.primary-md" }}
          _active={{ border: "none", bg: "aqua.secondary" }}
          color="white"
          w="150px"
          fontSize={18}
          onClick={() => googleSignIn()}>
          Publicar
        </Button>
      </Flex>
    </Flex>
  );
}
