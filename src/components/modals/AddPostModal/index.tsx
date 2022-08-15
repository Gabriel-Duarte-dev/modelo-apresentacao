import {
  Box,
  Button,
  Center,
  FormLabel,
  HStack,
  IconButton,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { BsImage } from "react-icons/bs";
import { useContext, useState } from "react";
import { Content } from "../../../Interfaces/blog";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdTrash, IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import MainContext from "../../../context";
import { Textfield } from "../../Textfield";
import { Textarea } from "../../Textarea";

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
  const { addPost } = useContext(MainContext);

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

  const changePosition = (from: number, to: number) => {
    content.splice(to, 0, content.splice(from, 1)[0]);
  };

  const handleAddPost = () => {
    addPost({
      id: Math.random().toString().replace("0.", ""),
      createdAt: new Date(),
      title,
      content,
      image: imgFile,
    });

    handleCloseModal();
  };

  const handleCloseModal = () => {
    setContent([
      {
        subtitle: "",
        paragraph: "",
      },
    ]);

    setImgFile(null);

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} scrollBehavior="outside" size={{ base: "full", md: "md" }}>
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
            mb={4}>
            {imgFile ? <Img src={imgFile} w="100%" h="100%" objectFit="cover" /> : <BsImage size="40px" color="#999" />}
            <input id="inputFile" type="file" hidden onChange={handleFileInputChange} />
          </FormLabel>
          <Textfield
            type="text"
            placeholder="Título do post"
            variant="flushed"
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
                    if (content.length > 1) setContent(content.filter((val, pos) => pos != index));
                  }}>
                  <IoMdTrash color="#888" size="18px" cursor="pointer" />
                </Box>
                <Textfield
                  type="text"
                  placeholder="Subtítulo (opcional)"
                  variant="flushed"
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
                  mb={2}
                  onChange={(e) => {
                    const newContent = [...content];
                    content[index].paragraph = e.target.value;
                    setContent(newContent);
                  }}
                  value={value.paragraph}
                />
                <HStack mb={4}>
                  <IoMdArrowDropup size="20px" cursor="pointer" color="#777" onClick={() => changePosition(index, index - 1)} />
                  <IoMdArrowDropdown size="20px" cursor="pointer" color="#777" onClick={() => changePosition(index, index + 1)} />
                </HStack>
              </Box>
            ))}
          </Box>
          <Center w="100%">
            <IconButton aria-label="Button add content" icon={<AiOutlinePlus />} onClick={addContent} />
          </Center>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" colorScheme="gray" color="gray.500" mr={2} onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button
            color="white"
            bg="aqua.primary"
            _hover={{ bg: "aqua.primary-md" }}
            _active={{ bg: "aqua.secondary" }}
            onClick={handleAddPost}>
            Adicionar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
