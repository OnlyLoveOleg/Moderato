import { Blog } from '@/types/model';
import { baseCMS } from './_baseCMS';
import {
  mockDesignCategory,
  mockFrontCategory,
  mockServerCategory,
  mockInfraCategory,
} from './category'; // え、同階層のpath alias（@）はダメなの？
import { mockThumbnail } from './thumbnail';

/**
 * mock design blog
 */
export const mockDesignBlog: Blog = {
  ...baseCMS,
  title: 'mock design',
  subTitle: 'mock design subTitle',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim diam id volutpat porttitor. Donec sed odio mi. Morbi at urna id lorem pharetra consequat. In ac lorem dapibus, consequat arcu nec, ullamcorper sem. Ut id lectus vitae diam malesuada posuere. Fusce posuere justo sed nunc imperdiet, a maximus risus cursus. Vestibulum et rutrum ligula, vel eleifend orci. Suspendisse bibendum turpis at turpis consectetur, in lobortis enim egestas. Pellentesque eleifend efficitur neque nec varius. Donec maximus eget mauris at maximus.',
  category: mockDesignCategory,
  thumbnail: mockThumbnail,
  recommend: true,
};

export const mockDesignBlogList: Blog[] = [
  mockDesignBlog,
  mockDesignBlog,
  mockDesignBlog,
  mockDesignBlog,
];

export const mockFrontBlog: Blog = {
  ...baseCMS,
  title: 'mock front',
  subTitle: 'mock front subTitle',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim diam id volutpat porttitor. Donec sed odio mi. Morbi at urna id lorem pharetra consequat. In ac lorem dapibus, consequat arcu nec, ullamcorper sem. Ut id lectus vitae diam malesuada posuere. Fusce posuere justo sed nunc imperdiet, a maximus risus cursus. Vestibulum et rutrum ligula, vel eleifend orci. Suspendisse bibendum turpis at turpis consectetur, in lobortis enim egestas. Pellentesque eleifend efficitur neque nec varius. Donec maximus eget mauris at maximus.',
  category: mockFrontCategory,
  thumbnail: mockThumbnail,
  recommend: true,
};

export const mockFrontBlogList: Blog[] = [
  mockFrontBlog,
  mockFrontBlog,
  mockFrontBlog,
  mockFrontBlog,
];

export const mockServerBlog: Blog = {
  ...baseCMS,
  title: 'mock server',
  subTitle: 'mock server subTitle',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim diam id volutpat porttitor. Donec sed odio mi. Morbi at urna id lorem pharetra consequat. In ac lorem dapibus, consequat arcu nec, ullamcorper sem. Ut id lectus vitae diam malesuada posuere. Fusce posuere justo sed nunc imperdiet, a maximus risus cursus. Vestibulum et rutrum ligula, vel eleifend orci. Suspendisse bibendum turpis at turpis consectetur, in lobortis enim egestas. Pellentesque eleifend efficitur neque nec varius. Donec maximus eget mauris at maximus.',
  category: mockServerCategory,
  thumbnail: mockThumbnail,
  recommend: true,
};

export const mockServerBlogList: Blog[] = [
  mockServerBlog,
  mockServerBlog,
  mockServerBlog,
  mockServerBlog,
];

export const mockInfraBlog: Blog = {
  ...baseCMS,
  title: 'mock infra',
  subTitle: 'mock infra subTitle',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim diam id volutpat porttitor. Donec sed odio mi. Morbi at urna id lorem pharetra consequat. In ac lorem dapibus, consequat arcu nec, ullamcorper sem. Ut id lectus vitae diam malesuada posuere. Fusce posuere justo sed nunc imperdiet, a maximus risus cursus. Vestibulum et rutrum ligula, vel eleifend orci. Suspendisse bibendum turpis at turpis consectetur, in lobortis enim egestas. Pellentesque eleifend efficitur neque nec varius. Donec maximus eget mauris at maximus.',
  category: mockInfraCategory,
  thumbnail: mockThumbnail,
  recommend: true,
};

export const mockInfraBlogList: Blog[] = [
  mockInfraBlog,
  mockInfraBlog,
  mockInfraBlog,
  mockInfraBlog,
];
