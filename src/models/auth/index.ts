export type AuthLoginIn = {
  username: string;
  password: string;
};

export type TokenPayload = {
  access: string;
  refresh: string;
};
