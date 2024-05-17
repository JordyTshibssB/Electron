import Button from '../../ui/atoms/button'
import Grid from '../../ui/atoms/grid'
import Input from '../../ui/atoms/input'
import { useState } from 'react'

interface SignUpPanelProps {
  handleSignUp: (
    event: React.FormEvent<HTMLFormElement>,
    { name, email, password }: { name: string; email: string; password: string }
  ) => void
  setSwitchTab: (value: boolean) => void
  switchTab: boolean
}

const SignUpPage: React.FC<SignUpPanelProps> = ({ handleSignUp, setSwitchTab, switchTab }) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <Grid className="flex flex-col gap-5">
      <h1 className="text-2xl text-white">Sign up</h1>
      <form
        className="w-full flex flex-col gap-8"
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          handleSignUp(event, { name, email, password })
        }
      >
        <Input
          variant="normal"
          placeholder="Enter your name"
          type="text"
          name="name"
          id="name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
        />
        <Input
          variant="normal"
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
        />
        <Input
          variant="normal"
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
        />
        <Input
          variant="normal"
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Confirm Password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
        />
        <div className="mt-4 flex flex-col gap-6">
          <Button variant="primary" size="lg" type="submit">
            Sign Up
          </Button>
          <div className="flex gap-2 text-white">
            <p>Already have an account ? </p>
            <span
              className="underline text-orange cursor-pointer"
              onClick={() => setSwitchTab(!switchTab)}
            >
              Sign in instead
            </span>
          </div>
        </div>
      </form>
    </Grid>
  )
}

export default SignUpPage
