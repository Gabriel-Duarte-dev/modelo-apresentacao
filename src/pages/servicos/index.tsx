import { Box, Flex } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ServiceDetails } from "../../components/ServiceDetails";

export const serviceDetailTypes = [
  {
    image: "../../../images/img",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar id ante pretium tincidunt. Quisque suscipit malesuada lorem, ut ultricies libero tempor et. Donec et ligula ut orci commodo porta vel eget dolor. Quisque tincidunt a augue id iaculis. Sed nibh ex, facilisis nec dictum in, viverra tristique orci. Nullam ac nisi mauris. Nam in ipsum sed erat rhoncus vestibulum non sit amet enim. In aliquet justo quis sapien molestie molestie tincidunt nec massa. Phasellus sodales nunc vel arcu sagittis, et cursus turpis ornare. Phasellus finibus mi lacus, sit amet iaculis tellus vulputate in. Mauris ullamcorper, urna ac cursus fringilla, magna neque lacinia nisi, nec dapibus nibh tortor quis augue. Integer porttitor ipsum sit amet diam tristique, sit amet sagittis lectus cursus. Duis lobortis ullamcorper mollis. Aenean accumsan quam eu odio euismod tempus.",
  },
  {
    image: "../../../images/img",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar id ante pretium tincidunt. Quisque suscipit malesuada lorem, ut ultricies libero tempor et. Donec et ligula ut orci commodo porta vel eget dolor. Quisque tincidunt a augue id iaculis. Sed nibh ex, facilisis nec dictum in, viverra tristique orci. Nullam ac nisi mauris. Nam in ipsum sed erat rhoncus vestibulum non sit amet enim. In aliquet justo quis sapien molestie molestie tincidunt nec massa. Phasellus sodales nunc vel arcu sagittis, et cursus turpis ornare. Phasellus finibus mi lacus, sit amet iaculis tellus vulputate in. Mauris ullamcorper, urna ac cursus fringilla, magna neque lacinia nisi, nec dapibus nibh tortor quis augue. Integer porttitor ipsum sit amet diam tristique, sit amet sagittis lectus cursus. Duis lobortis ullamcorper mollis. Aenean accumsan quam eu odio euismod tempus.",
  },
  {
    image: "../../../images/img",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar id ante pretium tincidunt. Quisque suscipit malesuada lorem, ut ultricies libero tempor et. Donec et ligula ut orci commodo porta vel eget dolor. Quisque tincidunt a augue id iaculis. Sed nibh ex, facilisis nec dictum in, viverra tristique orci. Nullam ac nisi mauris. Nam in ipsum sed erat rhoncus vestibulum non sit amet enim. In aliquet justo quis sapien molestie molestie tincidunt nec massa. Phasellus sodales nunc vel arcu sagittis, et cursus turpis ornare. Phasellus finibus mi lacus, sit amet iaculis tellus vulputate in. Mauris ullamcorper, urna ac cursus fringilla, magna neque lacinia nisi, nec dapibus nibh tortor quis augue. Integer porttitor ipsum sit amet diam tristique, sit amet sagittis lectus cursus. Duis lobortis ullamcorper mollis. Aenean accumsan quam eu odio euismod tempus.",
  },
  {
    image: "../../../images/img",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar id ante pretium tincidunt. Quisque suscipit malesuada lorem, ut ultricies libero tempor et. Donec et ligula ut orci commodo porta vel eget dolor. Quisque tincidunt a augue id iaculis. Sed nibh ex, facilisis nec dictum in, viverra tristique orci. Nullam ac nisi mauris. Nam in ipsum sed erat rhoncus vestibulum non sit amet enim. In aliquet justo quis sapien molestie molestie tincidunt nec massa. Phasellus sodales nunc vel arcu sagittis, et cursus turpis ornare. Phasellus finibus mi lacus, sit amet iaculis tellus vulputate in. Mauris ullamcorper, urna ac cursus fringilla, magna neque lacinia nisi, nec dapibus nibh tortor quis augue. Integer porttitor ipsum sit amet diam tristique, sit amet sagittis lectus cursus. Duis lobortis ullamcorper mollis. Aenean accumsan quam eu odio euismod tempus.",
  },
];

export function Services() {
  return (
    <>
      <Header />
      <Flex direction="column" align="center" w="100%" h="100%" mt="220px">
        {serviceDetailTypes.map((value, index) => (
          <ServiceDetails
            key={index}
            img={`${value.image + (index + 1)}.jpg`}
            description={value.description}
            pos={index + 1}
          />
        ))}

        <Footer />
      </Flex>
    </>
  );
}
