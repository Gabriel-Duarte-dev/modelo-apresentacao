import { useContext, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainContext from "../context";
import { api } from "../services/api";

const useSignOut = () => {
  const { setAuthenticated, setUser } = useContext(MainContext);
  const navigate = useNavigate();
  const location = useLocation();

  const signOut = () => {
    setAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    api.interceptors.request.use(async (req) => {
      if (req.headers) {
        req.headers.Authorization = false;
      }
      return req;
    });

    navigate(location.pathname);
  };

  return { signOut };
};

export { useSignOut };
