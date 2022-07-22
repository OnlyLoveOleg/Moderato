import { css } from 'styled-components';

type DisplayFlexProps = {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
};

export const displayFlex = ({
  alignItems = 'center',
  justifyContent = 'center',
  flexDirection = 'column',
}: DisplayFlexProps) => css`
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
  flex-direction: ${flexDirection};
`;

/**
 * @desc flexだとwrapするelementが必要だが、これだと要らないとのこと。
 * @see https://coliss.com/articles/build-websites/operation/css/centering-side-aligned-using-modern-css.html
 */
export const maxInline = ({}) => css`
  max-inline-size: max-content;
  margin-inline: auto;
`;
