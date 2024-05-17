import { ComponentProps } from 'react'

interface ISearchIconProps extends ComponentProps<'svg'> {}

function SearchIcon(props: ISearchIconProps) {
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
        d='M10.1031 10.606C9.13812 11.5703 7.80537 12.1667 6.33333 12.1667C3.38781 12.1667 1 9.77885 1 6.83333C1 3.88781 3.38781 1.5 6.33333 1.5C9.27885 1.5 11.6667 3.88781 11.6667 6.83333C11.6667 7.23408 11.6225 7.62451 11.5387 8'
        stroke='#9DA1B0'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.0016 13.5L10.1016 10.6'
        stroke='#9DA1B0'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default SearchIcon
