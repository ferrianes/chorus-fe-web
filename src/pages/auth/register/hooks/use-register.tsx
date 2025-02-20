import { RegisterFormValues, useRegisterForm } from "./use-register-form";
import { useRegisterMutation } from "./use-register-mutation";

const useRegister = () => {
  const { form } = useRegisterForm()

  const { mutateAsync } = useRegisterMutation()

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