import { AxiosError } from "axios";

export type ErrorResponse = AxiosError<{
  code: string;
  status: string;
  message: string;
}>;