export {};
// import { ErrorClassList, UnknownError } from './class';
/**
 * @think
 * 1. ただtry内で発生したerrorをcatchして何もせずにthrowするのは冗長
 * 2. またerrorをthrowするのではなくerrorを検知するものをreturnするのがいい
 */

/**
 * ハンドリングが最終的に必要
 * new された状態（いわば値がセットされた状態）
 */

// export const handlerError = (e: unknown) => {
//   const processError = ErrorClassList.find((error) => e instanceof error) ?? new UnknownError();

// };
