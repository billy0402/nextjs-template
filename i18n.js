/** @type {import('next-translate').I18nConfig} */
const nextTranslateConfig = {
  locales: ['zh', 'en'],
  defaultLocale: 'zh',
  logBuild: false,
  logger: ({ namespace, i18nKey }) =>
    console.warn(`[next-translate]: ${namespace}:${i18nKey} is missing`),
  pages: {
    '*': ['common'],
    '/': ['home'],
    '/about': ['about'],
  },
};

module.exports = nextTranslateConfig;
