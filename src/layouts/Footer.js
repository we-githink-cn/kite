import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0, backgroundColor: '#3C444F', minWidth: '720px' }}>
    <GlobalFooter
      links={[
        {
          key: 'blog',
          title: 'Blog',
          href: 'https://blog.githink.cn/',
          blankTarget: true,
        },
        {
          key: 'KotlinX',
          title: 'KotlinX',
          href: 'https://githink.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/we-githink-cn',
          blankTarget: true,
        },
        {
          key: 'jl',
          title: 'Resume',
          href: 'https://jl.githink.cn',
          blankTarget: true,
        },
        {
          key: 'git',
          title: 'Git',
          href: 'http://code.githink.cn/',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2018-2020 Githink.cn 出品
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
