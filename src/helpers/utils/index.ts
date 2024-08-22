export const isArray = (object: any) => Array.isArray(object);

export const isString = (value: any) => typeof value === 'string';

export const isNumber = (value: any) => typeof value === 'number';

export const isBoolean = (value: any) => typeof value === 'boolean';

export const isFunction = (value: any) => typeof value === 'function';

export const isSymbol = (value: any) => typeof value === 'symbol';

export const isNull = (value: any) => value === null;

export const isUndefined = (value: any) => value === undefined;

export const isNullOrUndefined = (value: any) =>
  value === undefined || value === null;

export const isNullOrEmpty = (value: any) =>
  value === undefined || value === null || value === '';

export const isObject = (value: any) =>
  !isArray(value) && value !== null && typeof value === 'object';

export const isBrowser = () => typeof window !== 'undefined';
