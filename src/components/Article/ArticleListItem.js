import React from 'react';
import { Icon, Image, Item, Dropdown } from 'semantic-ui-react';
import * as Ant from 'antd';
import styles from './Index.less';

const ArticleListItem = (item) => {
  return (
    <div className={`${styles.postContent} index`}>
      <div className={styles.postItem}>
        <div className={styles.postItemAction}>
          <div className={styles.postItemActionIcon}>
            <div className={`${styles.postItemActionIconItem} ${styles.postItemActionIconItemUp}`}>
              <Icon name='thumbs up' size='large' />
            </div>
            <div className={styles.postItemActionText}>
              49.8k
            </div>
            <div className={`${styles.postItemActionIconItem} ${styles.postItemActionIconItemDown}`}>
              <Icon name='thumbs down' size='large' />
            </div>
          </div>
        </div>
        <Item.Group className={styles.postRightContent}>
          <Item>
            <Item.Content>
              <div className={styles.postUserInfoContent}>
                <div className={styles.postUserInfoAvatar}>
                  <Ant.Avatar src='https://styles.redditmedia.com/t5_2qhwp/styles/communityIcon_xirfqw6qgs811.png' size='large' shape="square" />
                </div>
                <div className={styles.postUserInfoView}>
                  <div className={styles.postUserInfoName}>12 Years a Slave</div>
                  <Item.Meta>
                    <span className={styles.cinema}>Union Square 14</span>
                  </Item.Meta>
                </div>
              </div>
              <Item.Description className={styles.postContentDesc}>
                <div className={styles.postContentDescTitle}> Cute dogs come in a variety of shapes</div>
                <div style={{color: '#AFAFAF',padding: '0', margin: '0'}}>
                  Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.
                  Many people also have their own barometers for what makes a cute dog.
                </div>
              </Item.Description>
              <Item.Extra>
                <div className={styles.rightActionContent}>
                  <div className={styles.actionItemText}>
                    <Icon name='comment' />5.1k 评论
                  </div>
                  <div className={styles.actionItemText}>
                    <Icon name='share' />1.1k 分享
                  </div>
                  <div className={styles.actionItemText}>
                    <Icon name='star' />1k 收藏
                  </div>
                </div>
              </Item.Extra>
            </Item.Content>
            <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Item>
        </Item.Group>
      </div>
    </div>
  )
}

export default ArticleListItem
