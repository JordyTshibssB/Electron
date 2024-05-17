import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const box = cva(['w-fit'], {
  variants: {
    shape: {
      square: ['aspect-square'],
      rectangle: ['aspect-video'],
    },
    color: {
      red: ['bg-red'],
      green: ['bg-green'],
      yellow: ['bg-yellow'],
      primary: ['bg-primary'],
    },
    size: {
      xs: ['size-1'],
      sm: ['size-2'],
      md: ['size-3'],
      lg: ['size-4'],
      xl: ['size-5'],
    },
    center: {
      true: ['flex items-center justify-center'],
      false: [''],
    },
    rounded: {
      true: ['rounded-full'],
      false: [],
    },
  },
  defaultVariants: {
    shape: 'square',
    color: 'primary',
    center: false,
  },
})

interface IBoxProps
  extends Omit<ComponentProps<'div'>, 'color'>,
    VariantProps<typeof box> {}

function Box(props: IBoxProps) {
  const { shape, color, size, center, className, rounded, ...restProps } = props

  return (
    <div
      className={box({ shape, color, size, center, rounded, className })}
      {...restProps}
    />
  )
}

export default Box
