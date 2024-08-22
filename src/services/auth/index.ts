import type { AuthLoginIn, TokenPayload } from '@/models/auth';
import instance from '@/services/instance';

export function apiAuthLogin(data: AuthLoginIn) {
  return instance.post<TokenPayload>('/auth/token', data);
}
