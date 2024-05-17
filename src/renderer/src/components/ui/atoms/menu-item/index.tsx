import Icon, { IconName } from '@app/components/atoms/icon'
import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
} from '@mui/base/MenuItem'
import { twMerge } from 'tailwind-merge'

interface IMenuItemProps extends MuiMenuItemProps {
  leftIcon?: IconName
  rightIcon?: IconName
}

function MenuItem(props: IMenuItemProps) {
  const { className, rightIcon, leftIcon, children, ...restProps } = props

  return (
    <MuiMenuItem
      className={twMerge(
        'flex cursor-pointer items-center justify-between gap-2 rounded-[10px] from-[#F6EDFF] via-[#FFE9EA] to-[#FEF4E1] px-5 py-4 text-neutral-900 hover:bg-gradient-to-r [&_path]:stroke-neutral-900',
        className,
      )}
      {...restProps}
    >
      <div className='flex items-center gap-2'>
        {leftIcon && <Icon name={leftIcon} />}

        {children}
      </div>

      {rightIcon && <Icon name={rightIcon} />}
    </MuiMenuItem>
  )
}

export type { IMenuItemProps }
export default MenuItem
