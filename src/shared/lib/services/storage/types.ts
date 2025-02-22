import { LocalStorageKeys } from '@kom-shared/config';
import { Theme } from '@kom-shared/lib/providers/theme/use-theme';

export type StorageDataType = string | number | boolean | object;
export type StorageKeys = `${LocalStorageKeys}`;

export interface StorageItem<T = StorageDataType> {
  value: T;
  expiresAt: number | null;
}

interface StorageValues {
  theme: Theme;
}

export type KnownStorageItems = {
  [K in StorageKeys]: StorageItem<StorageValues[K]>;
};
