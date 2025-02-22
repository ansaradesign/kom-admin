import { tv } from '@kom-shared/lib';
import { VariantProps } from 'tailwind-variants';

export const flexTV = tv({
  base: '',
  variants: {
    justify: {
      center: 'justify-center',
      start: 'justify-start',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    align: {
      center: 'items-center',
      start: 'items-start',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    inline: {
      false: 'flex',
      true: 'inline-flex',
    },
    col: {
      true: 'flex-col',
    },
    wrap: {
      true: 'flex-wrap',
    },
    gap: {
      true: 'gap-4',
    },
  },
  defaultVariants: {
    gap: true,
    inline: false,
  },
});

export type FlexTvProps = VariantProps<typeof flexTV>;
