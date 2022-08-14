import { Tag } from '@/types/model';
import { baseCMS } from './_baseCMS';

/**
 * @memo 言語とかの正式名を間違えるのはいけない
 */

export const mockJsTag: Tag = {
  ...baseCMS,
  name: 'JavaScript',
  isDisable: false,
};

export const mockTsTag: Tag = {
  ...baseCMS,
  name: 'TypeScript',
  isDisable: false,
};

export const mockDockerTag: Tag = {
  ...baseCMS,
  name: 'Docker',
  isDisable: false,
};
