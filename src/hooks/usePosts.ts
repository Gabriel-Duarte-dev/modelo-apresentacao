import { useQuery } from "react-query";
import { getPosts, PostDTO } from "../services/blog";

const usePosts = () => {
  const { data: posts, isLoading } = useQuery<PostDTO[]>("posts", getPosts);

  return { posts, isLoading };
};

export { usePosts };
