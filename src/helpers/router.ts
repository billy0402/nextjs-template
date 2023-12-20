import { LayoutType } from '@/enums/layout-type';

export function getMainRoute(url: string) {
  return url.split('/')[1];
}

export function toLayoutType(url: string) {
  const mainRoute = getMainRoute(url);

  switch (mainRoute) {
    case 'admin':
      return LayoutType.ADMIN;
    default:
      return LayoutType.CLIENT;
  }
}
