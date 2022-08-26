/**
 * @desc Utilsには配置できないが、このプロジェクトのみで汎用的なもの。
 */

import { DefBlogToImg, AppConfig } from '@/configs';
import { Blog, Author } from '@/types/model';

export const pickThumbnail = (blog: Blog): string => {
  const thumbnail = blog.thumbnail?.url ?? blog.category.name;
  switch (thumbnail) {
    case 'design':
      return DefBlogToImg.design;
    case 'front':
      return DefBlogToImg.front;
    case 'server':
      return DefBlogToImg.server;
    case 'infra':
      return DefBlogToImg.infra;
    default:
      return thumbnail;
  }
};

export const pickAuthorThumbnail = (author: Author): string => {
  const thumbnail = author.image.url ?? '/images/about_me.jpg';
  return thumbnail;
};

export const fullPath = (path: string): string => {
  const config = new AppConfig();
  return `${config.publicURL}${path}`;
};

/**
 * @desc gsapの方向を分ける.
 * @param {distance} 意味: 距離
 * x translateX()のショートハンド、指定した数値はpxで換算され、%などの単位は文字列として単位を含めて直接記述する
 * y translateY()のショートハンド、先ほどと同じように指定した数値はpxで換算される
 *
 */
export const handlerFadeDirection = (direction: string, distance = 200) => {
  type Index = 'x' | 'y';
  let fadeDirection: { [k in Index]?: number };
  switch (direction) {
    case 'left':
      fadeDirection = { x: -distance };
      break;
    case 'right':
      fadeDirection = { x: distance };
      break;
    case 'up':
      fadeDirection = { y: distance };
      break;
    case 'down':
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }
  return fadeDirection;
};
