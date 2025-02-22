import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useReactHookForm } from "react-hook-form";
import { z } from "zod"

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty(),
}).required()

export type RegisterFormValues = z.infer<typeof FormSchema>

const useForm = () => {
  const form = useReactHookForm<RegisterFormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  return {
    form
  }
}

export { useForm }