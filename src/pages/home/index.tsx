import { Text, Box, Flex, Center, Img, Heading, Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { Carousel } from "../../components/Carousel";
import { FormContact } from "../../components/FormContact";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FaEdit } from "react-icons/fa";

import MainContext from "../../context";

import pepleoImg from "../../../images/pessoa.png";
import { EditCarouselModal } from "../../components/modals/EditCarouselModal";
import { Textfield } from "../../components/Textfield";
import { Textarea } from "../../components/Textarea";

export function Home() {
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { admin, homeContent, editSectionContact, editSectionServices, services } = useContext(MainContext);
  return (
    <Box w="100%" h="100%">
      <Header />
      <EditCarouselModal isOpen={isOpen} onClose={onClose} />
      <Box as="section" w="100%" h="calc(100% - 100px)" mt="100px" pos="relative">
        {admin && (
          <Center pos="absolute" top={5} right="50%" translateX="-50%" zIndex={2} color="aqua.secondary" borderRadius="full">
            <IconButton aria-label="" icon={<FaEdit size="32px" />} bg="white" onClick={onOpen} />
          </Center>
        )}
        <Carousel images={homeContent.carouselImages} />
      </Box>
      <Box as="main" w="100%">
        <Flex as="section" direction={{ base: "column", lg: "row" }} w="100%" h={{ base: "auto", lg: "670px" }} bg="white">
          <Box bg="white" w={{ base: "100%", lg: "40%" }} h={{ base: "auto", lg: "100%" }} pos="relative" zIndex={1}>
            {admin ? (
              <Textarea
                w={{ base: "calc(100% - 16px)", md: "none" }}
                minH="150px"
                fontWeight="light"
                fontSize={{ base: 22, lg: 24 }}
                color="gray.700"
                mt={8}
                ml={{ base: 3, lg: 10 }}
                value={homeContent.sectionContact.description}
                onChange={(e) => editSectionContact(e.target.value)}
              />
            ) : (
              <Text fontWeight="light" fontSize={{ base: 22, lg: 24 }} color="gray.700" mt={8} ml={{ base: 3, lg: 10 }}>
                {homeContent.sectionContact.description}
              </Text>
            )}

            <Box pos={{ base: "static", lg: "absolute" }} bottom={0} mt={{ base: 10, lg: 0 }}>
              <Img src={pepleoImg} alt="pessoa em pé sorrindo" />
            </Box>
          </Box>

          <Flex
            bg="aqua.secondary"
            w={{ base: "100%", lg: "60%" }}
            h={{ base: "auto", lg: "100%" }}
            clipPath={{
              base: "none",
              lg: "polygon(36% 0, 100% 0%, 100% 100%, 0 100%)",
            }}
            align="center"
            justify={{ base: "center", lg: "flex-end" }}
            p={{ base: 6, lg: 0 }}
            zIndex={0}>
            <FormContact />
          </Flex>
        </Flex>

        <Center as="section" w="100%" mt={20} pos="relative">
          <Flex direction="column" w="100%" maxW="1070px" align="center" pos="relative">
            <Flex direction="column" alignSelf={{ base: "center", lg: "flex-start" }}>
              {admin ? (
                <Textfield
                  w="100%"
                  fontSize="36px"
                  color="aqua.secondary"
                  fontWeight="bold"
                  mb="4px"
                  value={homeContent.sectionServices.title}
                  onChange={(e) => editSectionServices(e.target.value)}
                />
              ) : (
                <>
                  <Heading color="aqua.secondary" fontWeight="bold" mb="4px">
                    {homeContent.sectionServices.title}
                  </Heading>
                  <Box as="span" w="70%" h="3px" bg="aqua.secondary" />
                </>
              )}
            </Flex>

            <Flex maxW="1070px" justify={{ base: "center", xl: "space-between" }} wrap="wrap" gap={8} mt="40px">
              {services.map((service, index) => (
                <Card key={index} src={service.image} resume={service.description.substring(0, 201) + "..."} pos={index} />
              ))}
            </Flex>
            <Button
              variant="outline"
              borderColor="aqua.primary"
              color="aqua.primary"
              mt={8}
              mb={12}
              onClick={() => navigate("/services")}>
              VER MAIS
            </Button>
          </Flex>
        </Center>
      </Box>
      <Footer />
    </Box>
  );
}
