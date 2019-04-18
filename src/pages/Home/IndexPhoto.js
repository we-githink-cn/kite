import React, { Component } from 'react';
import { Icon, Image, Pagination, Button, Label, Search, List,Header } from 'semantic-ui-react';
import * as Ant from 'antd';
import router from 'umi/router';

import styles from './IndexPhoto.less';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUpdate (nextProps, nextState) {}

  componentDidUpdate (prevProps, prevState) {}

  render() {
    return(
      <div className={styles.PhotoWrapper}>
        <div className={styles.PhotoMainWrapper}>
          <div className={styles.PhotoMainContent}>
            <div className={styles.PhotoItemContent}>
              <div className={styles.PhotoItemHeader}>
                <div className={styles.PhotoItemHeaderAvatar}>
                  <Header as='h4'>
                    <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Patrick
                  </Header>
                </div>
                <div className={styles.PhotoItemHeaderIcon}>
                  <Icon name='ellipsis horizontal'/>
                </div>
              </div>

            </div>
            <div className={styles.PhotoItemContent}>

            </div>
          </div>
        </div>
        <div className={styles.PhotoMateWrapper}>

        </div>
      </div>
    )
  }
}
