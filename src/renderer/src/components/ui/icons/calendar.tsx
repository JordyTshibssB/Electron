import { ComponentProps } from 'react'

interface ICalendarProps extends ComponentProps<'svg'> {}

function CalendarIcon(props: ICalendarProps) {
  return (
    <svg
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_4351_5578)'>
        <path
          d='M2.66699 5.16536C2.66699 4.81174 2.80747 4.4726 3.05752 4.22256C3.30756 3.97251 3.6467 3.83203 4.00033 3.83203H12.0003C12.3539 3.83203 12.6931 3.97251 12.9431 4.22256C13.1932 4.4726 13.3337 4.81174 13.3337 5.16536V13.1654C13.3337 13.519 13.1932 13.8581 12.9431 14.1082C12.6931 14.3582 12.3539 14.4987 12.0003 14.4987H4.00033C3.6467 14.4987 3.30756 14.3582 3.05752 14.1082C2.80747 13.8581 2.66699 13.519 2.66699 13.1654V5.16536Z'
          stroke='#202129'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.6667 2.5V5.16667'
          stroke='#202129'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.33331 2.5V5.16667'
          stroke='#202129'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2.66699 7.83203H13.3337'
          stroke='#202129'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.33331 11.1667C7.33331 11.3435 7.40355 11.513 7.52858 11.6381C7.6536 11.7631 7.82317 11.8333 7.99998 11.8333C8.17679 11.8333 8.34636 11.7631 8.47138 11.6381C8.59641 11.513 8.66665 11.3435 8.66665 11.1667C8.66665 10.9899 8.59641 10.8203 8.47138 10.6953C8.34636 10.5702 8.17679 10.5 7.99998 10.5C7.82317 10.5 7.6536 10.5702 7.52858 10.6953C7.40355 10.8203 7.33331 10.9899 7.33331 11.1667Z'
          stroke='#202129'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_4351_5578'>
          <rect
            width='16'
            height='16'
            fill='white'
            transform='translate(0 0.5)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CalendarIcon
