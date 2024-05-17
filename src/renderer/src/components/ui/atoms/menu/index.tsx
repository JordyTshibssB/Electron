import { Menu as MuiMenu, MenuProps as MuiMenuProps } from '@mui/base/Menu'

interface IMenuProps extends MuiMenuProps {}

function Menu(props: IMenuProps) {
  return (
    <MuiMenu
      slotProps={{
        listbox: {
          className: 'p-2 rounded-md rounded-xl shadow-md-6 shadow-gray-md-300',
        },
      }}
      {...props}
    />
  )
}

export type { IMenuProps }
export default Menu
