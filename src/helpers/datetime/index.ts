import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import customFormat from './plugins/custom-format';

import('dayjs/locale/zh-tw');

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customFormat);

dayjs.tz.setDefault('Asia/Taipei');

export default dayjs;
