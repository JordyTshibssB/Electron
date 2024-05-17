import { app, ipcMain, dialog } from 'electron'
import * as crypto from 'crypto'
import * as path from 'path'
import * as fs from 'fs'
import encryptData from '../utils/encryption/encrypt'
import decryptData from '../utils/encryption/decrypt'

export default function encryptionAction(mainWindow) {
  let errorInstance
  let successInstance
  let decryptionResult

  let publicKeyString = ''
  let privateKeyString = ''

  // Directory to save keys
  const keysDir = app.getPath('userData')

  // Check if keys already exist, if not, generate new ones and save
  const publicKeyPath = path.join(keysDir, 'publicKey.pem')
  const privateKeyPath = path.join(keysDir, 'privateKey.pem')

  if (!fs.existsSync(publicKeyPath) || !fs.existsSync(privateKeyPath)) {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 4096,
      publicKeyEncoding: { type: 'spki', format: 'pem' },
      privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
    })

    // Convert keys to strings
    publicKeyString = publicKey.toString()
    privateKeyString = privateKey.toString()

    // Save keys to files
    fs.writeFileSync(publicKeyPath, publicKeyString)
    fs.writeFileSync(privateKeyPath, privateKeyString)
  } else {
    // Keys already exist, read them from files
    publicKeyString = fs.readFileSync(publicKeyPath, 'utf8')
    privateKeyString = fs.readFileSync(privateKeyPath, 'utf8')
  }

  ipcMain.on('data:encryption', (_, data: string) => {
    const encryptedData = encryptData(data, publicKeyString)
    dialog
      .showSaveDialog(mainWindow!, {
        title: 'Save Encrypted Data',
        defaultPath: path.join(app.getPath('documents'), 'encrypted_data.txt'),
        buttonLabel: 'Save',
        filters: [{ name: 'Text Files', extensions: ['txt'] }]
      })
      .then((result) => {
        if (!result.canceled) {
          fs.writeFileSync(result.filePath!, encryptedData)
          successInstance = result.filePath

          // Send success message back to renderer process
          mainWindow.webContents.send('message:encryptionSuccess')
        }
      })
      .catch((err) => {
        console.error('Error saving file:', err)
        errorInstance = err.message

        // Send error message back to renderer process
        mainWindow.webContents.send('message:encryptionError', errorInstance)
      })
  })

  ipcMain.handle('message:encryptionSuccess', () => successInstance)

  ipcMain.handle('message:encryptionError', () => errorInstance)

  ipcMain.on('data:decryption', (_, encryptedData: string) => {
    decryptionResult = decryptData(encryptedData, privateKeyString)
  })

  ipcMain.handle('data:decryptionResult', () => decryptionResult)

  ipcMain.handle('message:decryptionError', () => errorInstance)
}
