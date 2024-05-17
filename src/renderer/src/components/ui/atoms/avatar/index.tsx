import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const avatar = cva(['relative z-10 aspect-square [&>img]:rounded-full'], {
  variants: {
    size: {
      xs: ['size-6  [&>.status-badge]:size-[6px]'],
      sm: ['size-8 [&>.status-badge]:size-2'],
      md: ['size-10 [&>.status-badge]:size-[10px]'],
      lg: ['size-12 [&>.status-badge]:size-3'],
      '2lg': ['size-14 [&>.status-badge]:size-[14px]'],
      '3lg': ['size-16 [&>.status-badge]:size-4'],
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

interface IAvatarProps
  extends ComponentProps<'img'>,
    Required<Pick<VariantProps<typeof avatar>, 'size'>> {
  online?: boolean
}

/*
  TODO: Component must also support displaying person's initials in case of no actual image provided
  TODO: Make sure that person image is a default fallback image in case of missing avatar of failure to load it
*/

function Avatar(props: IAvatarProps) {
  const { className, size, online, ...restProps } = props

  const status = online ? 'online' : 'offline'

  return (
    <div className={avatar({ size, className })}>
      <img alt="Person's avatar" {...restProps} />

      {/* TODO: Maybe implement custom badge component or use MUI base's Badge component. Using custom Box component is also an option */}
      {online && (
        <div
          aria-label={status}
          className='status-badge absolute -bottom-[2px] right-0 z-20 box-content aspect-square rounded-full border-[1.5px] border-white bg-green'
        />
      )}
    </div>
  )
}

export type { IAvatarProps }
export default Avatar
