/**
 * @desc 本当はCMSで管理をしたいが、api作成に限度があるためconfigで管理
 */

import { Theme } from '@/types/model';

/**
 * 上段 カテゴリーテーマ
 */

export const mockTechTheme: Theme = {
  name: 'tech',
  hex6Color: '#6127DB',
  hex8Color: '#6127DBA6',
};

/**
 * 中段 カテゴリーテーマ
 */

export const mockDesignTheme: Theme = {
  name: 'design',
  hex6Color: '#B51792',
  hex8Color: '#B51792A6',
};

export const mockFrontTheme: Theme = {
  name: 'front',
  hex6Color: '#17B5AB',
  hex8Color: '#17B5ABA6',
};

export const mockServerTheme: Theme = {
  name: 'server',
  hex6Color: '#B5A517',
  hex8Color: '#B5A517A6',
};

export const mockInfraTheme: Theme = {
  name: 'infra',
  hex6Color: '#2DB517',
  hex8Color: '#2DB517A6',
};

/**
 * 下段 カテゴリーテーマ
 */
