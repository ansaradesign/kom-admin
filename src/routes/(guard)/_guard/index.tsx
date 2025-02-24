import { useTheme } from '@kom-shared/lib';
import { Sheet, SheetContent, SheetHeader } from '@kom-shared/ui/overlays';
import { Flex } from '@kom-shared/ui/primitives';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/(guard)/_guard/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { theme, setTheme } = useTheme();

  const [open, setOpen] = useState(false);

  return (
    <Flex>
      <button onClick={() => setOpen(true)}>Открыть боковое меню</button>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme}</button>

      <Sheet align='right' open={open} onOpenChange={setOpen}>
        <SheetHeader>ds</SheetHeader>
        <SheetContent>
          <div className='bg-default h-200 w-full'></div>
          <div className='bg-default h-200 w-full'></div>
        </SheetContent>
      </Sheet>
    </Flex>
  );
}
