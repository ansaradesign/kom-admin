export enum LocalStorageKeys {
  THEME = 'theme',
}

const TIME_MS = {
  SECOND: 1000,
  MINUTE: 1000 * 60,
  HOUR: 1000 * 60 * 60,
  DAY: 1000 * 60 * 60 * 24,
  MONTH: 1000 * 60 * 60 * 24 * 30,
  YEAR: 1000 * 60 * 60 * 24 * 365,
};

export const APP_CONSTS = {
  LOCAL_STORAGE_KEYS: LocalStorageKeys,
  TIME_MS,
} as const;
