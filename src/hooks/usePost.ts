import { useState } from "react";
import { addPosts, CreatePostDTO, PostDTO } from "../services/blog";

const usePost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleSubmitPost = async ({ title, content, image }: CreatePostDTO) => {
    try {
      await addPosts({ title, content, image });
    } catch (error: any) {
      console.log(error.response.data.message);
    }
    setIsLoading(false);
  };

  return { handleSubmitPost, isLoading };
};

export { usePost };
