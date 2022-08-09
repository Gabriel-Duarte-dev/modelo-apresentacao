import { Circle, Flex, IconButton, List, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ListItem } from "../ListItem";
import { HiOutlineMenu } from "react-icons/hi";
import { MdAdminPanelSettings } from "react-icons/md";
import { DrawerMenu } from "../DrawerMenu";
import { useContext } from "react";
import MainContext from "../../context";

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
  const { changeAccess } = useContext(MainContext);
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
      zIndex={2}>
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
        alignItems="center"
        gap={6}
        cursor="pointer"
        mr={4}>
        {Object.entries(menuItensTypes).map(([key, { to }], index) => (
          <ListItem key={index} menuItem={key} link={to} />
        ))}
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<MdAdminPanelSettings color="white" size={26} cursor="pointer" />}
            bg="none"
            _hover={{ bg: "none", borderWidth: "1px", boderColor: "white" }}
            _expanded={{ bg: "rgba(255,255,255,0.3)" }}
          />
          <MenuList>
            <MenuItem color="gray.500" onClick={() => changeAccess("admin")}>
              Visão do administrador
            </MenuItem>
            <MenuItem color="gray.500" onClick={() => changeAccess("user")}>
              Visão do usuário
            </MenuItem>
          </MenuList>
        </Menu>
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
