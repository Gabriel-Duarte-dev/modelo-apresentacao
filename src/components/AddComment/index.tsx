import { Box, Button, Flex, IconButton, Img, Text, Textarea } from "@chakra-ui/react";
import { useFirebaseAuth } from "../../context/firebase";
import { IoIosSend } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";

import img4 from "../../../images/img4.jpg";
import { useState } from "react";

interface AddCommentProps {
  addComment: (user: string, userImg: string, comment: string) => void;
}

export function AddComment({ addComment }: AddCommentProps) {
  const { googleSignIn, googleSignOut, googleUser, signed } = useFirebaseAuth();
  const [comment, setComment] = useState("");

  const handleSubmitComment = () => {
    if (googleUser?.displayName && googleUser.photoURL && !!comment) {
      addComment(googleUser?.displayName, googleUser?.photoURL, comment);
      setComment("");
    }
  };

  return (
    <Flex w="100%" align="flex-start" mb={10} mt={40}>
      <Box w="150px" h="150px" borderRadius="full" mr="15px">
        <Img src={googleUser?.photoURL ?? img4} w="100%" h="100%" borderRadius="full" />
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
          focusBorderColor="aqua.primary"
          padding={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Flex alignSelf="flex-end" alignItems="center" mt={4}>
          <Button
            order={1}
            rightIcon={<IoIosSend size="24px" />}
            bg="aqua.primary"
            _hover={{ bg: "aqua.primary-md" }}
            _active={{ border: "none", bg: "aqua.secondary" }}
            color="white"
            w="150px"
            fontSize={18}
            ml={4}
            onClick={() => (signed ? handleSubmitComment() : googleSignIn())}>
            Publicar
          </Button>
          {signed && (
            <IconButton
              aria-label="Google SignOut"
              icon={<FaSignOutAlt />}
              order={0}
              bg="white"
              _hover={{ bg: "" }}
              color="#db4a39"
              boxShadow="md"
              fontSize={18}
              onClick={googleSignOut}
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
