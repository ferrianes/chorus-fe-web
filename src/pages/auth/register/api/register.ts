import { axios } from "@/shared/lib/utils";
import { AxiosResponse } from "axios";

export type RegisterResponse = {
  status: string;
  message: string;
};

type RegisterProps = {
  name: string;
  email: string;
  password: string;
}

const register = async ({
  name,
  email,
  password,
}: RegisterProps): Promise<AxiosResponse<RegisterResponse>> => {
  return axios.post('/register', {
    name,
    email,
    password,
  });
};


export default register;
