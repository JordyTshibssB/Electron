import AuthPage from './components/screens/auth'
import HomePage from './components/screens/home'
import StoragePage from './components/screens/store-file'
import ChatPage from './components/screens/chat'
import EncryptionPage from './components/screens/encrypt-file'
import DecryptionPage from './components/screens/decrypt-file'
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import '../index.css'

declare global {
  interface Window {
    electron: {
      login: (credentials: { email: string; password: string }) => void
      signup: (credentials: { name: string; email: string; password: string }) => void
      getUser: () => { name: string; email: string }
      logout: () => void
      decryption: (inputText: string) => { decryptedText: string }
      decryptionResult: () => { (result: string) }
      encryption: (inputText: string) => void
      encryptionSuccess: () => { filePath: string }
      encryptionError: () => { errorMessage: string }
    }
  }
}

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/storage-page" element={<StoragePage />} />
          <Route path="/chat-room" element={<ChatPage />} />
          <Route path="/encryption-page" element={<EncryptionPage />} />
          <Route path="/decryption-page" element={<DecryptionPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
