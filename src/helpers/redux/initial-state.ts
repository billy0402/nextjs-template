import type { ApiState } from '@/models/api/api-state';
import type { Enum } from '@/models/utils';

import { toApiStatus } from '@/helpers/redux/extra-reducers';

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
