import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  List,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useContext } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import MainContext from "../../context";
import { menuItensTypes } from "../Header";
import { ListItem } from "../ListItem";

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DrawerMenu({ isOpen, onClose }: DrawerMenuProps) {
  const { changeAccess } = useContext(MainContext);
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right">
      <DrawerOverlay />
      <DrawerContent bg="aqua.primary">
        <DrawerCloseButton color="white" />
        <DrawerHeader></DrawerHeader>
        <DrawerBody>
          <List as="nav" cursor="pointer" pos="absolute" spacing={5}>
            {Object.entries(menuItensTypes).map(([key, item], index) => (
              <ListItem key={index} menuItem={key} link={item.to} />
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
