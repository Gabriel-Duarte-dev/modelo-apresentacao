import React, { createContext, ReactNode, useState } from "react";
import { CommentDTO, PostDTO, postsPreview } from "../Interfaces/blog";
import { HomeContent, previewHomeContent } from "../Interfaces/home";
import { IServices, serviceDetailTypes } from "../Interfaces/servicos";
import { ABOUT_PREVIEW, ISobre } from "../Interfaces/sobre";

interface MainContextPros {
  admin: boolean;
  homeContent: HomeContent;
  editImageInCarousel: (newCarousel: HomeContent[]) => void;
  editSectionContact: (value: string) => void;
  editSectionServices: (value: string) => void;
  changeAccess: (access: string) => void;
  posts: PostDTO[] | null;
  addPost: (post: PostDTO) => void;
  comments: CommentDTO[] | [];
  addComment: (comment: CommentDTO) => void;
  services: IServices[];
  addService: (service: IServices) => void;
  editService: (pos: number, service: IServices) => void;
  changeServicePosition: (from: number, to: number) => void;
  about: ISobre;
  editAbout: (about: ISobre) => void;
}

type MainContextProviderProps = {
  children: ReactNode;
};

const MainContext = createContext<MainContextPros>({} as MainContextPros);

const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [homeContent, setHomeContent] = useState<HomeContent>(previewHomeContent);
  const [admin, setAdmin] = useState(false);
  const [posts, setPosts] = useState<PostDTO[] | null>(postsPreview);
  const [comments, setComments] = useState<CommentDTO[] | []>([]);
  const [services, setServices] = useState<IServices[]>(serviceDetailTypes);
  const [about, setAbout] = useState<ISobre>(ABOUT_PREVIEW);

  const changeAccess = (access: string) => {
    setAdmin(access === "admin");
  };

  const editImageInCarousel = (newCarousel: any[]) => {
    setHomeContent({ ...homeContent, carouselImages: newCarousel });
  };

  const editSectionContact = (value: string) => {
    setHomeContent({ ...homeContent, sectionContact: { description: value } });
  };

  const editSectionServices = (value: string) => {
    setHomeContent({ ...homeContent, sectionServices: { title: value } });
  };

  const addPost = (post: PostDTO) => {
    if (!posts) {
      setPosts([post]);
    } else {
      setPosts([...posts, post]);
    }
  };

  const addComment = (comment: CommentDTO) => {
    if (!comments) {
      setComments([comment]);
    } else {
      setComments([...comments, comment]);
    }
  };

  const addService = (service: IServices) => {
    if (!services) {
      setServices([service]);
    } else {
      setServices([...services, service]);
    }
  };

  const editService = (pos: number, service: IServices) => {
    services[pos] = service;
    setServices([...services]);
  };

  const changeServicePosition = (from: number, to: number) => {
    const newServices = [...services];
    newServices.splice(to, 0, newServices.splice(from, 1)[0]);

    setServices(newServices);
  };

  const editAbout = (about: ISobre) => {
    setAbout(about);
  };

  return (
    <MainContext.Provider
      value={{
        homeContent,
        editImageInCarousel,
        editSectionContact,
        editSectionServices,
        admin,
        changeAccess,
        posts,
        addPost,
        comments,
        addComment,
        services,
        addService,
        editService,
        changeServicePosition,
        about,
        editAbout,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContextProvider };
export default MainContext;
