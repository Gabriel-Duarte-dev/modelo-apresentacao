import { Button } from "@chakra-ui/react";
import { useSignOut } from "../../hooks/useSignOut";

export function ButtonSignOut() {
  const { signOut } = useSignOut();
  return (
    <Button
      variant="outline"
      size="sm"
      _hover={{ bg: "none" }}
      _active={{
        bg: "aqua.primary-md",
        borderColor: "aqua.primary-md",
      }}
      color="white"
      onClick={signOut}>
      SignOut
    </Button>
  );
}
