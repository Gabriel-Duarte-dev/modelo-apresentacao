import { Box, Flex, Heading, Img, VStack, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";

interface ServiceDetailsProps {
  img: string;
  description: string;
  pos: number;
}

export function ServiceDetails({ img, description, pos }: ServiceDetailsProps) {
  const [mdScreen] = useMediaQuery("(max-width: 991px)");
  const navigate = useNavigate();

  const pair = () => {
    if (pos % 2 == 0) return true;
    return false;
  };
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      align={{ base: "center", lg: "flex-end" }}
      w={{ base: "100%", lg: "auto" }}
      h={{ base: "auto", lg: "400px" }}
      mb={{ base: "250px", lg: "150px" }}>
      <VStack
        align={{ base: "flex-start", lg: pair() ? "flex-end" : "flex-start" }}
        w={{ base: "95%", lg: "450px" }}
        mr={{ base: 0, lg: pair() ? 0 : 6 }}
        ml={{ base: 0, lg: pair() ? 6 : 0 }}
        order={{ base: 0, lg: pair() ? 1 : 0 }}>
        <Flex direction="column">
          <Heading color="aqua.secondary" fontWeight="bold" mb="4px">
            Lorem ipsum
          </Heading>
          <Box as="span" w="70%" h="3px" bg="aqua.secondary" />
        </Flex>
        <ParallaxBanner
          style={{
            width: "100%",
            height: "307px",
            borderRadius: 4,
            boxShadow: mdScreen ? "4px 4px 4px 0 rgba(0,0,0,0.3)" : `${pair() ? "-4px" : "4px"} 4px 4px 0 rgba(0,0,0,0.3)`,
          }}
          layers={[{ image: img, speed: 20 }]}
          className="aspect-[2/1]"
        />
      </VStack>
      <VStack align="flex-start" w={{ base: "95%", lg: "450px" }} mt={{ base: 4, lg: 0 }}>
        <Text fontSize={14} fontWeight="light" h={{ base: "auto", lg: "100%" }} mb="10px">
          {description}
        </Text>
        <Button
          rightIcon={<BsArrowRight />}
          variant="outline"
          borderColor="aqua.primary"
          color="aqua.primary"
          onClick={() => navigate("/contact")}>
          CONTRATAR
        </Button>
      </VStack>
    </Flex>
  );
}
