'use client'

import { useMutation } from "@tanstack/react-query";
import register from "../../api/register";

const useRegisterMutation = () => {
  const mutationKey = ["register"]

  const result = useMutation({
    mutationKey,
    mutationFn: register,
  });

  return result
}

export { useRegisterMutation }