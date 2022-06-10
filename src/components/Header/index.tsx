import {
  Box,
  Button,
  Circle,
  Flex,
  IconButton,
  List,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../context";
import { useSignOut } from "../../hooks/useSignOut";
import { DrawerMenu } from "../DrawerMenu";
import { ListItem } from "../ListItem";
import { HiOutlineMenu } from "react-icons/hi";

export function Header() {
  const { authenticated } = useContext(MainContext);
  const { signOut } = useSignOut();
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex
      as="header"
      w="100%"
      h="100px"
      justify="space-between"
      align="center"
      bg="#0FC2C0"
      color="white"
      pr={4}
      pl={4}
      pos="fixed"
      top={0}
      left={0}
      zIndex={2}
    >
      <Link to="/">
        <Flex align="center">
          <Circle size="80px" bg="#015958" />
          <Text color="white" fontSize={26} fontWeight="bold" pl={4}>
            Your Name
          </Text>
        </Flex>
      </Link>

      <List
        as="nav"
        display={{ base: "none", lg: "flex" }}
        flexDirection="row"
        gap={6}
        cursor="pointer"
        mr={20}
      >
        {[
          "Home",
          "Quem somos",
          "Serviços",
          "Portifólio",
          "Contato",
          "Blog",
        ].map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </List>

      <IconButton
        display={{ base: "inherit", lg: "none" }}
        aria-label="Menu"
        bg="#023535"
        color="white"
        _hover={{ bg: "#023535" }}
        size="md"
        icon={<HiOutlineMenu />}
        onClick={onOpen}
      />
      <DrawerMenu isOpen={isOpen} onClose={onClose} />

      {authenticated && (
        <Button onClick={signOut} colorScheme="green">
          SignOut
        </Button>
      )}
    </Flex>
  );
}
