import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  List,
} from "@chakra-ui/react";
import { ListItem } from "../ListItem";

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DrawerMenu({ isOpen, onClose }: DrawerMenuProps) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right">
      <DrawerOverlay />
      <DrawerContent bg="#0FC2C0">
        <DrawerCloseButton color="white" />
        <DrawerHeader></DrawerHeader>
        <DrawerBody>
          <List as="nav" cursor="pointer" pos="absolute">
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
