// Button Component

import Icon, { IconName } from '../../atoms/icon';
import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

const button = cva(['inline-flex w-[320px] items-center gap-3 px-4'], {
  variants: {
    variant: {
      text: [
        'w-fit text-neutral-900 disabled:text-neutral-500 [&_path]:stroke-neutral-900 [&_path]:disabled:stroke-neutral-500',
      ],
      primary: [
        'bg-gradient-to-r from-[#F4716D] to-[#F8C054] text-white hover:bg-gradient-to-l disabled:bg-neutral-300 disabled:bg-none disabled:text-white [&_path]:stroke-white',
      ],
      outlined: [
        'disabled:bg-transparent border border-neutral-200 text-neutral-900 disabled:border-neutral-200 disabled:text-neutral-400 [&_path]:stroke-neutral-900 [&_path]:disabled:stroke-neutral-400',
      ],
      secondary: [
        'bg-neutral-100 text-neutral-900 disabled:bg-neutral-100 disabled:text-neutral-400 [&_path]:stroke-neutral-900 [&_path]:disabled:stroke-neutral-400',
      ],
      underlined: [
        'w-fit text-neutral-900 underline disabled:text-neutral-500 [&_path]:stroke-neutral-900 [&_path]:disabled:stroke-neutral-500',
      ],
    },
    size: {
      sm: ['h-[34px] rounded-[14px]'],
      md: ['h-[44px] rounded-2xl'],
      lg: ['h-[56px] rounded-[20px]'],
    },
  },
});

interface IButtonProps
  extends ComponentProps<'button'>,
    Required<VariantProps<typeof button>> {
  leftIcon?: IconName;
  rightIcon?: IconName;
}

const IconPlaceholder = <span className="visibility-none size-5" />;

function Button(props: IButtonProps) {
  const {
    variant,
    size,
    className,
    children,
    leftIcon,
    rightIcon,
    disabled,
    ...restProps
  } = props;

  return (
    <button
      type="button"
      disabled={disabled}
      className={twMerge(
        button({
          variant,
          size,
          className:
            leftIcon || rightIcon ? 'justify-between' : 'justify-center',
        }),
        className,
      )}
      {...restProps}
    >
      {leftIcon && <Icon name={leftIcon} aria-disabled={disabled} />}

      {rightIcon && !leftIcon && IconPlaceholder}

      {children}

      {rightIcon && <Icon name={rightIcon} aria-disabled={disabled} />}

      {leftIcon && !rightIcon && IconPlaceholder}
    </button>
  );
}

export type { IButtonProps };
export default Button;
