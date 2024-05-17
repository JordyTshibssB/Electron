import { ipcMain } from 'electron'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const config = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '1c8e277a13mshaa75ea7f891c9aep1afadajsn38081e8d94ab',
    'X-RapidAPI-Host': 'jwt-bearer-auth1.p.rapidapi.com'
  }
}

export default function authAction() {
  let user

  ipcMain.on('user:signup', async (_, data) => {
    const { name, email, password } = data
    user = {
      email,
      name,
      password
    }

    const options: AxiosRequestConfig = {
      url: 'https://jwt-bearer-auth1.p.rapidapi.com/register',
      ...config,
      data: {
        email,
        password,
        role: name
      }
    }

    try {
      const response: AxiosResponse = await axios.request(options)
      console.log(response.data)
    } catch (error: any) {
      console.log('An error occured')
      if (error.response?.status === 409) {
        console.error('Conflict Error: The request could not be completed due to a conflict.')
      } else {
        console.error('An error occurred:', error.message)
      }
    }
  })

  ipcMain.on('user:login', (_, data) => {
    const { email } = data
    user = { email }
  })

  ipcMain.handle('user:get', () => user)

  ipcMain.on('user:logout', () => {
    user = null
  })
}
