import { H1, Props } from '@/components/atoms/heading';
import { ComponentStoryObj } from '@storybook/react';

/**
 * CFC 3対応する
 * https://zenn.dev/yukishinonome/articles/6bc6e33d579276
 */

type Story = ComponentStoryObj<typeof H1>;

const defaultH1: Props = {
  text: 'default',
  size: '20px',
};

export const Default: Story = {
  args: { ...defaultH1 },
};

const componentName = { component: H1 };
export default componentName;
