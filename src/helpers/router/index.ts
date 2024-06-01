import { LayoutType } from '@/enums/layout-type';

/**
 * Get main route from url.
 *
 * @param {string} url - A url string
 * @return {string} A main route string
 *
 * @example
 *
 *     getMainRoute('/admin/dashboard') // 'admin'
 */
export function getMainRoute(url: string) {
  return url.split('/')[1];
}

/**
 * Use url to get layout type.
 *
 * @param {string} url - A url string
 * @return {LayoutType} A layout type string
 *
 * @example
 *
 *     toLayoutType('/admin/dashboard') // LayoutType.ADMIN
 */
export function toLayoutType(url: string) {
  const mainRoute = getMainRoute(url);

  switch (mainRoute) {
    case 'admin':
      return LayoutType.ADMIN;
    default:
      return LayoutType.CLIENT;
  }
}
