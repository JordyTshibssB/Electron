import { ComponentProps } from 'react'

interface ICheckIconProps extends ComponentProps<'svg'> {}

function CheckIcon(props: ICheckIconProps) {
  return (
    <svg
      width='11'
      height='8'
      viewBox='0 0 11 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9.53333 1L3.66667 6.33333L1 3.90909'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default CheckIcon
