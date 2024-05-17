import { ComponentProps } from 'react'

interface IArrowLeftIconProps extends ComponentProps<'svg'> {}

function ArrowLeftIcon(props: IArrowLeftIconProps) {
  return (
    <svg
      width='9'
      height='14'
      viewBox='0 0 9 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.49926 12.7076L1.5 7.0042L7.49926 1.30078'
        stroke='#4F5466'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ArrowLeftIcon
