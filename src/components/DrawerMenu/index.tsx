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
import { useSignOut } from "../../hooks/useSignOut";
import { menuItensTypes } from "../Header";
import { ListItem } from "../ListItem";

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DrawerMenu({ isOpen, onClose }: DrawerMenuProps) {
  const { authenticated } = useContext(MainContext);
  const { signOut } = useSignOut();
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
            {authenticated && (
              <Button
                variant="outline"
                size="sm"
                _hover={{ bg: "none" }}
                _active={{
                  bg: "aqua.primary-md",
                  borderColor: "aqua.primary-md",
                }}
                color="white"
                onClick={signOut}
              >
                SignOut
              </Button>
            )}
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
