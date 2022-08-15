import {
  AspectRatio,
  Box,
  Button,
  Flex,
  FormLabel,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { BsImage, BsArrowRight } from "react-icons/bs";
import MainContext from "../../../context";
import { Textarea } from "../../Textarea";
import { Textfield } from "../../Textfield";

interface AddServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddServiceModal({ isOpen, onClose }: AddServiceModalProps) {
  const toast = useToast();
  const { addService } = useContext(MainContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgFile, setImgFile] = useState<any>();

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
    const file = e.target.files[0];

    getBase64(file).then((result) => {
      setImgFile(result);
    });
  };

  const handleAddService = () => {
    if (!!title && !!description && !!imgFile) {
      addService({
        image: imgFile,
        title,
        description,
      });
      onClose();
    } else {
      toast({
        description: "Preencha todos os campos por favor!",
        status: "warning",
        duration: 2500,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="outside" size={{ base: "full", md: "xl" }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="aqua.secondary" textTransform="uppercase">
          Novo Serviço
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column" align="center" h={{ base: "auto", lg: "200px" }}>
            <Box w="100%">
              <Box mb="12px" w="fit-content">
                <Textfield
                  placeholder="Título..."
                  _placeholder={{ color: "gray.500", fontWeight: "light" }}
                  color="aqua.secondary"
                  fontSize="20px"
                  fontWeight="bold"
                  mb="4px"
                  size="sm"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Box>
            </Box>
            <Flex
              direction={{ base: "column", lg: "row" }}
              align={{ base: "center", lg: "flex-start" }}
              w={{ base: "100%", lg: "auto" }}>
              <AspectRatio w={{ base: "95%", lg: "250px" }} ratio={16 / 9} mr={6}>
                <FormLabel as="label" w="100%" htmlFor="inputImg" cursor="pointer" border="1px dashed #999" borderRadius={4}>
                  {imgFile ? (
                    <Img src={imgFile} w="100%" h="207px" objectFit="cover" borderRadius={4} />
                  ) : (
                    <BsImage size="40px" color="#999" />
                  )}
                  <input id="inputImg" type="file" hidden onChange={handleFileInputChange} />
                </FormLabel>
              </AspectRatio>
              <Flex
                direction="column"
                align="flex-start"
                justify="space-between"
                textAlign="left"
                w={{ base: "100%", lg: "250px" }}
                h="100%"
                mt={{ base: 4, lg: 0 }}>
                <Textarea
                  maxLength={870}
                  placeholder="Descrição..."
                  fontSize={14}
                  fontWeight="light"
                  h={{ base: "auto", lg: "100%" }}
                  mb="10px"
                  resize="none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Button rightIcon={<BsArrowRight />} variant="outline" borderColor="aqua.primary" color="aqua.primary">
                  CONTRATAR
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" colorScheme="gray" color="gray.500" mr={2} onClick={onClose}>
            Cancelar
          </Button>
          <Button
            color="white"
            bg="aqua.primary"
            _hover={{ bg: "aqua.primary-md" }}
            _active={{ bg: "aqua.secondary" }}
            onClick={handleAddService}>
            Adicionar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
