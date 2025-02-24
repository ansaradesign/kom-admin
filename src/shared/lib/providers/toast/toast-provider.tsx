import { Toaster } from 'sonner';

import { useTheme } from '../theme';

export function IsolatedToast() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      richColors
      theme={resolvedTheme}
      position='bottom-right'
      visibleToasts={5}
      className='pointer-events-auto'
      toastOptions={{ className: 'z-100' }}
    />
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <IsolatedToast />
      {children}
    </>
  );
}
