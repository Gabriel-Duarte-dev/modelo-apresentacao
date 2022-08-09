import { BrowserRouter, Routes, Route, RouteProps, Navigate } from "react-router-dom";
import { Home } from "./pages/home";
import React from "react";
import { Services } from "./pages/servicos";
import { About } from "./pages/sobre";
import { Contact } from "./pages/contato";
import ScrollToTop from "./utils/ScrollToTop";
import { Blog } from "./pages/blog";
import { BlogComplete } from "./pages/blog/blogComplete";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogComplete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
