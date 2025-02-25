'use client'

import { useMutation as useTanstackMutation } from "@tanstack/react-query";
import { register } from "../api/register";
import { isAxiosError } from "axios";
import { ErrorResponse } from "@/shared/types";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const useMutation = () => {
  const navigate = useNavigate()

  const mutationKey = ["register"]

  const result = useTanstackMutation({
    mutationKey,
    mutationFn: register,
    onSuccess: () => {
      toast.success("Account created successfully, you can now login", {
        position: "top-center",
      })

      navigate('/login')
    },
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