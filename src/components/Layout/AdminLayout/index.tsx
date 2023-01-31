import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <h1>AdminLayout</h1>
      <Link href='/'>Client</Link>
      {children}
    </>
  );
};

export default AdminLayout;
