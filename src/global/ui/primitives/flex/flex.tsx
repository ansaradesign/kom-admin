import { ElementType } from 'react';

import { flexTV, FlexTvProps } from './classnames';

import { PolymorphicComponentProps } from '@/global/lib/types/polymorph';

type FlexBaseProps = FlexTvProps;

export type FlexProps<C extends ElementType> = PolymorphicComponentProps<C, FlexBaseProps>;

export const Flex = <T extends ElementType = 'div'>(props: FlexProps<T>) => {
  const { children, as: Component = 'div', justify, align, col, wrap, gap, inline, className, ...rest } = props;

  const FlexClassName = flexTV({
    justify,
    align,
    col,
    className,
    inline,
    wrap,
    gap,
  });

  return (
    <Component {...rest} className={FlexClassName}>
      {children}
    </Component>
  );
};
