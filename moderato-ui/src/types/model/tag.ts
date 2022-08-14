import { BaseCMS } from '@/types/base';

export interface Tag extends BaseCMS {
  /**
   * タグ名
   */
  name: string;
  /**
   * 非表示フラグ
   */
  isDisable: boolean;
}
