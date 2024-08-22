import type { PluginFunc } from 'dayjs';

export enum CustomFormat {
  DATE = 'YYYY-MM-DD',
  DISPLAY_DATE = 'YYYY/MM/DD',
  TIME = 'HH:mm',
  DATETIME = 'YYYY/MM/DD HH:mm',
  YEAR = 'YYYY',
}

const customFormatPlugin: PluginFunc = (option, dayjsClass) => {
  dayjsClass.prototype.onlyDate = function onlyDate() {
    return this.format(CustomFormat.DATE);
  };

  dayjsClass.prototype.displayDate = function displayDate() {
    return this.format(CustomFormat.DISPLAY_DATE);
  };

  dayjsClass.prototype.onlyTime = function onlyTime() {
    return this.format(CustomFormat.TIME);
  };

  dayjsClass.prototype.displayDatetime = function onlyTime() {
    return this.format(CustomFormat.DATETIME);
  };

  dayjsClass.prototype.onlyYear = function onlyYear() {
    return this.format(CustomFormat.YEAR);
  };
};

export default customFormatPlugin;
