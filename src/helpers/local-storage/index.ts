import type { LocalStorageKey } from '@/enums/local-storage-key';
import { isBrowser } from '@/helpers/utils';

export function getLocalStorage<T>(key: LocalStorageKey): T | null {
  return isBrowser() ? JSON.parse(localStorage.getItem(key) ?? 'null') : null;
}

export function setLocalStorage<T>(key: LocalStorageKey, data: T) {
  const newValue = JSON.stringify(data);
  localStorage.setItem(key, newValue);
  dispatchEvent(new StorageEvent('storage'));
}

export function removeLocalStorage(key: LocalStorageKey) {
  localStorage.removeItem(key);
  dispatchEvent(new StorageEvent('storage'));
}
