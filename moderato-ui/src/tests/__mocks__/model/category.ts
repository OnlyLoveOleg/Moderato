import { Category } from '@/types/model';
import { baseCMS } from './_baseCMS';
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
  ...baseCMS,
  name: 'tech',
  isPrimary: true,
  theme: mockTechTheme,
};

/**
 * 中段
 */

/**
 * mock design category
 */
export const mockDesignCategory: Category = {
  ...baseCMS,
  name: 'front',
  isPrimary: true,
  theme: mockDesignTheme,
  parent: mockTechCategory,
};

/**
 * mock front category
 */
export const mockFrontCategory: Category = {
  ...baseCMS,
  name: 'front',
  isPrimary: true,
  theme: mockFrontTheme,
  parent: mockTechCategory,
};

/**
 * mock server category
 */
export const mockServerCategory: Category = {
  ...baseCMS,
  name: 'server',
  isPrimary: true,
  theme: mockServerTheme,
  parent: mockTechCategory,
};

/**
 * mock infra category
 */
export const mockInfraCategory: Category = {
  ...baseCMS,
  name: 'infra',
  isPrimary: true,
  theme: mockInfraTheme,
  parent: mockTechCategory,
};

/**
 * 下段
 * TODO: これから作る
 */
