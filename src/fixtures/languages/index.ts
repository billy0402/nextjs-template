export enum Language {
  zh = 'zh',
  en = 'en',
}

export const defaultLanguage = Language.zh;

export const languages = [
  { label: '中文', locale: Language.zh },
  { label: 'EN', locale: Language.en },
];

// export const i18nMapper: Record<Language, Partial<typeof zhI18n>> = {
//   [Language.zh]: zhI18n,
//   [Language.en]: enI18n,
// };
