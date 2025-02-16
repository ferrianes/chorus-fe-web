import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty(),
}).required()

const useRegister = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return {
    form,
    onSubmit
  }
}

export { useRegister }