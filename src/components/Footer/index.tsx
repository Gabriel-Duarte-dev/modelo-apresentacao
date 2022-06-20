import { Circle, Flex, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

export function Footer() {
  return (
    <Flex
      as="footer"
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      w="100%"
      p={8}
      bg="aqua.strong">
      <Circle size="150px" bg="aqua.strong-md" />

      <List mt={{ base: 10, md: 0 }} spacing={4}>
        <ListItem color="white" fontSize={20}>
          <ListIcon as={FaPhoneAlt} color="white" />
          (11) 91234-5678
        </ListItem>
        <ListItem color="white" fontSize={20}>
          <ListIcon as={MdEmail} color="white" />
          email@email.com
        </ListItem>
        <ListItem color="white" fontSize={20}>
          <ListIcon as={FaMapMarkerAlt} color="white" />
          Endereço do lugar
        </ListItem>
      </List>

      <List display="flex" alignItems="center" gap={4} mt={{ base: 10, md: 0 }}>
        <ListItem cursor="pointer" fontSize={42} _hover={{ transform: "translateY(-3px)" }} transition="0.2s">
          <ListIcon as={AiFillInstagram} color="white" />
        </ListItem>
        <ListItem cursor="pointer" fontSize={36} _hover={{ transform: "translateY(-3px)" }} transition="0.2s">
          <ListIcon as={FaFacebook} color="white" />
        </ListItem>
        <ListItem cursor="pointer" fontSize={36} _hover={{ transform: "translateY(-3px)" }} transition="0.2s">
          <ListIcon as={BsLinkedin} color="white" />
        </ListItem>
      </List>
    </Flex>
  );
}
