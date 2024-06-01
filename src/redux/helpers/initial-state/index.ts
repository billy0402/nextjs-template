import type { Enum } from '@/models/utils';
import { toApiStatus } from '@/redux/helpers/extra-reducers';
import type { ApiState } from '@/redux/models/api/api-state';

/**
 * Create new api state object for redux action setup default value.
 * This function will create status and error object for api state.
 * The status object will be created from enum value with default value false.
 * The error object will be created from enum value with default value null
 *
 * @param {Enum} enumType - A api action enum
 * @return {ApiState} A api state object with status and error default value
 *
 * @example
 *
 *     newApiState<AuthState>(AuthAction)
 *     // {
 *     //   "status": {
 *     //     "loginLoading": false,
 *     //     "loginSuccess": false,
 *     //     "loginFailed": false
 *     //   },
 *     //   "error": {
 *     //     "loginError": null
 *     //   }
 *     // }
 */
export function newApiState<T extends ApiState>(enumType: Enum) {
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
}
