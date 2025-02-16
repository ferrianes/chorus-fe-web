import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/card"
import { useRegister } from "./hooks/use-register"
import { Form } from "@/shared/components/form"
import { FormInput } from "@/shared/components/form-input"
import { Button } from "@/shared/components/button"

function Register() {
  const { form, onSubmit } = useRegister()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Sign up for a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-4'>
            <FormInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
            />

            <FormInput
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
            />

            <Button color="primary" size='md' type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export { Register }