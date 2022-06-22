import { useQuery } from "react-query";
import { CommentOutput, listComment } from "../services/blog";

const useComments = (blogId: string) => {
  const {
    data: comments,
    isLoading,
    isError,
    refetch,
  } = useQuery<CommentOutput[]>("comments", () => listComment(blogId), { enabled: false });

  return { comments, isLoading, isError, refetch };
};

export { useComments };
