import { contextBridge, ipcRenderer } from 'electron'

// Custom APIs for renderer
const api = {
  signup: (data) => ipcRenderer.send('user:signup', data),
  login: (data) => ipcRenderer.send('user:login', data),
  getUser: async () => await ipcRenderer.invoke('user:get'),
  logout: () => ipcRenderer.send('user:logout'),
  encryption: (data) => ipcRenderer.send('data:encryption', data),
  decryption: (data) => ipcRenderer.send('data:decryption', data),
  decryptionResult: async () => await ipcRenderer.invoke('data:decryptionResult'),
  encryptionSuccess: async () => await ipcRenderer.invoke('message:encryptionSuccess'),
  encryptionError: async () => await ipcRenderer.invoke('message:decryptionError')
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
