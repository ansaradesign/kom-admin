import { useTheme } from '@kom-shared/lib';
import { Modal, ModalFooter, ModalHeader } from '@kom-shared/ui/overlays';
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

      <Modal open={open} onOpenChange={setOpen}>
        <ModalHeader>Тест</ModalHeader>
        <ModalFooter></ModalFooter>
      </Modal>
    </Flex>
  );
}
