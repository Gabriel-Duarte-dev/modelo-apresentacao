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

export const menuItensTypes = {
  Home: {
    to: "/",
  },
  Serviços: {
    to: "/services",
  },
  Sobre: {
    to: "/about",
  },
  Contato: {
    to: "/contact",
  },
  Blog: {
    to: "/blog",
  },
};

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
      bg="aqua.primary"
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
          <Circle size="80px" bg="aqua.strong-md" />
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
        mr={4}
      >
        {Object.entries(menuItensTypes).map(([key, item], index) => (
          <ListItem key={index} menuItem={key} link={item.to} />
        ))}
        {authenticated && (
          <Button
            variant="outline"
            size="sm"
            _hover={{ bg: "none" }}
            _active={{ bg: "aqua.primary-md", borderColor: "aqua.primary-md" }}
            onClick={signOut}
          >
            SignOut
          </Button>
        )}
      </List>

      <IconButton
        display={{ base: "inherit", lg: "none" }}
        aria-label="Menu"
        bg="aqua.strong-md"
        color="white"
        _hover={{ bg: "aqua.strong-md" }}
        _active={{ bg: "aqua.secondary" }}
        size="md"
        icon={<HiOutlineMenu />}
        onClick={onOpen}
      />
      <DrawerMenu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
