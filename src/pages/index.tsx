import type { NextPage } from 'next';

import Link from 'next/link';

import { languages } from '@/fixtures/languages';
import useTranslation from '@/hooks/useTranslation';

const HomePage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>Hello, world!</h1>
      <p>{t('HELLO')}</p>
      {languages.map(({ locale, label }) => (
        <Link key={locale} href='/' locale={locale}>
          {label}
        </Link>
      ))}
    </>
  );
};

export default HomePage;
