import { KnownStorageItems, StorageItem, StorageKeys } from './types';

class StorageService {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  /**
   * Получает значение для ключа. Можно указать тип через дженерик, чтобы получить типизированное значение.
   * @example
   * ```ts
   * const user = LocalStorageService.getItem<User>('user');
   * ```
   */
  getItem<K extends StorageKeys>(key: K): KnownStorageItems[K]['value'] | null {
    const item = this.storage.getItem(key);

    if (item) {
      try {
        const parsedItem = JSON.parse(item) as StorageItem<KnownStorageItems[K]['value']>;

        if (parsedItem.expiresAt && Date.now() > parsedItem.expiresAt) {
          this.removeItem(key);

          return null;
        }

        return parsedItem.value;
      } catch {
        return null;
      }
    }

    return null;
  }

  /**
   * Устанавливает значение для ключа.
   */
  setItem<K extends StorageKeys>(key: K, value: KnownStorageItems[K]['value'], expiresIn?: number): void {
    try {
      const storageItem: StorageItem<KnownStorageItems[K]['value']> = {
        value,
        expiresAt: expiresIn ? Date.now() + expiresIn : null,
      };

      this.storage.setItem(key, JSON.stringify(storageItem));
    } catch {
      //
    }
  }

  /**
   * Удаляет ключ из хранилища
   */
  removeItem(key: StorageKeys): void {
    this.storage.removeItem(key);
  }

  /**
   * Очищает хранилище
   */
  clear(): void {
    this.storage.clear();
  }
}

export const LocalStorageService = new StorageService(window.localStorage);
export const SessionStorageService = new StorageService(window.sessionStorage);
