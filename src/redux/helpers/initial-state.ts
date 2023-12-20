import type { Enum } from '@/models/utils';
import { toApiStatus } from '@/redux/helpers/extra-reducers';
import type { ApiState } from '@/redux/models/api/api-state';

export const newApiState = <T extends ApiState>(enumType: Enum) => {
  return {
    status: Object.values(enumType).reduce(
      (obj, _enum) => ({ ...obj, ...toApiStatus(_enum, null) }),
      {},
    ) as T['status'],
    error: Object.values(enumType).reduce(
      (obj, _enum) => ({ ...obj, [`${_enum}Error`]: null }),
      {},
    ) as T['error'],
  };
};
