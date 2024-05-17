import {
  Dropdown as MuiDropdown,
  DropdownProps as MuiDropdownProps,
} from '@mui/base/Dropdown'

interface IDropdownProps extends MuiDropdownProps {}

function Dropdown(props: IDropdownProps) {
  return <MuiDropdown {...props} />
}

export type { IDropdownProps }
export default Dropdown
