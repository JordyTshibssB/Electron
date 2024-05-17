import { ComponentProps } from 'react'

interface IErrorIconProps extends ComponentProps<'svg'> {}

function ErrorIcon(props: IErrorIconProps) {
  return (
    <svg
      width='10'
      height='10'
      viewBox='0 0 10 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1.12476 8.37497L8.37491 1.12482'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.37491 8.37497L1.12476 1.12482'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ErrorIcon
