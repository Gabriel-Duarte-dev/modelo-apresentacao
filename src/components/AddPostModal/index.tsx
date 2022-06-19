import {
  Box,
  Button,
  Center,
  FormLabel,
  IconButton,
  Img,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { BsImage } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Content } from "../../services/blog";
import { usePost } from "../../hooks/usePost";
import { usePosts } from "../../hooks/usePosts";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";

interface AddPostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddPostModal({ isOpen, onClose }: AddPostModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<Content[]>([
    {
      subtitle: "",
      paragraph: "",
    },
  ]);
  const [imgFile, setImgFile] = useState<any>();
  const { handleSubmitPost } = usePost();
  const { posts } = usePosts();

  const addContent = () => {
    setContent([...content, {} as Content]);
  };

  const getBase64 = (file: any) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const handleFileInputChange = (e: any) => {
    let file = e.target.files[0];

    getBase64(file).then((result) => {
      setImgFile(result);
    });
  };

  const addPost = async () => {
    handleSubmitPost({
      title,
      content,
      image: imgFile,
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="outside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="aqua.secondary" textTransform="uppercase">
          Novo Post
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormLabel
            htmlFor="inputFile"
            w="100%"
            h="200px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px dashed #999"
            cursor="pointer"
            mb={4}
          >
            {imgFile ? (
              <Img src={imgFile} w="100%" h="100%" objectFit="cover" />
            ) : (
              <BsImage size="40px" color="#999" />
            )}
            <input
              id="inputFile"
              type="file"
              hidden
              onChange={handleFileInputChange}
            />
          </FormLabel>
          <Input
            type="text"
            placeholder="Título do post"
            variant="flushed"
            focusBorderColor="aqua.primary"
            bg="none"
            mb={4}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <Box w="100%">
            {content.map((value, index) => (
              <Box key={index} pos="relative">
                <Box
                  as="span"
                  pos="absolute"
                  top={0}
                  right={0}
                  cursor="pointer"
                  onClick={() => {
                    if (content.length > 1)
                      setContent(content.filter((val, pos) => pos != index));
                  }}
                >
                  <IoMdTrash color="#888" size="18px" cursor="pointer" />
                </Box>
                <Input
                  type="text"
                  placeholder="Subtítulo (opcional)"
                  variant="flushed"
                  focusBorderColor="aqua.primary"
                  bg="none"
                  mb={4}
                  mt="10px"
                  onChange={(e) => {
                    const newContent = [...content];
                    content[index].subtitle = e.target.value;
                    setContent(newContent);
                  }}
                  value={value.subtitle}
                />
                <Textarea
                  placeholder="Parágrafo"
                  focusBorderColor="aqua.primary"
                  mb={4}
                  onChange={(e) => {
                    const newContent = [...content];
                    content[index].paragraph = e.target.value;
                    setContent(newContent);
                  }}
                  value={value.paragraph}
                />
              </Box>
            ))}
          </Box>
          <Center w="100%">
            <IconButton
              aria-label="Button add content"
              icon={<AiOutlinePlus />}
              onClick={addContent}
            />
          </Center>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" colorScheme="gray" mr={2} onClick={onClose}>
            Cancelar
          </Button>
          <Button
            color="white"
            bg="aqua.primary"
            _hover={{ bg: "aqua.primary-md" }}
            _active={{ bg: "aqua.secondary" }}
            onClick={addPost}
          >
            CRIAR
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
