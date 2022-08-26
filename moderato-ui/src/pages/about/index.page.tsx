import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { About as AbTpl, Layout } from '@/components/templates';
import { Meta } from '@/components/molecules/common';
import { fullPath } from '@/hooks/helper';

const About: NextPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <Meta pageFullPath={fullPath(asPath)} pageAsPath={asPath} />
      <Layout disableRightClick={true}>
        <AbTpl />
      </Layout>
    </>
  );
};

export default About;
