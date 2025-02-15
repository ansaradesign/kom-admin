import MillionLint from '@million/lint';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { lingui } from '@lingui/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    MillionLint.vite({
      enabled: false,
    }),
    TanStackRouterVite({ autoCodeSplitting: true }),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', { target: '19' }], '@lingui/babel-plugin-lingui-macro'],
      },
    }),
    tailwindcss(),
    lingui({ configPath: './lingui.config.ts' }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
