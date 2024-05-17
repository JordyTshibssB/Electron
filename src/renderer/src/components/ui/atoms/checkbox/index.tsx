import CheckIcon from '@app/components/icons/check'
import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, useState } from 'react'

const checkbox = cva(
  [
    'flex appearance-none items-center justify-center rounded-[5px] border px-[5px] py-1',
  ],
  {
    variants: {
      disabled: {
        false: ['hover:border-green-600'],
        true: ['pointer-events-none border-neutral-300 bg-neutral-300'],
      },
      size: {
        sm: 'h-[20px] w-[23px]',
        md: 'h-[24px] w-[26px]',
      },
      checked: {
        false:
          'border-neutral-200 bg-white hover:border-green-600 aria-disabled:bg-neutral-100',
        true: 'border-green-500 bg-green-500 hover:border-green-600 hover:bg-green-600 aria-disabled:border-neutral-300',
      },
    },
    defaultVariants: {
      size: 'md',
      checked: false,
      disabled: false,
    },
  },
)

interface ICheckboxProps
  extends Omit<ComponentProps<'input'>, 'disabled' | 'checked' | 'size'>,
    VariantProps<typeof checkbox> {}

// TODO: Component's borders are too thin, fix it
function Checkbox(props: ICheckboxProps) {
  const { checked = false, disabled = false, size } = props
  const [isChecked, setIsChecked] = useState<boolean>(!!checked)

  const handleIsCheckedChange = () => setIsChecked(!isChecked)

  return (
    <div className='flex items-center justify-center'>
      <input
        type='checkbox'
        aria-checked={isChecked}
        aria-disabled={!!disabled}
        onChange={handleIsCheckedChange}
        className={checkbox({ disabled, size, checked: isChecked })}
      />

      {isChecked && <CheckIcon className='pointer-events-none absolute' />}
    </div>
  )
}

export type { ICheckboxProps }
export default Checkbox
