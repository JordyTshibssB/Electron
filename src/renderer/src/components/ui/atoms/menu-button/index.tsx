import {
  MenuButton as MuiMenuButton,
  MenuButtonProps as MuiMenuButtonProps,
} from '@mui/base/MenuButton'

interface IMenuButtonProps extends MuiMenuButtonProps {}

function MenuButton(props: IMenuButtonProps) {
  return <MuiMenuButton {...props} />
}

export type { IMenuButtonProps }
export default MenuButton
