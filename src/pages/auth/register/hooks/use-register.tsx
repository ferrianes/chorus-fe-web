import { RegisterFormValues, useForm } from "../service/form"
import { useMutation } from "../service/mutation"

const useRegister = () => {
  const { form } = useForm()

  const { mutate } = useMutation()

  async function onSubmit(data: RegisterFormValues) {
    mutate(data)
  }

  return {
    form,
    onSubmit
  }
}

export { useRegister };