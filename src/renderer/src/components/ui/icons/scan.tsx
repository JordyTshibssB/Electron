import { ComponentProps } from 'react'

interface IScaIconProps extends ComponentProps<'svg'> {}

function ScanIcon(props: IScaIconProps) {
  return (
    <svg
      width='14'
      height='15'
      viewBox='0 0 14 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4.33333 1.5H2.33333C1.97971 1.5 1.64057 1.64048 1.39052 1.89052C1.14048 2.14057 1 2.47971 1 2.83333V4.83333M13 4.83333V2.83333C13 2.47971 12.8595 2.14057 12.6095 1.89052C12.3594 1.64048 12.0203 1.5 11.6667 1.5H9.66667M9.66667 13.5H11.6667C12.0203 13.5 12.3594 13.3595 12.6095 13.1095C12.8595 12.8594 13 12.5203 13 12.1667V10.1667M1 10.1667V12.1667C1 12.5203 1.14048 12.8594 1.39052 13.1095C1.64057 13.3595 1.97971 13.5 2.33333 13.5H4.33333'
        stroke='#898FA3'
        strokeWidth='1.33333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x='1.66797'
        y='6.83331'
        width='10.6667'
        height='1.33333'
        rx='0.666667'
        fill='#898FA3'
      />
    </svg>
  )
}

export default ScanIcon
