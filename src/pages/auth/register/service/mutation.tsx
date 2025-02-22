'use client'

import { useMutation as useTanstackMutation } from "@tanstack/react-query";
import register from "../api/register";
import { isAxiosError } from "axios";
import { ErrorResponse } from "@/shared/types";
import { toast } from "sonner";

const useMutation = () => {
  const mutationKey = ["register"]

  const result = useTanstackMutation({
    mutationKey,
    mutationFn: register,
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