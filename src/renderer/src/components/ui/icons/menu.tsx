import { ComponentProps } from 'react'

interface IMenuIconProps extends ComponentProps<'svg'> {}

function MenuIcon(props: IMenuIconProps) {
  return (
    <svg
      width='15'
      height='10'
      viewBox='0 0 15 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4.83203 1H13.4987'
        stroke='#202129'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.83203 5H13.4987'
        stroke='#202129'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.83203 9H13.4987'
        stroke='#202129'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.5 1H1.50667'
        stroke='#202129'
        strokeWidth='1.16667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.5 5H1.50667'
        stroke='#202129'
        strokeWidth='1.16667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.5 9H1.50667'
        stroke='#202129'
        strokeWidth='1.16667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default MenuIcon
