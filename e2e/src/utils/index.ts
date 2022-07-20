import net from 'net';

/**
 * @desc 文字列から空白を削除する（全角・空白可能）
 */
export const excludeSpace = (str: string | null): string => {
  if (!str) return '';
  return str.replace(/\s+/g, '');
};

/**
 * @desc カンマに対応
 */
export const sortTexts = (str: string | null, sortAnswer: string): string => {
  if (!str) return '';
  const arr = str.split(',');
  const answer = sortAnswer.split(',');
  const result = [...arr].sort((a, b) => answer.indexOf(a) - answer.indexOf(b));
  return result.join(',');
};

/**
 * @desc HEX形式のカラーをチェックする（3桁もしくは6桁のカラーコードに一致）
 */
export const checkColorCode = (color: string | null): boolean => {
  if (!color) return false;
  return color.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) !== null;
};

/**
 * @desc port 開いているかチェック
 * 1. localのみで動く（URLとportセットの汎用的なやつでいいかも）
 * 2. 対象のポート確認
 * 3. 接続できればOK。ダメならfalse
 */

/**
 * Find a free port
 * @function aport
 * @param {Object} [options] - Optional settings
 * @param {string} [options.host='127.0.0.1'] - Host to aport port
 * @returns {Promise.<number>}
 * @see https://memo.sugyan.com/entry/20110403/1301769822s
 */

/** @lends aport */
// export const aport = (options: any) => {
//   options = options ?? {};
//   const host = options.host ?? '127.0.0.1';

//   return co(function* () {
//     const server = net.createServer();
//     let port = null;
//     server.on('listening', () => {
//       port = server.address().port;
//       server.close();
//     });

//     return new Promise((resolve, reject) => {
//       server.on('close', () => resolve(port));
//       server.on('error', (err) => reject(err));
//       server.listen(0, host);
//     });
//   });
// };
