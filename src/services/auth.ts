import type { AuthLoginRequest, AuthLoginResponse } from '@/models/auth';
import instance from '@/services/utils/instance';

export function apiAuthLogin(data: AuthLoginRequest) {
  return instance.post<AuthLoginResponse>('/auth/token', data);
}
