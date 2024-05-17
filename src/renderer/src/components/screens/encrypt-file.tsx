import { useEffect, useState } from 'react'
import Button from '../ui/atoms/button'
import { Link } from 'react-router-dom'
import Grid from '../ui/atoms/grid'

const EncryptFiles = () => {
  const [inputText, setInputText] = useState('')
  const [output, setOutput] = useState('')

  useEffect(() => {
    const logFeedbackMsg = async () => {
      try {
        if (window.electron && window.electron.encryptionSuccess) {
          const successMessage = await window.electron.encryptionSuccess()
          if (successMessage) {
            setOutput(`Data encrypted and saved to ${successMessage}`)
          }
        }

        if (window.electron && window.electron.encryptionError) {
          const errorMessage = await window.electron.encryptionError()
          if (errorMessage) {
            setOutput(`Error: ${errorMessage}`)
          }
        }
      } catch (error) {
        console.error('Electron fetching feedback message', error)
      }
    }

    logFeedbackMsg()
  }, [])

  const encryptData = () => {
    if (!inputText) {
      alert('The Textarea is required')
      return
    }

    if (window.electron && window.electron.encryption) {
      window.electron.encryption(inputText)
      setInputText('')
      setTimeout(() => {
        alert('Your message has been encrypted')
      }, 2500)
    }
  }

  return (
    <div className="w-full relative flex flex-col gap-10">
      <nav className="fixed h-20  top-0 left-0 right-0 flex justify-between items-center px-10 shado">
        <Link
          to="/home-page"
          className="cursor-pointer w-36 rounded-full flex items-center justify-center py-2 shadow-md bg-gradient-to-r from-[#F4716D] to-[#F8C054] no-underline"
        >
          ⏪ Return home
        </Link>
      </nav>
      <Grid className="w-full flex flex-col gap-10 mt-10">
        <h1 className="text-4xl">Encrypt your text</h1>
        <textarea
          className="w-full py-2 px-3 bg-[#1b1b1f] text-white outline-none"
          rows={7}
          placeholder="Enter text to encrypt"
          value={inputText}
          name="text"
          id="text"
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setInputText(event.target.value)
          }
        ></textarea>
        <Button variant="primary" size="lg" type="submit" onClick={encryptData}>
          Encrypt & Save
        </Button>
        <div id="output">{output && output}</div>
      </Grid>
    </div>
  )
}

export default EncryptFiles
