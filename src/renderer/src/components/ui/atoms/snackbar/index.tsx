import ErrorIcon from '@app/components/icons/error'
import SuccessIcon from '@app/components/icons/success'
import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
} from '@mui/base/Snackbar'
import { VariantProps, cva } from 'class-variance-authority'
import { ReactNode } from 'react'

// TODO; if button action text is provided than button action is required, same vice versa
// TODO: Warning icon is not exported properly from Figma, find a workaround
// Missing action button hover state, ask if it's something that must be implemented by design

const snackbar = cva(
  [
    'flex w-[320px] items-center rounded-2xl bg-neutral-800 py-2 pl-2 pr-5 text-white',
  ],
  {
    variants: {
      variant: {
        error: ['[&_.icon]:bg-red'],
        success: ['[&_.icon]:bg-green'],
        warning: ['[&_.icon]:bg-yellow'],
      },
    },
  },
)

interface ISnackbarProps
  extends MuiSnackbarProps,
    Required<Pick<VariantProps<typeof snackbar>, 'variant'>> {
  title: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  buttonAction?: () => void
  buttonActionTitle?: string
  includeLeftIcon?: boolean
  includeRightIcon?: boolean
}

const iconClassName = 'grid size-[32px] place-items-center rounded-full icon'

const icons = {
  error: (
    <div className={iconClassName}>
      <ErrorIcon />
    </div>
  ),
  warning: (
    <div className={iconClassName}>
      <ErrorIcon />
    </div>
  ),
  success: (
    <div className={iconClassName}>
      <SuccessIcon />
    </div>
  ),
}

function Snackbar(props: ISnackbarProps) {
  const {
    title,
    variant,
    leftIcon,
    rightIcon,
    buttonAction,
    includeLeftIcon,
    includeRightIcon,
    buttonActionTitle,
    ...restProps
  } = props

  return (
    <MuiSnackbar open className={snackbar({ variant })} {...restProps}>
      <div className='flex flex-1 items-center'>
        {!leftIcon ? includeLeftIcon && icons[variant!] : leftIcon}

        <span className='ml-4'>{title}</span>
      </div>

      <div className='flex items-center justify-between gap-4'>
        {!rightIcon ? includeRightIcon && icons[variant!] : rightIcon}

        {buttonAction && buttonActionTitle && (
          <button
            type='button'
            onClick={buttonAction}
            className='text-primary-300'
          >
            {buttonActionTitle}
          </button>
        )}
      </div>
    </MuiSnackbar>
  )
}

export type { ISnackbarProps }
export default Snackbar
