import { ListItem as Item, Text, Box } from "@chakra-ui/react";
import { useState } from "react";

type ListItemProps = {
  item: string;
};

export function ListItem({ item }: ListItemProps) {
  const [hover, setHover] = useState(false);

  const over = () => {
    setHover(true);
  };

  const out = () => {
    setHover(false);
  };
  return (
    <Item color="#fff" display="flex" flexDirection="column">
      <Text fontWeight={500} fontSize={22} onMouseOver={over} onMouseOut={out}>
        {item}
      </Text>
      <Box
        as="span"
        w={hover ? "100%" : 0}
        h="3px"
        bg="white"
        transition="0.3s"
      ></Box>
    </Item>
  );
}
