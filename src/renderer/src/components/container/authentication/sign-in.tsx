import Button from '../../ui/atoms/button'
import Grid from '../../ui/atoms/grid'
import Input from '../../ui/atoms/input'
import { useState } from 'react'

interface SignInPanelProps {
  handleSignIn: (
    event: React.FormEvent<HTMLFormElement>,
    { email, password }: { email: string; password: string }
  ) => void
  setSwitchTab: (value: boolean) => void
  switchTab: boolean
}

const SignInPage: React.FC<SignInPanelProps> = ({ handleSignIn, setSwitchTab, switchTab }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <Grid className="flex flex-col gap-5">
      <div className="max-w-[600px] mx-auto flex flex-col gap-10 rounded-md  shadow-xl px-8 py-8 pb-14">
        <h1 className="text-2xl text-white">Sign in</h1>
        <form
          className="flex flex-col gap-8"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            handleSignIn(event, { email, password })
          }
        >
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          />
          <div className="mt-4 flex flex-col gap-6">
            <Button variant="primary" size="lg" type="submit">
              Sign In
            </Button>
            <div className="flex gap-2 text-white ">
              <p>Don't have an account yet? </p>
              <span
                className="underline text-orange cursor-pointer"
                onClick={() => setSwitchTab(!switchTab)}
              >
                Sign up instead
              </span>
            </div>
          </div>
        </form>
      </div>
    </Grid>
  )
}

export default SignInPage
