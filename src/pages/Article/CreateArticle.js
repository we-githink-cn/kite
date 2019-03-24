import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import Vditor from 'vditor';

import styles from './CreateArticle.less';

export default class CreateArticle extends Component {
  state = {
    vditor: null
  };

  componentDidMount() {
    let vditor2 = new Vditor(id, {options...})
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className={styles.content}>
        <Input label="标题" placeholder="请输入标题" />
      </div>
    );
  }
}
