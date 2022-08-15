import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AddComment } from "../../../components/AddComment";
import { Comment } from "../../../components/Comment";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import MainContext from "../../../context";

export function BlogComplete() {
  const { blogId } = useParams();
  const { posts, comments, addComment } = useContext(MainContext);
  const filterPost = posts?.filter((value) => value.id == blogId)[0];
  const commentsFilter = comments?.filter((value) => value.blogId == blogId);

  const handleAddComment = (user: string, userImg: string, comment: string) => {
    if (blogId) {
      addComment({
        id: Math.random().toString().replace("0.", ""),
        createdAt: new Date(),
        user,
        userImg,
        comment,
        blogId: blogId,
      });
    }
  };

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
            pl={{ base: "10px", xl: 0 }}
            pr={{ base: "10px", xl: 0 }}>
            <Box w="100%" h="550px" mb={5} borderRadius={4}>
              <Img src={filterPost?.image} w="100%" h="100%" objectFit="cover" borderRadius={4} />
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
                {`${commentsFilter?.length} comentários`}
              </Text>

              {commentsFilter?.map((comment) => (
                <Comment key={comment.id} userImg={comment.userImg} comment={comment.comment} date={comment.createdAt} />
              ))}
              <AddComment addComment={handleAddComment} />
            </Box>
          </Flex>
        </Flex>
        <Footer />
      </Box>
    </>
  );
}
