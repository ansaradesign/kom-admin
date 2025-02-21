import { useEffect, useState } from 'react';

import { Theme, ThemeProviderContext } from './use-theme';

import { LocalStorageService } from '@/global/lib/services/storage';
import { LocalStorageKeys } from '@/global/config/constants';

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: `${LocalStorageKeys.THEME}`;
}

export function ThemeProvider({ children, defaultTheme = 'system', storageKey = 'theme', ...props }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => LocalStorageService.getItem(storageKey)! || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      root.classList.add(systemTheme);

      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
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
