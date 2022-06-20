import { useQuery } from "react-query";
import { getPosts, PostDTO } from "../services/blog";

const usePosts = () => {
  const { data: posts, isLoading, refetch } = useQuery<PostDTO[]>("posts", getPosts, { enabled: false });

  return { posts, isLoading, refetch };
};

export { usePosts };
