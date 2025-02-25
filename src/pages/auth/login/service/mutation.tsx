'use client'

import { useMutation as useTanstackMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { ErrorResponse } from "@/shared/types";
import { toast } from "sonner";
import { login } from "../api/login";

const useMutation = () => {
  const mutationKey = ["login"]

  const result = useTanstackMutation({
    mutationKey,
    mutationFn: login,
    onError: (error) => {
      if (isAxiosError<ErrorResponse>(error)) {
        return toast.error(error.response?.data.code || "Error", {
          description: error.response?.data.message || "Oops! Something went wrong",
          position: "top-center",
        })
      }
    }
  });

  return result
}

export { useMutation }