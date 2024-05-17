import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IGridProps extends ComponentProps<'div'> {}

function Grid(props: IGridProps) {
  const { className, ...restProps } = props

  return (
    <div
      className={twMerge(
        'mx-2 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
      {...restProps}
    />
  )
}

export default Grid
