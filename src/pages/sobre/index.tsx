import { Box, Flex, Heading, Img, VStack, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import img from "../../../images/img4.jpg";
import missionIcon from "../../../images/missionIcon.svg";
import visionIcon from "../../../images/visionIcon.svg";
import valuesIcon from "../../../images/valuesIcon.svg";

export function About() {
  return (
    <>
      <Header />
      <Flex direction="column" align="center" w="100%" h="100%" mt="180px">
        <VStack align="flex-start" w={{ base: "95%", lg: "100%" }} maxW="900px">
          <Heading color="aqua.secondary" fontWeight="bold" mb="8px">
            Lorem Ipsum
          </Heading>
          <Box w="100%" h="400px" borderRadius={4}>
            <Img src={img} w="100%" h="100%" borderRadius={4} />
          </Box>
          <Text fontWeight="light" fontSize={16}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pulvinar id ante pretium tincidunt. Quisque suscipit malesuada
            lorem, ut ultricies libero tempor et. Donec et ligula ut orci
            commodo porta vel eget dolor. Quisque tincidunt a augue id iaculis.
            Sed nibh ex, facilisis nec dictum in, viverra tristique orci. Nullam
            ac nisi mauris. Nam in ipsum sed erat rhoncus vestibulum non sit
            amet enim. In aliquet justo quis sapien molestie molestie tincidunt
            nec massa. Phasellus sodales nunc vel arcu sagittis, et cursus
            turpis ornare. Phasellus finibus mi lacus, sit amet iaculis tellus
            vulputate in. Mauris ullamcorper, urna ac cursus fringilla, magna
            neque lacinia nisi, nec dapibus nibh tortor quis augue. Integer
            porttitor ipsum sit amet diam tristique, sit amet sagittis lectus
            cursus. Duis lobortis ullamcorper mollis. Aenean accumsan quam eu
            odio euismod tempus. Morbi commodo, libero sed consequat dignissim,
            lectus diam ornare nunc, a pharetra mauris lectus eget felis.
            Quisque augue odio, maximus iaculis finibus ut, euismod sit amet
            tellus.
          </Text>
        </VStack>

        <Flex w="100%" justify="center" gap={10} wrap="wrap" mt={20} mb={20}>
          <Flex direction="column" align="center" maxW="350px">
            <Img src={missionIcon} />
            <Text color="aqua.secondary" fontWeight="bold" fontSize={22}>
              MISSÃO
            </Text>
            <Text fontWeight="light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pulvinar id ante pretium tincidunt. Quisque suscipit malesuada
              lorem, ut ultricies libero tempor et. Donec et ligula ut orci
              commodo porta vel eget dolor. Quisque tincidunt a augue id
              iaculis. Sed nibh ex, facilisis nec dictum in, viverra tristique
              orci.
            </Text>
          </Flex>
          <Flex direction="column" align="center" maxW="350px">
            <Img src={visionIcon} />
            <Text color="aqua.secondary" fontWeight="bold" fontSize={22}>
              VISÃO
            </Text>
            <Text fontWeight="light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pulvinar id ante pretium tincidunt. Quisque suscipit malesuada
              lorem, ut ultricies libero tempor et. Donec et ligula ut orci
              commodo porta vel eget dolor. Quisque tincidunt a augue id
              iaculis. Sed nibh ex, facilisis nec dictum in, viverra tristique
              orci.
            </Text>
          </Flex>
          <Flex direction="column" align="center" maxW="350px">
            <Img src={valuesIcon} />
            <Text color="aqua.secondary" fontWeight="bold" fontSize={22}>
              VALORES
            </Text>
            <Text fontWeight="light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pulvinar id ante pretium tincidunt. Quisque suscipit malesuada
              lorem, ut ultricies libero tempor et. Donec et ligula ut orci
              commodo porta vel eget dolor. Quisque tincidunt a augue id
              iaculis. Sed nibh ex, facilisis nec dictum in, viverra tristique
              orci.
            </Text>
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
