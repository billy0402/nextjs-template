import { useRouter } from 'next/router';

import type { Language } from '@/fixtures/languages';
import { defaultLanguage, i18nMapper } from '@/fixtures/languages';
import { dotKeysValue } from '@/helpers/object';

const useTranslation = () => {
  const { locale } = useRouter();

  const i18n = i18nMapper[locale as Language];
  const defaultValue = i18nMapper[defaultLanguage];

  const t = (key: string | undefined) => {
    if (!key) return '';

    return (
      dotKeysValue(i18n, key) ??
      dotKeysValue(defaultValue, key) ??
      key
    ).toString();
  };

  return { t };
};

export default useTranslation;
