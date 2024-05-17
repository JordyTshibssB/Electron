import { Link } from 'react-router-dom'
import Grid from '../ui/atoms/grid'
import { useState } from 'react'
import Input from '../ui/atoms/input'
import Button from '../ui/atoms/button'

const ChatPage = () => {
  const [text, setText] = useState('')

  return (
    <div className="w-full relative flex flex-col gap-10">
      <nav className="fixed h-20  top-0 left-0 right-0 flex justify-between items-center px-10 shado">
        <Link
          to="/home-page"
          className="cursor-pointer w-36 rounded-full flex items-center justify-center py-2 shadow-md bg-gradient-to-r from-[#F4716D] to-[#F8C054] no-underline"
        >
          ⏪ Return home
        </Link>
        <div></div>
      </nav>
      <Grid className=" flex flex-col gap-10 mt-10">
        <h1 className="text-4xl">Start chat</h1>
        <form className="flex flex-col gap-5">
          <Input
            variant="normal"
            placeholder="Enter your text"
            type="text"
            name="text"
            value={text}
            id="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
          />
          <Button variant="primary" size="lg" type="submit" className="mt-5">
            Send Message
          </Button>
        </form>
      </Grid>
    </div>
  )
}

export default ChatPage
