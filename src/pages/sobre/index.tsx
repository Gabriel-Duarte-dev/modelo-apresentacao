import { Flex, Heading, Img, VStack, Text, Input, HStack, Button, useDisclosure, FormLabel } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TbLock, TbLockOpen } from "react-icons/tb";
import MainContext from "../../context";

import missionIcon from "../../../images/missionIcon.svg";
import visionIcon from "../../../images/visionIcon.svg";
import valuesIcon from "../../../images/valuesIcon.svg";
import { Textarea } from "../../components/Textarea";

export function About() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { admin, about, editAbout } = useContext(MainContext);
  const { title, image, description, info } = about;
  const [edit, setEdit] = useState(false);

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
      editAbout({
        title,
        image: result,
        description,
        info,
      });
    });
  };

  return (
    <>
      <Header />
      <Flex direction="column" align="center" w="100%" h="100%">
        {admin && (
          <Button
            variant="outline"
            color="aqua.primary"
            borderColor="aqua.primary"
            pos="absolute"
            top="120px"
            rightIcon={edit ? <TbLockOpen /> : <TbLock />}
            onClick={() => setEdit(!edit)}>
            Editar
          </Button>
        )}
        <VStack align="flex-start" w={{ base: "95%", lg: "100%" }} maxW="900px" mt="180px">
          {edit ? (
            <Input
              value={title}
              color="aqua.secondary"
              fontSize="36px"
              fontWeight="bold"
              mb="8px"
              onChange={(e) =>
                editAbout({
                  title: e.target.value,
                  image,
                  description,
                  info,
                })
              }
            />
          ) : (
            <Heading color="aqua.secondary" fontWeight="bold" mb="8px">
              {title}
            </Heading>
          )}
          <FormLabel
            as="label"
            w="100%"
            h="400px"
            htmlFor="inputImgAbout"
            cursor="pointer"
            border={edit ? "1px dashed #999" : 0}
            p="1px">
            <Img src={image} w="100%" h="100%" borderRadius={4} />
            <input id="inputImgAbout" type="file" hidden disabled={!edit} onChange={handleFileInputChange} />
          </FormLabel>
          {edit ? (
            <Textarea
              value={description}
              fontWeight="light"
              fontSize={16}
              minH="200px"
              onChange={(e) =>
                editAbout({
                  title,
                  image,
                  description: e.target.value,
                  info,
                })
              }
            />
          ) : (
            <Text fontWeight="light" fontSize={16}>
              {description}
            </Text>
          )}
        </VStack>

        <Flex w="100%" justify="center" gap={10} wrap="wrap" mt={20} mb={20}>
          {Object.entries(info).map(([key, value], index) => (
            <Flex key={index} direction="column" align="center" maxW="350px">
              <Img src={key == "MISSÃO" ? missionIcon : key == "VISÃO" ? visionIcon : valuesIcon} />
              <Text color="aqua.secondary" fontWeight="bold" fontSize={22}>
                {key}
              </Text>
              {edit ? (
                <Textarea
                  value={value}
                  fontWeight="light"
                  minW="320px"
                  minH="170px"
                  onChange={(e) =>
                    editAbout({
                      title,
                      image,
                      description,
                      info: { ...info, [key]: e.target.value },
                    })
                  }
                />
              ) : (
                <Text fontWeight="light">{value}</Text>
              )}
            </Flex>
          ))}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
