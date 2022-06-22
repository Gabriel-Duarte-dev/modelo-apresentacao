import { api } from "../api";

export type CreatePostDTO = {
  title: string;
  content: Content[];
  image: any;
};

export interface PostDTO {
  id: string;
  createdAt: Date;
  title: string;
  content: Content[];
  image: string;
  userId: string;
  comments?: CommentOutput[];
}

export type Content = {
  id?: string;
  subtitle: string;
  paragraph: string;
};

export interface CommentDTO {
  user: string;
  userImg: string;
  comment: string;
  blogId: string;
}

export type CommentOutput = {
  id: string;
  createdAt: Date;
  user: string;
  userImg: string;
  comment: string;
  blogId: string;
};

const getPosts = async (): Promise<PostDTO[]> => {
  const { data } = await api.get("/blog/posts/globalmidia.digital");

  return data;
};

const addPosts = async ({ title, content, image }: CreatePostDTO): Promise<PostDTO> => {
  const { data } = await api.post("/blog/newPost", {
    title,
    content,
    image,
  });

  return data;
};

const addComment = async ({ user, userImg, comment, blogId }: CommentDTO): Promise<CommentOutput> => {
  const { data } = await api.post("/comment/newComment", {
    user,
    userImg,
    comment,
    blogId,
  });

  return data;
};

const listComment = async (blogId: string): Promise<CommentOutput[]> => {
  const { data } = await api.get(`/comment/${blogId}`);

  return data;
};

export { getPosts, addPosts, addComment, listComment };
