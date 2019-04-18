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
              <div className={styles.PhotoItemImageContent}>
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1268563040,17122181&fm=26&gp=0.jpg"  alt=""/>
              </div>
              <div className={styles.PhotoItemActionContent}>
                <div className={styles.PhotoItemActionItem}>
                  <Icon name='heart outline'/>
                </div>
                <div className={styles.PhotoItemActionItem}>
                  <Icon name='comment outline'/>
                </div>
                <div className={styles.PhotoItemActionItem}>
                  <Icon name='paper plane outline'/>
                </div>
                <div className={styles.PhotoItemActionItem}>
                  <Icon name='bookmark outline'/>
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
