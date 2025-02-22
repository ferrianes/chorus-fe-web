'use client'

import { useMutation as useTanstackMutation } from "@tanstack/react-query";
import register from "../api/register";

const useMutation = () => {
  const mutationKey = ["register"]

  const result = useTanstackMutation({
    mutationKey,
    mutationFn: register,
  });

  return result
}

export { useMutation }