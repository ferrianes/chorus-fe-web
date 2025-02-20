import { axios } from "@/shared/lib/utils";
import { AxiosResponse } from "axios";

export type RegisterResponse = {
  status: string;
  message: string;
};

type RegisterProps = {
  email: string;
  password: string;
}

const register = async ({
  email,
  password,
}: RegisterProps): Promise<AxiosResponse<RegisterResponse>> => {
  return axios.post('/register', {
    name: 'newuser',
    email,
    password,
  });
};


export default register;
