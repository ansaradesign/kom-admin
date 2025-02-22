import { I18nProvider } from './i18n/i18n-provider';
import { QueryProvider } from './query';
import { ThemeProvider } from './theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>
        <QueryProvider>{children}</QueryProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}
