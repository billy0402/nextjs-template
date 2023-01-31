import { LayoutType } from '@/enums/layout-type';

export const getMainRoute = (url: string) => url.split('/')[1];

export const toLayoutType = (url: string) => {
  const mainRoute = getMainRoute(url);

  switch (mainRoute) {
    case 'admin':
      return LayoutType.ADMIN;
    default:
      return LayoutType.CLIENT;
  }
};
