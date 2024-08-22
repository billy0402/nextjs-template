import type { PluginFunc } from 'dayjs';

import type { CustomFormat } from '@/helpers/datetime/plugins/custom-format';

declare const plugin: PluginFunc;
export = plugin;

declare module 'dayjs' {
  interface Dayjs {
    onlyDate(): string;
    displayDate(): string;
    onlyTime(): string;
    displayDatetime(): string;
    onlyYear(): string;
    customFormat(formatType: CustomFormat): string;
  }
}
