import { LinguiConfig } from '@lingui/conf';

const config: LinguiConfig = {
  locales: ['en', 'ru'],
  sourceLocale: 'ru',

  catalogs: [
    {
      path: '<rootDir>/src/global/i18n/locales/{locale}/messages',
      include: ['<rootDir>/src'],
      exclude: ['**/node_modules/**'],
    },
  ],

  format: 'po',
};

export default config;
