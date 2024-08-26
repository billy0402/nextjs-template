import Link from 'next/link';
import { useRouter } from 'next/router';

import { languages } from '@/fixtures/languages';

const LanguageSwitcher = () => {
  const router = useRouter();

  const { pathname } = router;

  return (
    <>
      {languages.map(({ locale, label }) => (
        <Link key={locale} href={pathname} locale={locale}>
          {label}
        </Link>
      ))}
    </>
  );
};

export default LanguageSwitcher;
