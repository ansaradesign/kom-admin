import { I18nProvider } from './i18n/i18n-provider';
import { QueryProvider } from './query';
import { ThemeProvider } from './theme';
import { ToastProvider } from './toast/toast-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>
        <QueryProvider>
          <ToastProvider>{children}</ToastProvider>
        </QueryProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}
