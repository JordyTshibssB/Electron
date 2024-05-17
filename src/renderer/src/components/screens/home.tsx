import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface IUser {
  name: string
  email: string
}

const Chat = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<IUser | null>(null)
  const [output, setOutput] = useState<string | null>(null)
  const links = [
    {
      path: '/storage-page',
      name: '~Store Data Locally 📂'
    },
    {
      path: '/encryption-page',
      name: '~Encrypt data 🔑'
    },
    {
      path: '/decryption-page',
      name: '~Decrypt data 🔑'
    },
    {
      path: '/chat-room',
      name: '~Start a chat 💬 '
    }
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (window.electron && window.electron.getUser) {
          const loggedInUser: IUser | null = await window.electron.getUser()
          if (loggedInUser) {
            setUser(loggedInUser)
          } else {
            let firstnameStored = window.localStorage.getItem('firstname')
            setOutput(firstnameStored)
          }
        } else {
          console.error('Electron login function is not available.')
        }
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    }

    fetchData()
  }, [])

  const handleLogout = () => {
    if (window.electron && window.electron.logout) {
      window.electron.logout()
      window.localStorage.removeItem('email')
      window.localStorage.removeItem('firstname')
      window.localStorage.removeItem('lastname')
      window.localStorage.removeItem('dateOfBirth')
      window.localStorage.removeItem('phone')
      window.localStorage.removeItem('address')
      window.localStorage.removeItem('city')
      window.localStorage.removeItem('zipcode')

      navigate('/')
    } else {
      console.error('Electron logout function is not available.')
    }
  }

  return (
    <div className="w-full relative flex flex-col gap-10">
      <nav className="fixed h-20  top-0 left-0 right-0 flex justify-between items-center px-10 shado">
        <span
          onClick={handleLogout}
          className="cursor-pointer w-32 rounded-full flex items-center justify-center py-2 shadow-md bg-gradient-to-r from-[#F4716D] to-[#F8C054]"
        >
          Logout
        </span>
        <span>Welcome on board {user ? user?.email : output}</span>
      </nav>
      <div className="flex flex-col gap-20 w-full">
        <h2 className="text-2xl">What would you like to do next ? </h2>
        <ul className="flex flex-col gap-5 list-disc">
          {links.map(({ path, name }) => (
            <li key={path} className="text-xl">
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Chat
