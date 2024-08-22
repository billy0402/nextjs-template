import { LocalStorageKey } from '@/enums/local-storage-key';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '@/helpers/local-storage';
import type { TokenPayload } from '@/models/auth';
import { queryClient } from '@/queries/query-client';

export function getToken() {
  return getLocalStorage<TokenPayload>(LocalStorageKey.TOKEN);
}

export function setToken(value: TokenPayload) {
  setLocalStorage<TokenPayload>(LocalStorageKey.TOKEN, value);
}

export function removeToken() {
  removeLocalStorage(LocalStorageKey.TOKEN);
  queryClient.clear();
}

export function hasToken() {
  return !!getToken();
}
