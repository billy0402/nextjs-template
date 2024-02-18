import type { HttpHandler } from 'msw';
import { http, HttpResponse } from 'msw';

import { BASE_API_URL } from '@/fixtures/constants';

function apiUrl(path: string) {
  return `${BASE_API_URL}${path}`;
}

export const handlers: HttpHandler[] = [
  http.get(apiUrl('/auth/token'), () => {
    return HttpResponse.json([
      {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      },
    ]);
  }),
];
