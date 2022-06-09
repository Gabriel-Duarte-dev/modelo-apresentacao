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
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/painel" element={<PrivateRoute component={Painel} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
