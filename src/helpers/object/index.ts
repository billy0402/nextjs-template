export const dotKeysValue = (
  value: { [key: string]: any },
  keysString: string,
) => {
  const keys = keysString.split('.');

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    if (!value[key]) return undefined;
    // eslint-disable-next-line no-param-reassign
    value = value[key];
  }

  return value;
};
