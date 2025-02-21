import { LocalStorageKeys } from '@/global/config/constants';
import { Theme } from '@/global/providers/theme/use-theme';

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
