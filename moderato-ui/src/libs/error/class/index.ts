import { ErrorConfigs } from '@/libs/error/setting';
/**
 * 1. baseとなる classを作りそこから継承させる
 */

/**
 * @desc undefinedとnullのerrorでランタイムを止めたくない
 */
export class NullError extends Error {
  status: number;

  constructor(select: string, e: Error) {
    super(`Null is ${select}`);
    this.name = 'Null Error';
    this.stack = e.stack;
    this.status = ErrorConfigs.get('null')?.statusCode ?? 400;
    this.message = ErrorConfigs.get('null')?.message ?? '';
  }
}

export class UndefinedError extends Error {
  status: number;

  constructor(select: string) {
    super(`Undefined is ${select}`);
    this.name = 'Undefined Error';
    // this.status = ErrorConfigs.get('undefined')?.statusCode ?? 400;
    this.status = 404;
    this.message = ErrorConfigs.get('undefined')?.message ?? '';
  }
}

/**
 * @desc 接続Error
 */
export class HttpError extends Error {
  url: string;

  status: number;

  statusText: string;

  constructor(res: Response) {
    super(res.statusText);
    this.url = res.url;
    this.name = 'HttpError';
    this.status = res.status;
    this.statusText = res.statusText;
  }
}

/**
 * @desc 予期せぬエラー
 */
export class UnknownError extends Error {
  status: number;

  constructor() {
    super(`Unknown Error.`);
    this.name = 'Unknown Error';
    this.status = ErrorConfigs.get('unknown')?.statusCode ?? 500;
    this.message = ErrorConfigs.get('unknown')?.message ?? '';
  }

  exec() {
    throw new UnknownError();
  }
}

export const ErrorClassList = [NullError, UndefinedError, HttpError];
