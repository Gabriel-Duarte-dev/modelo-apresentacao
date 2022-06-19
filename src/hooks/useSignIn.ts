import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../context";
import { api } from "../services/api";
import { login, LoginInputDTO } from "../services/auth";

const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setAuthenticated } = useContext(MainContext);
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }: LoginInputDTO, e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = await login({ email, password });
      localStorage.setItem("token", user.token);
      localStorage.setItem("user", JSON.stringify(user.user));
      setAuthenticated(true);
      setUser(user.user);
      api.interceptors.request.use(async (req) => {
        if (req.headers) {
          req.headers.Authorization = `Bearer ${user.token}`;
        }
        return req;
      });
      setIsLoading(false);
      navigate("/");
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  return { onSubmit, isLoading };
};

export { useSignIn };
