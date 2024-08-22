import type { InputHTMLAttributes } from 'react';

import type { RegisterOptions, UseFormReturn } from 'react-hook-form';

type BaseFieldConfig<T extends string = any> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'pattern'
> &
  RegisterOptions & {
    name: string; // override InputHTMLAttributes
    type: T; // override InputHTMLAttributes
    label: string;
    col?: number;
    compareObserver?: {
      observer: string;
      condition: (value: any) => boolean;
    };
  };

type DefaultFieldConfig = BaseFieldConfig & {
  type: Exclude<string, OptionsType | 'array'>;
};

export type OptionsType = 'select' | 'checkbox' | 'radio';

type OptionsFieldConfig = BaseFieldConfig<OptionsType> & {
  options: any[];
  displayOptions?: any[];
};

type ArrayFieldsConfig = BaseFieldConfig<'array'> & {
  fieldConfigs: FieldConfig[];
  arrayHeaderKey?: string; // field key to display in array header
};

export type FieldConfig<T extends string = any> = T extends OptionsType
  ? OptionsFieldConfig
  : T extends 'array'
    ? ArrayFieldsConfig
    : DefaultFieldConfig;

export type FieldProps<T extends string = any> = UseFormReturn & {
  fieldConfig: FieldConfig<T>;
};
