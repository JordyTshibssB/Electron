import * as Icons from '../../icons';
import { ComponentProps } from 'react';

interface IIconProps extends Omit<ComponentProps<'svg'>, 'name'> {
  name: keyof typeof Icons;
}

// TODO: add a size prop to control the width and height of the component
function Icon(props: IIconProps) {
  const { name, ...restProps } = props;

  const Comp = Icons[name];

  return <Comp {...restProps} />;
}

type IconName = keyof typeof Icons;

export type { IconName };
export default Icon;
