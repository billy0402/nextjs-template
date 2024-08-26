import { Link } from '@chakra-ui/next-js';
import useTranslation from 'next-translate/useTranslation';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('about:title')}</h1>
      <p>{t('about:description')}</p>
      <Link href='/'>{t('common:home')}</Link>
    </div>
  );
};

export default AboutPage;
