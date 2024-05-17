import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface IChipProps
  extends ComponentProps<'div'>,
    Pick<ComponentProps<'img'>, 'alt'> {
  label: string
  image?: ReactNode
  disabled?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

function Chip(props: IChipProps) {
  const { label, leftIcon, rightIcon, image, disabled, alt, ...restProps } =
    props

  return (
    <div
      aria-disabled={!!disabled}
      className={twMerge('chip', !image && 'pl-[8px]', !image && 'px-5')}
      {...restProps}
    >
      {typeof image === 'string' ? (
        <img
          alt={alt}
          src={image}
          className='relative block size-[26px] rounded-full'
        />
      ) : (
        image
      )}

      {!image && leftIcon}

      <span>{label}</span>

      {rightIcon}
    </div>
  )
}

export type { IChipProps }
export default Chip
