import { api } from "../api";

export interface PostDTO {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  image: string;
  userId: string;
  comments?: Comments[];
}

export interface Comments {
  id: string;
  createdAt: string;
  updatedAt: string;
  comment: string;
  blogId: string;
}

const getPosts = async () => {
  const { data } = await api.get("/blog/posts/globalmidia.digital");

  return data;
};

export { getPosts };
