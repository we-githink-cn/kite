import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0, backgroundColor: '#3C444F', minWidth: '720px' }}>
    <GlobalFooter
      links={[
        {
          key: 'Blog',
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
          key: 'Github',
          title: <Icon type="github" />,
          href: 'https://github.com/we-githink-cn',
          blankTarget: true,
        },
        {
          key: 'Resume',
          title: 'Resume',
          href: 'https://jl.githink.cn',
          blankTarget: true,
        },
        {
          key: 'Git',
          title: 'Git',
          href: 'http://code.githink.cn/',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2018-2020 鲁ICP备18040779号
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
