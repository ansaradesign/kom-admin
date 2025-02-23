import { useEffect, useState } from 'react';
import { LocalStorageKeys } from '@kom-shared/config';
import { LocalStorageService } from '@kom-shared/lib/services';

import { Theme, ThemeProviderContext } from './use-theme';

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: `${LocalStorageKeys.THEME}`;
}

export function ThemeProvider({ children, defaultTheme = 'system', storageKey = 'theme', ...props }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => LocalStorageService.getItem(storageKey)! || defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() =>
    theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      root.classList.add(systemTheme);
      setResolvedTheme(systemTheme);

      return;
    }

    root.classList.add(theme);
    setResolvedTheme(theme);
  }, [theme]);

  const value = {
    theme,
    resolvedTheme,
    setTheme: (theme: Theme) => {
      LocalStorageService.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
