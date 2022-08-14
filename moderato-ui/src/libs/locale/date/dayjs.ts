// https://www.wakuwakubank.com/posts/743-javascript-dayjs/
// https://zenn.dev/saki/articles/cbb097a495fcf5
// https://www.wakuwakubank.com/posts/743-javascript-dayjs/
import day from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

day.extend(utc);
day.extend(timezone);

// TODO: ブラウザのタイムゾーンを取るか検討
day.tz.setDefault('Asia/Tokyo');

export const dayjs = day;
