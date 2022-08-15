import { Box, Flex, Heading, Img, VStack, Text, Button, useMediaQuery, FormLabel } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

import MainContext from "../../context";
import { Textfield } from "../Textfield";
import { Textarea } from "../Textarea";

interface ServiceDetailsProps {
  img: any;
  title: string;
  description: string;
  pos: number;
  edit: boolean;
}

export function ServiceDetails({ img, title, description, pos, edit }: ServiceDetailsProps) {
  const [mdScreen] = useMediaQuery("(max-width: 991px)");
  const [smScreen] = useMediaQuery("(max-width: 550px)");
  const navigate = useNavigate();
  const { editService, changeServicePosition } = useContext(MainContext);

  const pair = () => {
    if (pos % 2 == 0) return true;
    return false;
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
    const file = e.target.files[0];

    getBase64(file).then((result) => {
      editService(pos, { image: result, title, description });
    });
  };

  return (
    <Flex
      direction="column"
      align="center"
      h={{ base: "auto", lg: "400px" }}
      mb={{ base: "250px", lg: "150px" }}
      border={edit ? "1px dashed #999" : "none"}
      p={edit ? "10px" : "0px"}
      pos="relative">
      {edit && (
        <>
          <Box
            pos="absolute"
            right={!smScreen ? -7 : "none"}
            left={smScreen ? 0 : "none"}
            top={!smScreen ? 0 : "none"}
            bottom={smScreen ? -10 : "none"}>
            <IoMdArrowDropup size="32px" cursor="pointer" color="#777" onClick={() => changeServicePosition(pos, pos - 1)} />
          </Box>
          <Box pos="absolute" right={!smScreen ? -7 : "none"} left={smScreen ? 7 : "none"} bottom={smScreen ? -10 : 0}>
            <IoMdArrowDropdown size="32px" cursor="pointer" color="#777" onClick={() => changeServicePosition(pos, pos + 1)} />
          </Box>
        </>
      )}
      <Flex direction="column" w={{ base: "95%", lg: "100%" }}>
        <Flex
          alignSelf={{ base: "flex-start", lg: !pair() ? "flex-end" : "flex-start" }}
          direction="column"
          mb="12px"
          w="fit-content">
          {edit ? (
            <Textfield
              value={title}
              color="aqua.secondary"
              fontSize="36px"
              fontWeight="bold"
              mb="4px"
              p={0}
              onChange={(e) => editService(pos, { image: img, title: e.target.value, description })}
            />
          ) : (
            <>
              <Heading color="aqua.secondary" fontWeight="bold" mb="4px">
                {title}
              </Heading>
              <Box as="span" w="70%" h="3px" bg="aqua.secondary" />
            </>
          )}
        </Flex>
      </Flex>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "flex-start" }}
        w={{ base: "100%", lg: "auto" }}>
        <Box
          w={{ base: "95%", lg: "450px" }}
          mr={{ base: 0, lg: !pair() ? 0 : 6 }}
          ml={{ base: 0, lg: !pair() ? 6 : 0 }}
          order={{ base: 0, lg: !pair() ? 1 : 0 }}>
          <FormLabel as="label" w="100%" htmlFor={`inputFile${pos}`} cursor="pointer">
            <ParallaxBanner
              style={{
                width: "100%",
                height: "307px",
                borderRadius: 4,
                boxShadow: mdScreen ? "4px 4px 4px 0 rgba(0,0,0,0.3)" : `${!pair() ? "-4px" : "4px"} 4px 4px 0 rgba(0,0,0,0.3)`,
              }}
              layers={[{ image: img, speed: 20 }]}
              className="aspect-[2/1]"
            />
            <input id={`inputFile${pos}`} type="file" hidden disabled={!edit} onChange={handleFileInputChange} />
          </FormLabel>
        </Box>
        <Flex
          direction="column"
          align="flex-start"
          justify="space-between"
          textAlign="left"
          w={{ base: "95%", lg: "450px" }}
          h="100%"
          mt={{ base: 4, lg: 0 }}
          wordBreak="break-word">
          {edit ? (
            <Textarea
              maxLength={870}
              value={description}
              fontSize={14}
              fontWeight="light"
              h={{ base: "auto", lg: "100%" }}
              mb="10px"
              p={0}
              resize="none"
              onChange={(e) => editService(pos, { image: img, title, description: e.target.value })}
            />
          ) : (
            <Text fontSize={14} fontWeight="light" h={{ base: "auto", lg: "100%" }} mb="10px">
              {description}
            </Text>
          )}
          <Button
            rightIcon={<BsArrowRight />}
            variant="outline"
            borderColor="aqua.primary"
            color="aqua.primary"
            onClick={() => navigate("/contact")}>
            CONTRATAR
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
