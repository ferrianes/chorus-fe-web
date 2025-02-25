import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/card"
import { Form } from "@/shared/components/form"
import { FormInput } from "@/shared/components/form-input"
import { Button } from "@/shared/components/button"
import { useLogin } from "./hooks/use-login"

function Login() {
  const { form, onSubmit } = useLogin()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to login</CardDescription>
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

export { Login }