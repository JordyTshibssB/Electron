import { ComponentProps } from 'react'

interface IRightArrowIconProps extends ComponentProps<'svg'> {}

function ArrowRightIcon(props: IRightArrowIconProps) {
  return (
    <svg
      width='7'
      height='12'
      viewBox='0 0 7 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1 11L6 6L1 1'
        stroke='#4F5466'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ArrowRightIcon
