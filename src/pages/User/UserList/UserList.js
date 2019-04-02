import React, { Component } from 'react';
import { Input, Icon, Button, Checkbox, Dropdown, Header, Image, Modal } from 'semantic-ui-react';
import * as Ant from 'antd';
import router from 'umi/router';
import styles from './UserList.less';

export default class UserList extends Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={styles.content}>
        <div className={styles.UserListHeader} />
      </div>
    );
  }
}
