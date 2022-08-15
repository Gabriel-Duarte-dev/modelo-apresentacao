import { Input, InputProps } from "@chakra-ui/react";

export function Textfield(props: InputProps) {
  return <Input borderColor="gray.300" focusBorderColor="aqua.primary" {...props} />;
}
