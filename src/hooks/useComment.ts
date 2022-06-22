import { useMutation } from "react-query";
import { addComment, CommentDTO, CommentOutput } from "../services/blog";

const useComment = () => {
  const { mutate: handleSubmitComment, isLoading, isError } = useMutation<CommentOutput, Error, CommentDTO>(addComment);

  return { handleSubmitComment, isLoading, isError };
};

export { useComment };
