import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, useState } from 'react'

const toggle = cva(
  [
    'relative rounded-full p-[4px] after:absolute after:top-[50%] after:block',
    'after:-translate-y-1/2 after:rounded-full after:transition-all after:duration-150 after:content-[""]',
    '[&_input]:disabled:pointer-events-none',
  ],
  {
    variants: {
      disabled: {
        true: ['bg-neutral-300 after:bg-neutral-200'],
        false: [
          'bg-neutral-200 after:bg-white hover:bg-neutral-300 data-[state=on]:bg-green-500 data-[state=on]:hover:bg-green',
        ],
      },
      size: {
        md: [
          'h-[28px] w-[52px] after:left-[10%] after:size-[20px] data-[state=on]:after:left-[28px]',
        ],
        lg: [
          'h-[32px] w-[62px] after:left-[2px] after:size-[28px] data-[state=on]:after:left-[32px]',
        ],
      },
    },
  },
)

interface IToggleProps
  extends VariantProps<typeof toggle>,
    Omit<ComponentProps<'input'>, 'disabled' | 'size'> {
  pressed?: boolean
}

function Toggle(props: IToggleProps) {
  const { disabled = false, pressed = false, size } = props
  const [isPressed, setIsPressed] = useState<boolean>(pressed)

  const handleToggle = () => setIsPressed(!isPressed)

  return (
    // TODO: See if it's possible to use MUI's switch component
    <div
      role='presentation'
      onClick={handleToggle}
      data-state={isPressed ? 'on' : 'off'}
      className={toggle({ size, disabled })}
      style={{ pointerEvents: disabled ? 'none' : 'all' }}
    >
      <input
        type='button'
        disabled={!!disabled}
        aria-pressed={isPressed}
        aria-disabled={!!disabled}
        data-state={isPressed ? 'on' : 'off'}
      />
    </div>
  )
}

export type { IToggleProps }
export default Toggle
