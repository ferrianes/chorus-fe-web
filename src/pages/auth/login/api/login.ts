import { axios } from "@/shared/lib/utils";
import { AxiosResponse } from "axios";

export type LoginResponse = {
  status: string;
  message: string;
};

type LoginParams = {
  email: string;
  password: string;
}

const login = async ({
  email,
  password,
}: LoginParams): Promise<AxiosResponse<LoginResponse>> => {
  return axios.post('/login', {
    email,
    password,
  });
};


export { login };
