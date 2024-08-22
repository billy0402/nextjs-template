import { act, renderHook, waitFor } from '@testing-library/react';

import { HttpStatusCode } from 'axios';

import wrapper from '@/__tests__/utils/wrapper';
import { BASE_API_URL } from '@/fixtures/constants';
import type { TokenPayload } from '@/models/auth';
import { apiAuthLogin } from '@/services/auth';

import { useAuthLogin } from '.';

describe('react query auth module', () => {
  test('login api using fetch', async () => {
    const response = await fetch(`${BASE_API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ username: 'test', password: 'test' }),
    });
    const responseData = (await response.json()) as TokenPayload;
    expect(response.status).toBe(HttpStatusCode.Ok);
    expect(response.statusText).toBe('OK');
    expect(responseData).toHaveProperty('access');
    expect(responseData).toHaveProperty('refresh');
  });

  test('login api using axios', async () => {
    const response = await apiAuthLogin({ username: 'test', password: 'test' });
    expect(response).toHaveProperty('access');
    expect(response).toHaveProperty('refresh');
  });

  test('login api using react query', async () => {
    const { result } = renderHook(() => useAuthLogin(() => undefined), {
      wrapper,
    });

    act(() => result.current.mutate({ username: 'test', password: 'test' }));
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toHaveProperty('access');
    expect(result.current.data).toHaveProperty('refresh');
  });
});
