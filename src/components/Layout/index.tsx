import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { LayoutType } from '@/enums/layout-type';
import { toLayoutType } from '@/helpers/router';
import useAppDispatch from '@/redux/hooks/useAppDispatch';
import useAppSelector from '@/redux/hooks/useAppSelector';
import { setLayoutType } from '@/redux/reducers/layout';

import AdminLayout from './AdminLayout';
import ClientLayout from './ClientLayout';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { pathname } = router;

  const { layoutType } = useAppSelector((state) => state.layout);

  useEffect(() => {
    const newLayoutType = toLayoutType(pathname);
    if (layoutType === newLayoutType) return;
    dispatch(setLayoutType(newLayoutType));
  }, [dispatch, layoutType, pathname]);

  return (
    <>
      {layoutType === LayoutType.ADMIN && <AdminLayout>{children}</AdminLayout>}
      {layoutType === LayoutType.CLIENT && (
        <ClientLayout>{children}</ClientLayout>
      )}
    </>
  );
};

export default Layout;
