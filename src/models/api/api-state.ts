import type { Enum } from '@/models/enum';

export type ApiStatusType = 'loading' | 'success' | 'failed';

export type ApiState<E extends keyof Enum = keyof Enum> = {
  error: { [key in E as `${key}Error`]: string | null };
  status: {
    [key in E as `${key}${Capitalize<ApiStatusType>}`]: boolean;
  };
};
