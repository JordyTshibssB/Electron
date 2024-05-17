import * as crypto from 'crypto'

export default function decryptData(encryptedData: string, privateKey: string): string {
  const bufferData = Buffer.from(encryptedData, 'base64')
  const decryptedData = crypto.privateDecrypt(privateKey, bufferData)
  return decryptedData.toString('utf8')
}
