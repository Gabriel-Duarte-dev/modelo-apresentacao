import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  List,
} from "@chakra-ui/react";
import { useContext } from "react";
import MainContext from "../../context";
import { ButtonSignOut } from "../ButtonSignOut";
import { menuItensTypes } from "../Header";
import { ListItem } from "../ListItem";

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DrawerMenu({ isOpen, onClose }: DrawerMenuProps) {
  const { authenticated } = useContext(MainContext);
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
            {authenticated && <ButtonSignOut />}
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
