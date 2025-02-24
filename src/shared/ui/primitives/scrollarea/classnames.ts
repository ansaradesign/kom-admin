import { tv } from '@kom-shared/lib';
import { VariantProps } from 'tailwind-variants';

export const scrollAreaTV = tv({
  slots: {
    root: '',
    scrollbar: 'p-[1px]',
    verticalScrollbar: 'w-2',
    horizontalScrollbar: 'h-2',
    thumb: 'bg-foreground/20 hover:bg-foreground/40 transition-colors rounded-full',
  },
});

export type ScrollAreaVariants = VariantProps<typeof scrollAreaTV>;
