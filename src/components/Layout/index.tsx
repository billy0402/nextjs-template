import { LayoutType } from '@/enums/layout-type';
import useAppSelector from '@/hooks/useAppSelector';

import AdminLayout from './AdminLayout';
import ClientLayout from './ClientLayout';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { layoutType } = useAppSelector((state) => state.layout);

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
