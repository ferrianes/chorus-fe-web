import { RegisterFormValues, useForm } from "../service/form"
import { useMutation } from "../service/mutation"

const useRegister = () => {
  const { form } = useForm()

  const { mutateAsync } = useMutation()

  async function onSubmit(data: RegisterFormValues) {
    try {
      await mutateAsync(data)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    form,
    onSubmit
  }
}

export { useRegister };