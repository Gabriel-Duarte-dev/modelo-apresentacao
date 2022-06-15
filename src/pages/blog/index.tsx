import {
  Box,
  Center,
  Flex,
  Grid,
  Input,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AiOutlineSearch } from "react-icons/ai";
import { theme } from "../../styles/theme";
import { Post } from "../../components/Post";
import { usePosts } from "../../hooks/usePosts";

export function Blog() {
  const { posts, isLoading } = usePosts();
  return (
    <>
      <Header />
      <Box w="100%" h="calc(100% - 100px)" mt="100px">
        <Flex
          align="center"
          justify="center"
          w="100%"
          h="40px"
          pos="relative"
          mt="150px"
          mb="100px"
        >
          <Flex
            align="center"
            w="100%"
            maxW="400px"
            h="100%"
            bg="none"
            boxShadow="0 0 5px 0 rgba(0,0,0,0.25)"
            borderRadius={4}
          >
            <AiOutlineSearch
              style={{ marginLeft: "10px" }}
              size="25px"
              color={theme.colors.aqua.secondary}
            />
            <Input
              type="text"
              placeholder="Pesquisar..."
              bg="none"
              border="none"
              focusBorderColor="transparent"
            />
          </Flex>
        </Flex>

        <Center w="100%">
          {isLoading ? (
            <Spinner />
          ) : (
            <SimpleGrid
              columns={{ base: 1, md: 2, xl: 3 }}
              gap={6}
              mb="160px"
              mr={{ base: "24px", xl: "16px" }}
              ml={{ base: "24px", xl: "16px" }}
            >
              {posts &&
                posts.map((post, index) => (
                  <Post
                    key={index}
                    title={post.title}
                    dateHour={post.createdAt}
                    description={post.content}
                    image={post.image}
                  />
                ))}
            </SimpleGrid>
          )}
        </Center>
        <Footer />
      </Box>
    </>
  );
}
