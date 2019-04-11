import React, { PureComponent } from 'react';
import { Label, Menu, Tab, Icon, Pagination } from 'semantic-ui-react';
import * as Ant from 'antd';

import styles from './QuestionContent.less';
import Empty from '../ArticleContent/ArticleContent';

export default class QuestionContent extends PureComponent {
  state = {};

  componentWillUnmount() {}

  componentDidMount() {
    let { item } = this.props;
  }

  render() {
    const panes = [
      {
        menuItem: (
          <Menu.Item key="myQuestion">
            我的提问 <Label color="red">15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane />,
      },
      {
        menuItem: (
          <Menu.Item key="myAgreeQuestion">
            我采纳的回答 <Label color="red">15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane />,
      },
      {
        menuItem: (
          <Menu.Item key="myAnswer">
            我的回答 <Label color="red">15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane />,
      },
      {
        menuItem: (
          <Menu.Item key="myAgreeAnswer">
            被采纳的回答 <Label color="red">15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane />,
      },
    ];

    return <Tab menu={{ fluid: true, vertical: true }} panes={panes} />;
  }
}
