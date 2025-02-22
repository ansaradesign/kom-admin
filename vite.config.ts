import MillionLint from '@million/lint';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { lingui } from '@lingui/vite-plugin';
import { VitePWA } from 'vite-plugin-pwa';

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
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      strategies: 'generateSW',
      includeAssets: ['**/*'],
      manifest: {
        name: 'Ключи Москвы',
        short_name: 'Ключи Москвы',
        description: 'Админ панель',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        start_url: '/',
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,jpg,jpeg,json,txt}', 'assets/**'],
        maximumFileSizeToCacheInBytes: 10000000, // 10MB
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              networkTimeoutSeconds: 10,
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24, // 24 часа
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /.*/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'all-cache',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 дней
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
        navigateFallback: 'index.html',
        navigateFallbackDenylist: [/^\/api\//],
        cleanupOutdatedCaches: true,
        sourcemap: true,
        skipWaiting: true,
        clientsClaim: true,
        disableDevLogs: true,
        navigationPreload: true,
      },
      devOptions: {
        enabled: false,
        type: 'module',
        suppressWarnings: true,
        navigateFallbackAllowlist: [/^\/$/],
      },
    }),
  ],
  resolve: {
    alias: {
      '@kom': '/src',
      '@kom-shared': '/src/shared',
      '@kom-domains': '/src/domains',
    },
  },
});
