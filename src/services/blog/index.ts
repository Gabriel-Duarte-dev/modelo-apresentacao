import { api } from "../api";

export interface PostDTO {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: Content[];
  image: string;
  userId: string;
  comments?: Comments[];
}

export type Content = {
  id?: string;
  subtitle: string;
  paragraph: string;
};

export type Comments = {
  id: string;
  createdAt: string;
  updatedAt: string;
  comment: string;
  blogId: string;
};

export type CreatePostDTO = {
  title: string;
  content: Content[];
  image: any;
};

const getPosts = async () => {
  const { data } = await api.get("/blog/posts/site.modelo1");

  return data;
};

const addPosts = async ({ title, content, image }: CreatePostDTO) => {
  const { data } = await api.post("/blog/newPost", {
    title,
    content,
    image,
  });

  return data;
};

export { getPosts, addPosts };
