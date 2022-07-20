// import '../src/styles/sass/global.scss';

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

// import { setConsoleOptions } from '@storybook/addon-console';
import '../src/styles/sass/global.scss';
import * as NextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';

// setConsoleOptions({
//   panelExclude: [],
// });

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
