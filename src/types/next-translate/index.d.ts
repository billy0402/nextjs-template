import type { I18n, Paths, Translate } from 'next-translate';

import type about from 'locales/zh/about.json';
import type common from 'locales/zh/common.json';
import type home from 'locales/zh/home.json';

type Tail<T> = T extends [unknown, ...infer Rest] ? Rest : never;

export type TranslationKeys = {
  common: Paths<typeof common>;
  home: Paths<typeof home>;
  about: Paths<typeof about>;
};

type NamespacedTranslationKeys = {
  [Namespace in keyof TranslationKeys]: `${Namespace}:${TranslationKeys[Namespace]}`;
}[keyof TranslationKeys];

export type TypeSafeTranslate<Namespace extends keyof TranslationKeys> = {
  t: {
    (
      key: TranslationKeys[Namespace] | NamespacedTranslationKeys,
      ...rest: Tail<Parameters<Translate>>
    ): string;
    <T extends string>(template: TemplateStringsArray): T;
  };
} & Omit<I18n, 't'>;

declare module 'next-translate/useTranslation' {
  export default function useTranslation<
    Namespace extends keyof TranslationKeys,
  >(defaultNamespace: Namespace): TypeSafeTranslate<Namespace>;
}
