import { useMutation } from '@tanstack/react-query';

import { setToken } from '@/helpers/token';
import { apiAuthLogin } from '@/services/auth';

export const useAuthLogin = (onSuccess: () => void) => {
  return useMutation({
    mutationFn: apiAuthLogin,
    onSuccess: (data) => {
      setToken(data);
      onSuccess();
    },
  });
};
