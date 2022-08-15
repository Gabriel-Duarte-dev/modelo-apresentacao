import { Textarea as Txtarea, TextareaProps } from "@chakra-ui/react";

export function Textarea(props: TextareaProps) {
  return <Txtarea borderColor="gray.300" focusBorderColor="aqua.primary" {...props} />;
}
