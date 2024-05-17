import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpPanel from '../container/authentication/sign-up'
import SignInPanel from '../container/authentication/sign-in'

const AuthPage = () => {
  const [switchTab, setSwitchTab] = useState(false)
  const navigate = useNavigate()

  const handleSignUp = (
    event: React.FormEvent<HTMLFormElement>,
    { name, email, password }: { name: string; email: string; password: string }
  ) => {
    event.preventDefault()
    if (!name || !email || !password) {
      alert('User details required')
      return
    }
    if (window.electron && window.electron.signup) {
      window.electron.signup({ name, email, password })
      navigate('/home-page')
    } else {
      console.error('Electron login function is not available.')
    }
  }

  const handleSignIn = (
    event: React.FormEvent<HTMLFormElement>,
    { email, password }: { email: string; password: string }
  ) => {
    event.preventDefault()
    if (!email || !password) {
      alert('User details required')
      return
    }
    if (window.electron && window.electron.login) {
      window.electron.login({ email, password })
      navigate('/home-page')
    } else {
      console.error('Electron login function is not available.')
    }
  }

  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center min-h-screen">
      {switchTab ? (
        <SignUpPanel
          handleSignUp={handleSignUp}
          switchTab={switchTab}
          setSwitchTab={setSwitchTab}
        />
      ) : (
        <SignInPanel
          handleSignIn={handleSignIn}
          switchTab={switchTab}
          setSwitchTab={setSwitchTab}
        />
      )}
    </div>
  )
}

export default AuthPage
