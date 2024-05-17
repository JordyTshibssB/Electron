import Box from '@app/components/atoms/box'
import CrossIcon from '@app/components/icons/cross'
import { VariantProps, cva } from 'class-variance-authority'
import { ReactNode } from 'react'

const uploadProgress = cva(['flex flex-col gap-4'], {
  variants: {
    error: {
      true: ['[&_.bottom-item]:text-red'],
      false: ['[&_.bottom-item]:text-neutral'],
    },
  },
})

const uploadProgressContent = cva(
  [
    'flex h-[64px] w-[320px] items-center justify-between gap-4 rounded-lg px-4 py-[28px]',
  ],
  {
    variants: {
      uploaded: {
        false: ['bg-neutral-100'],
        true: ['border border-neutral-200 bg-white'],
      },
    },
  },
)

interface IUploadProgressProps
  extends VariantProps<typeof uploadProgress>,
    VariantProps<typeof uploadProgressContent> {
  title: string
  error?: boolean
  progress: number
  leftIcon?: ReactNode
  // TODO: figure out better naming for {bottomItem}
  bottomItem?: ReactNode
  includeCloseIcon?: boolean
}

// TODO: Refactor component and add all the states and cases
// Component behaves differently depending on the file type that is being uploaded
function UploadProgress(props: IUploadProgressProps) {
  const { error, title, progress, leftIcon, bottomItem, includeCloseIcon } =
    props

  return (
    <div className={uploadProgress({ error })}>
      <div className={uploadProgressContent({ uploaded: progress === 100 })}>
        <div className='flex w-full items-center gap-4'>
          {leftIcon}

          <div className='flex w-full flex-col gap-1'>
            <span>{title}</span>

            {progress !== 100 && (
              <div className='h-[2px] bg-neutral-300'>
                <div
                  style={{ width: `${progress}%` }}
                  className='h-full bg-gradient-to-r from-primary-gr-from to-primary-gr-to'
                />
              </div>
            )}
          </div>
        </div>

        {includeCloseIcon && (
          <button
            type='button'
            aria-label='close'
            className='flex aspect-square size-[32px] items-center justify-center rounded-lg bg-neutral-200'
          >
            <CrossIcon className='[&>path]:stroke-neutral-700' />
          </button>
        )}
      </div>

      {typeof bottomItem === 'string' ? (
        <div className='bottom-item flex items-center gap-1 text-sm'>
          <Box center size='md' color='red' shape='square' rounded>
            <CrossIcon className='size-[6px] [&>path]:stroke-white' />
          </Box>

          <span>{bottomItem}</span>
        </div>
      ) : (
        bottomItem
      )}
    </div>
  )
}

export type { IUploadProgressProps }
export default UploadProgress
