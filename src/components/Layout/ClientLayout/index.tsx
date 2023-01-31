import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
};

const ClientLayout = ({ children }: Props) => {
  return (
    <>
      <h1>ClientLayout</h1>
      <Link href='/admin'>Admin</Link>
      {children}
    </>
  );
};

export default ClientLayout;
