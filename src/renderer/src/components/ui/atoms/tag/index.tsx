import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

/*
  Does this component have concrete predefined states and variants like "Escalated", "Completed", "In progress"
  if does variants are going to be used throughout the application find their exact meaning and use cases
*/
const tag = cva(
  ['flex h-[32px] w-fit items-center gap-[6.5px] rounded-full p-1 px-[6.5px]'],
  {
    variants: {
      color: {
        escalated: ['bg-red-200 text-red-700'],
        completed: ['bg-green-200 text-green-800'],
        inProgress: ['bg-yellow-200 text-yellow-800'],
      },
    },
  },
)

// TODO: either bgColor must be provided or color, make so that providing both at the same time cause an ts error
interface ITagProps
  extends Omit<ComponentProps<'div'>, 'color'>,
    VariantProps<typeof tag> {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  bgColor?: string
}

function Tag(props: ITagProps) {
  const {
    color,
    bgColor,
    children,
    leftIcon,
    rightIcon,
    className,
    ...restProps
  } = props

  if (!color && !bgColor) {
    throw new Error(
      'color property is required on Tag component, please provide it',
    )
  }

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={twMerge(tag({ color }), className)}
      {...restProps}
    >
      <div className={!leftIcon ? 'ml-1' : ''}>{leftIcon}</div>

      {children}

      <div className={!rightIcon ? 'mr-1' : ''}>{rightIcon}</div>
    </div>
  )
}

export type { ITagProps }
export default Tag
