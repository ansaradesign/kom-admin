import * as Dialog from '@radix-ui/react-dialog';
import { PiXBold } from 'react-icons/pi';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { sheetTV, SheetVariants } from './classnames';

interface SheetProps extends Dialog.DialogProps, SheetVariants {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  overlayProps?: Dialog.DialogOverlayProps;
  contentProps?: Dialog.DialogContentProps;
  closeProps?: Dialog.DialogCloseProps;
  hideClose?: boolean;
}

export function Sheet(props: SheetProps) {
  const { overlayProps, contentProps, closeProps, children, hideClose, align, size, ...rest } = props;

  const { content, overlay, close } = sheetTV({ align, size });

  return (
    <Dialog.Root {...rest}>
      <Dialog.Portal>
        <Dialog.Overlay {...overlayProps} className={overlay()} />
        <Dialog.Content {...contentProps} className={content()}>
          {!hideClose && (
            <Dialog.Close {...closeProps} className={close()}>
              <PiXBold className='size-5 opacity-60' />
            </Dialog.Close>
          )}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

interface SheetHeaderProps extends Dialog.DialogTitleProps {
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  restContent?: React.ReactNode;
}

export function SheetHeader(props: SheetHeaderProps) {
  const { wrapperProps, restContent, ...rest } = props;

  return (
    <div className='flex flex-col gap-6 p-6' {...wrapperProps}>
      <Dialog.Title {...rest} className='text-2xl font-semibold' />
      <VisuallyHidden asChild>
        <Dialog.Description />
      </VisuallyHidden>
      {restContent}
    </div>
  );
}

export function SheetContent(props: React.HTMLAttributes<HTMLDivElement>) {
  const { ...rest } = props;

  return <div className='flex h-full flex-col gap-6 px-6' {...rest}></div>;
}

export function SheetFooter(props: React.HTMLAttributes<HTMLDivElement>) {
  const { ...rest } = props;

  return <div className='flex gap-4 p-6' {...rest}></div>;
}
