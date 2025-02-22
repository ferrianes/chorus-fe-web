import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useReactHookForm } from "react-hook-form";
import { z } from "zod"

const FormSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  password: z.string().nonempty(),
  passwordConfirmation: z.string().nonempty()
})
  .required()
  .refine(data => data.password === data.passwordConfirmation, {
    message: "Passwords must match",
    path: ["passwordConfirmation"]
  })

export type RegisterFormValues = z.infer<typeof FormSchema>

const useForm = () => {
  const form = useReactHookForm<RegisterFormValues>({
    resolver: zodResolver(FormSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    }
  });

  return {
    form
  }
}

export { useForm }