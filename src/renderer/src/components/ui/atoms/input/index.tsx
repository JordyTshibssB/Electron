import { Input as MuiInput, InputProps as MuiInputProps } from '@mui/base/input'
import { VariantProps, cva } from 'class-variance-authority'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const container = cva(['flex flex-col gap-2'], {
  variants: {
    variant: {
      normal: [''],
      error: ['[&>span]:text-red'],
      success: ['[&>span]:text-green'],
      warning: ['[&>span]:text-yellow']
    }
  }
})

const input = cva(
  [
    'flex items-center justify-between rounded-lg border-[0.5px] [&>input]:mx-2',
    'px-4 py-[17px] text-md font-light [&>input]:w-full [&>input]:outline-none',
    '[&>input]:placeholder:text-neutral !bg-inherit'
  ],
  {
    variants: {
      variant: {
        normal: ['border-neutral-200 [&>svg_path]:stroke-neutral'],
        success: ['border-green-600 bg-green-100 [&>input]:bg-green-100'],
        warning: ['border-yellow-600 bg-yellow-100 [&>input]:bg-yellow-100'],
        error: ['border-red-600 bg-red-100 [&>.bottom-message]:text-red-200 [&>input]:bg-red-100']
      }
    }
  }
)

type IInputProps = MuiInputProps &
  VariantProps<typeof input> & {
    message?: ReactNode
  }

function Input(props: IInputProps) {
  const { variant, message, className, ...restProps } = props

  return (
    <div className={container({ variant })}>
      <MuiInput
        className={twMerge(input({ variant, className }))}
        slotProps={{ input: { className: 'bg-[#1b1b1f] text-white' } }}
        {...restProps}
      />
      {typeof message === 'string' ? <span className="text-sm">{message}</span> : message}
    </div>
  )
}

export type { IInputProps }
export default Input
