import { useState } from 'react'
import { Link } from 'react-router-dom'
import Grid from '../ui/atoms/grid'

const DecryptFiles = () => {
  const [output, setOutput] = useState('')

  const handleFileProcessing = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.target?.result) {
        const content = e.target.result.toString()
        decryptData(content)
      }
    }
    reader.readAsText(file)
  }

  const decryptData = async (data: string) => {
    if (window.electron && window.electron.decryption) {
      const res = window.electron.decryption(data)
      console.log('res', res)
      const result = await window.electron.decryptionResult()
      console.log('The result of the decrypted file', result)
      if (result) {
        setOutput(result)
        setTimeout(() => {
          alert('Your message has been encrypted')
        }, 2500)
      }
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
      <Grid className="flex flex-col gap-10">
        <h1 className="text-4xl">Decrypt your text by selecting a file</h1>
        <input
          type="file"
          name="decrypt-file"
          className="cursor-pointer"
          id="file-decrypt"
          onChange={(event) => handleFileProcessing(event)}
        />
        <div className="overflow-y-auto">
          <h2 className="text-xl">File Content:</h2>
          <p className="max-w-[400px]">{output}</p>
        </div>
      </Grid>
    </div>
  )
}

export default DecryptFiles
