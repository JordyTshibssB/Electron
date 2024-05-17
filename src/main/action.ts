import encryptionAction from './actions/encryption-action'
import authAction from './actions/user-action'

export default function electronUserAction(mainWindow) {
  authAction()
  encryptionAction(mainWindow)
}
