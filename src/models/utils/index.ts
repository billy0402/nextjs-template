export type Enum = {
  [key: string]: string;
};

export type ValueOf<T> = T[keyof T];
