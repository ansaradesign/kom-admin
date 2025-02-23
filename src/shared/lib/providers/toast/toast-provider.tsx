import { Toaster } from 'sonner';

import { useTheme } from '../theme';

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <Toaster richColors theme={resolvedTheme} position='bottom-right' visibleToasts={5} />
      {children}
    </>
  );
}
