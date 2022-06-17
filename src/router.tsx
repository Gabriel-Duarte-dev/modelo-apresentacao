import {
  BrowserRouter,
  Routes,
  Route,
  RouteProps,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import { Home } from "./pages/home";
import React, { useContext } from "react";
import MainContext from "./context";
import { Painel } from "./pages/painel";
import { Services } from "./pages/servicos";
import { About } from "./pages/sobre";
import { Contact } from "./pages/contato";
import ScrollToTop from "./utils/ScrollToTop";
import { Blog } from "./pages/blog";
import { BlogComplete } from "./pages/blog/blogComplete";

type PrivateRouteProps = {
  component: React.FC;
};

const Router = () => {
  const PrivateRoute = ({ component: Component }: PrivateRouteProps) => {
    const { authenticated } = useContext(MainContext);

    if (authenticated) return <Component />;

    return <Navigate to="/login" />;
  };

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
        <Route path="/login" element={<Login />} />
        <Route path="/painel" element={<PrivateRoute component={Painel} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
