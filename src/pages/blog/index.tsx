import { Box, Button, Center, Flex, Input, ScaleFade, SimpleGrid, Spinner, Text, useDisclosure } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AiOutlineSearch } from "react-icons/ai";
import { theme } from "../../styles/theme";
import { Post } from "../../components/Post";
import { useContext, useMemo, useState } from "react";
import { AddPostModal } from "../../components/modals/AddPostModal";
import MainContext from "../../context";
import { motion } from "framer-motion";

export function Blog() {
  const [search, setSearch] = useState("");
  const { admin, posts } = useContext(MainContext);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const postFilter = useMemo(() => {
    if (!!search) {
      return posts?.filter((value) => value.title.toLocaleLowerCase().includes(search.toLowerCase())) ?? [];
    }

    return posts ?? [];
  }, [posts, search]);

  const MotionSimpleGrid = motion(SimpleGrid);
  const renderPosts = useMemo(
    () => (
      <MotionSimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        gap={6}
        mb="160px"
        mr={{ base: "24px", xl: "16px" }}
        ml={{ base: "24px", xl: "16px" }}
        layout>
        {postFilter.length > 0 &&
          postFilter.map((post, index) => (
            <Post
              key={index}
              id={post.id}
              title={post.title}
              dateHour={post.createdAt}
              description={post.content[0].paragraph}
              image={post.image}
            />
          ))}
      </MotionSimpleGrid>
    ),
    [posts, search],
  );

  const notFound = useMemo(
    () => (
      <Text color="gray.400" fontSize={18} mb="55vh">
        Sem registros para sua busca...
      </Text>
    ),
    [postFilter],
  );

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <>
      <Header />
      <Box w="100%" h="calc(100% - 100px)" mt="100px" pos="relative">
        {admin && (
          <ScaleFade in={isOpen}>
            <AddPostModal isOpen={isOpen} onClose={handleCloseModal} />
          </ScaleFade>
        )}

        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          w="100%"
          pos="relative"
          mt="150px"
          mb="100px">
          <Flex
            align="center"
            w="100%"
            maxW={{ base: "320px", sm: "400px" }}
            h="40px"
            bg="none"
            boxShadow="0 0 5px 0 rgba(0,0,0,0.25)"
            borderRadius={4}>
            <AiOutlineSearch style={{ marginLeft: "10px" }} size="25px" color={theme.colors.aqua.secondary} />
            <Input
              type="text"
              placeholder="Pesquisar..."
              bg="none"
              border="none"
              focusBorderColor="transparent"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </Flex>
          {admin && (
            <Button
              variant="outline"
              color="aqua.primary"
              borderColor="aqua.primary"
              pos={{ base: "static", md: "absolute" }}
              right={10}
              mt={{ base: 4, md: 0 }}
              onClick={onOpen}>
              Novo Post
            </Button>
          )}
        </Flex>

        <Center w="100%">{postFilter.length > 0 ? renderPosts : notFound}</Center>
        <Footer />
      </Box>
    </>
  );
}
