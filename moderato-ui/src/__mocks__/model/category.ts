import { Category, ParentCategory } from '@/types/model';
import { _baseCMS } from './_baseCMS';
import {
  mockTechTheme,
  mockDesignTheme,
  mockFrontTheme,
  mockInfraTheme,
  mockServerTheme,
} from './theme';

// TODO: オブジェクトとクラスどちらのがパフォーマンスが良いのだろうか

/**
 * 上段
 */

export const mockTechCategory: Category = {
  ..._baseCMS,
  name: 'tech',
  theme: mockTechTheme,
};

/**
 * 中段
 */

/**
 * mock design category
 */
export const mockDesignCategory: Category = {
  ..._baseCMS,
  name: 'front',
  theme: mockDesignTheme,
  parent: mockTechCategory,
};

/**
 * mock front category
 */
export const mockFrontCategory: Category = {
  ..._baseCMS,
  name: 'front',
  theme: mockFrontTheme,
  parent: mockTechCategory,
};

/**
 * mock server category
 */
export const mockServerCategory: Category = {
  ..._baseCMS,
  name: 'server',
  theme: mockServerTheme,
  parent: mockTechCategory,
};

/**
 * mock infra category
 */
export const mockInfraCategory: Category = {
  ..._baseCMS,
  name: 'infra',
  theme: mockInfraTheme,
  parent: mockTechCategory,
};

/**
 * 下段
 * TODO: これから作る
 */
