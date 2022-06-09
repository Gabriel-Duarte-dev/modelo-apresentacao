import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { UserDTO } from "../services/auth";

interface MainContextPros {
  user: UserDTO | null;
  setUser: Dispatch<SetStateAction<UserDTO | null>>;
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}

type MainContextProviderProps = {
  children: ReactNode;
};

const DEFAULT_VALUE = {
  user: null,
  setUser: () => {},
  authenticated: false,
  setAuthenticated: () => {},
};

const MainContext = createContext<MainContextPros>(DEFAULT_VALUE);

const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [user, setUser] = useState<UserDTO | null>(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userStorage = localStorage.getItem("user");

    if (token && userStorage) {
      setAuthenticated(true);
      setUser(JSON.parse(userStorage));
      api.interceptors.request.use(async (req) => {
        if (req.headers) {
          req.headers.Authorization = `Bearer ${token}`;
        }
        return req;
      });
    }
  }, []);
  return (
    <MainContext.Provider
      value={{ user, setUser, authenticated, setAuthenticated }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContextProvider };
export default MainContext;
