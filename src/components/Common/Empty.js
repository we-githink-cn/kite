import React, { PureComponent } from 'react';
import { Label, Menu, Tab } from 'semantic-ui-react';
import * as Ant from 'antd';

import styles from './Empty.less';
import Empty from '../../assets/empty-workbook.png';
export default class ArticleContent extends PureComponent {

  state = {

  };

  componentWillUnmount() {}

  componentDidMount() {
  }

  render() {

    return (
      <div className={styles.EmptyContent}>
        <img src={Empty} className={styles.EmptyImage} alt=""/>
        <div className={styles.EmptyText}>
          哎呀，数据走丢啦 ...
        </div>
      </div>
    )
  }
}
