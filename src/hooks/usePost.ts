import { useState } from "react";
import { useMutation } from "react-query";
import { addPosts, CreatePostDTO, PostDTO } from "../services/blog";

const usePost = () => {
  const { mutate: handleSubmitPost, isLoading, isError } = useMutation<CreatePostDTO, Error, CreatePostDTO>(addPosts);

  return { handleSubmitPost, isLoading, isError };
};

export { usePost };
