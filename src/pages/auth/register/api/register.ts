import { axios } from "@/shared/lib/utils";
import { AxiosResponse } from "axios";

export type RegisterResponse = {
  status: string;
  message: string;
};

type RegisterParams = {
  name: string;
  email: string;
  password: string;
}

const register = async ({
  name,
  email,
  password,
}: RegisterParams): Promise<AxiosResponse<RegisterResponse>> => {
  return axios.post('/register', {
    name,
    email,
    password,
  });
};


export { register };
