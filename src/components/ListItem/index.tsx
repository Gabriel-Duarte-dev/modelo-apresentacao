import { ListItem as Item, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type ListItemProps = {
  menuItem: string;
  link: string;
};

export function ListItem({ menuItem, link }: ListItemProps) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const over = () => {
    setHover(true);
  };

  const out = () => {
    setHover(false);
  };
  return (
    <Item
      color="#fff"
      display="flex"
      flexDirection="column"
      onClick={() => navigate(link)}
    >
      <Text fontWeight={500} fontSize={22} onMouseOver={over} onMouseOut={out}>
        {menuItem}
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
