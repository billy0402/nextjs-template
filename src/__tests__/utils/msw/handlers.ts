import type { HttpHandler } from 'msw';

import { getAuthMock } from '@/services/endpoints/auth/auth.msw';
import { getDepartmentMock } from '@/services/endpoints/department/department.msw';
import { getMethodMock } from '@/services/endpoints/method/method.msw';
import { getRoleMock } from '@/services/endpoints/role/role.msw';
import { getUserMock } from '@/services/endpoints/user/user.msw';

export const handlers: HttpHandler[] = [
  ...getAuthMock(),
  ...getDepartmentMock(),
  ...getMethodMock(),
  ...getRoleMock(),
  ...getUserMock(),
];
