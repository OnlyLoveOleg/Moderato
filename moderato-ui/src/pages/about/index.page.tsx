import type { NextPage } from 'next';
import { About as AbTpl, Layout } from '@/components/templates';

const About: NextPage = () => {
  return (
    <Layout>
      <AbTpl />
    </Layout>
  );
};

export default About;
