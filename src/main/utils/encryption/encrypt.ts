import * as crypto from 'crypto'

export default function encryptData(data: string, publicKey: string): string {
  const bufferData = Buffer.from(data, 'utf8')
  const encryptedData = crypto.publicEncrypt(publicKey, bufferData)
  return encryptedData.toString('base64')
}
