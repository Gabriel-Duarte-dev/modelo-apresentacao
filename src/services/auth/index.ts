import { api } from "../api";

export type LoginInputDTO = {
  email: string;
  password: string;
};

export type UserDTO = {
  email: Pick<LoginInputDTO, "email">;
  site: string;
};

export type LoginOutputDTO = {
  user: UserDTO;
  token: string;
};

const login = async ({
  email,
  password,
}: LoginInputDTO): Promise<LoginOutputDTO> => {
  const { data } = await api.post("/auth/login", {
    email,
    password,
    site: "site.modelo1",
  });

  return data;
};

export { login };
