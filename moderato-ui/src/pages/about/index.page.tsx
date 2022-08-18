import type { NextPage } from 'next';
import { About as AbTpl, Layout } from '@/components/templates';

const About: NextPage = () => {
  return (
    <Layout disableRightClick={true}>
      <AbTpl />
    </Layout>
  );
};

export default About;
