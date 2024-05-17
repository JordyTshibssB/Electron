import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, useState } from 'react'

const radioButton = cva(['flex items-center gap-[0.5]'], {
  variants: {
    disabled: {
      true: ['pointer-events-none cursor-not-allowed'],
    },
    size: {
      sm: [
        '[&>input[type=radio]]:after:w-[16px]',
        '[&>input[type=radio]]:after:h-[16px]',
      ],
      md: [
        '[&>input[type=radio]]:after:w-[20px]',
        '[&>input[type=radio]]:after:h-[20px]',
      ],
    },
  },
  defaultVariants: { size: 'md', disabled: false },
})

const radioButtonInput = cva(
  [
    'm-0 appearance-none rounded-full bg-white after:relative after:block after:rounded-full after:content-[""]',
  ],
  {
    variants: {
      disabled: {
        false: [''],
        true: ['bg-neutral-100 after:border-neutral-100 after:bg-neutral-100'],
      },
      checked: {
        false: ['after:border-[0.7px] after:border-neutral-200'],
        true: ['after:border-[5px] hover:after:border-[5px]'],
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        className: [
          'border-neutral-300 bg-neutral-300 after:border-[5px] after:border-neutral-300',
        ],
      },
      {
        checked: true,
        disabled: false,
        className: ['after:border-green-500 hover:after:border-green'],
      },
      {
        checked: false,
        disabled: false,
        className: ['hover:after:border-green'],
      },
    ],
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
)

interface RadioButtonVariants
  extends VariantProps<typeof radioButton>,
    VariantProps<typeof radioButtonInput> {}

interface IRadioButtonProps
  extends Omit<ComponentProps<'input'>, 'checked' | 'size' | 'disabled'>,
    RadioButtonVariants {
  checked?: boolean
  label?: string
}

function RadioButton({
  size,
  checked = false,
  disabled = false,
  ...props
}: IRadioButtonProps) {
  const [isChecked, setIsChecked] = useState<boolean>(checked)

  return (
    <div
      role='presentation'
      onClick={() => setIsChecked(!isChecked)}
      className={radioButton({ size, disabled })}
      {...props}
    >
      <input
        type='radio'
        className={radioButtonInput({ checked: isChecked, disabled })}
        // TODO add accessibility attributes
        {...props}
      />
      {/* // TODO: Fix, label must be provided by the parent instead of being nested inside of this component itself */}
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={props.id} />
    </div>
  )
}

export type { IRadioButtonProps }
export default RadioButton
