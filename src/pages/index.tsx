import type { NextPage } from 'next';

import { Link } from '@chakra-ui/next-js';
import useTranslation from 'next-translate/useTranslation';

const HomePage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home:welcome')}</h1>
      <p>{t('home:description')}</p>
      <Link href='/about'>{t('common:about')}</Link>
    </div>
  );
};

export default HomePage;
