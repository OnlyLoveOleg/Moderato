import day from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

day.extend(utc);
day.extend(timezone);

// TODO: ブラウザのタイムゾーンを取るか検討
day.tz.setDefault('Asia/Tokyo');

export const dayjs = day;
