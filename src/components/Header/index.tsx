import { Button, Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import MainContext from "../../context";
import { useSignOut } from "../../hooks/useSignOut";

export function Header() {
  const { authenticated } = useContext(MainContext);
  const { signOut } = useSignOut();
  return (
    <Flex
      as="header"
      w="100vw"
      h="80px"
      justify="space-between"
      align="center"
      bg="#42C2FF"
      color="white"
      pr={4}
      pl={4}
    >
      <Heading>Painel</Heading>

      {authenticated && (
        <Button onClick={signOut} colorScheme="green">
          SignOut
        </Button>
      )}
    </Flex>
  );
}
