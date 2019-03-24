import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import styles from './CreateArticle.less';

export default class CreateArticle extends Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={styles.content}>
        <Input label="http://" placeholder="mysite.com" />
      </div>
    );
  }
}
