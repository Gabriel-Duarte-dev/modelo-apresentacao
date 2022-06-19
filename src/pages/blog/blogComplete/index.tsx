import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Comment } from "../../../components/Comment";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { usePosts } from "../../../hooks/usePosts";

export function BlogComplete() {
  const { blogId } = useParams();
  const { posts } = usePosts();
  const filterPost = posts?.filter((value) => value.id == blogId)[0];

  return (
    <>
      <Header />
      <Box w="100%" h="calc(100% - 100px)" mt="100px">
        <Flex direction="column" align="center" w="100%">
          <Flex
            direction="column"
            align="center"
            w="100%"
            maxW="1270px"
            mt="80px"
          >
            <Box w="100%" h="550px" mb={5} borderRadius={4}>
              <Img
                src={filterPost?.image}
                w="100%"
                h="100%"
                objectFit="cover"
                borderRadius={4}
              />
            </Box>
            <Heading alignSelf="flex-start" color="aqua.secondary" mb={8}>
              {filterPost?.title}
            </Heading>
            <Box w="100%" alignSelf="flex-start">
              {filterPost?.content.map((content) => (
                <Box key={content.id} mb={4}>
                  {!!content.subtitle && (
                    <Text fontWeight="bold" fontSize={16}>
                      {content.subtitle}
                    </Text>
                  )}
                  <Text fontWeight="regular" fontSize={14}>
                    {content.paragraph}
                  </Text>
                </Box>
              ))}
            </Box>
            <Box w="100%" alignSelf="flex-start" mb={80} mt={20}>
              <Text fontWeight="bold" fontSize={16} mb={20}>
                {`${filterPost?.comments?.length ?? 0} comentários`}
              </Text>

              <Comment />
            </Box>
          </Flex>
        </Flex>
        <Footer />
      </Box>
    </>
  );
}
