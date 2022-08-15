import {
  AspectRatio,
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import MainContext from "../../../context";
import { HomeContent } from "../../../Interfaces/home";

interface EditCarouselModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EditCarouselModal({ isOpen, onClose }: EditCarouselModalProps) {
  const { homeContent, editImageInCarousel } = useContext(MainContext);
  const [previewImage, setPreviewImage] = useState<any[]>(homeContent.carouselImages);

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

  const handleFileInputChange = (e: any, pos?: number) => {
    let file = e.target.files[0];

    getBase64(file).then((result) => {
      if (pos != undefined) editPreviewImage(pos, result);
      else setPreviewImage([...previewImage, result]);
    });
  };

  const editPreviewImage = (pos: number, image: any) => {
    previewImage.splice(pos, 1, image);
    setPreviewImage([...previewImage]);
  };

  const deletePreviewImage = (pos: number) => {
    previewImage.splice(pos, 1);
    setPreviewImage([...previewImage]);
  };

  const saveNewCarousel = () => {
    editImageInCarousel(previewImage);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="aqua.secondary" textTransform="uppercase">
          Alterar Carrosel
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack w="100%" spacing={4}>
            {previewImage.map((img, index) => (
              <Box key={index} w="100%">
                <HStack mb={1} justify="flex-end">
                  <IconButton
                    aria-label=""
                    icon={<MdModeEditOutline size="18px" />}
                    size="xs"
                    bg="none"
                    color="gray.500"
                    onClick={() => document.getElementById(`img${index}`)?.click()}
                  />
                  <input id={`img${index}`} type="file" hidden onChange={(e) => handleFileInputChange(e, index)} />
                  <IconButton
                    aria-label=""
                    icon={<IoMdTrash size="18px" />}
                    size="xs"
                    bg="none"
                    color="red"
                    disabled={previewImage.length <= 3 ? true : false}
                    onClick={() => deletePreviewImage(index)}
                  />
                </HStack>
                <AspectRatio ratio={16 / 9} w="100%">
                  <Img src={img} alt="" objectFit="cover" w="100%" h="100%" />
                </AspectRatio>
              </Box>
            ))}

            <IconButton
              aria-label="Button add content"
              icon={<AiOutlinePlus />}
              onClick={() => document.getElementById("addImg")?.click()}
            />
            <input id="addImg" type="file" hidden onChange={handleFileInputChange} />
          </VStack>
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
            onClick={saveNewCarousel}>
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
