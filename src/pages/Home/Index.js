import React, { Component } from 'react';
import { Icon, Image, Item, Dropdown } from 'semantic-ui-react';
import * as Ant from 'antd';
import styles from './Index.less';

const options = [
  { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
  { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
  { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
]

export default class Index extends Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    let url = 'https://react.semantic-ui.com/images/avatar/large/matthew.png';
    return (
      <div className={styles.content}>
        <div className={styles.trending}>
          <div className={styles.trendingHeader}>
            <h4>
              <Icon name="chess queen" color="green" /> 今日推荐
            </h4>
          </div>
          <div className={styles.trendingModule}>
            <div className={styles.trendingContent}>
              <div className={styles.trendingWarpper}>
                <div className={`${styles.trendingItem} ${styles.trendingBox}`}>
                  <div
                    className={`${styles.trendingBefor} ${styles.trendingImages}`}
                    style={{
                      background: `linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0)),url(${url}) center center / cover no-repeat transparent `,
                    }}
                  >
                    <div className={styles.trendingTextContent}>
                      <h2 className={styles.trendingItemTitle}>Michael Avenatti</h2>
                      <div className={styles.trendingItemDesc}>
                        Michael Avenatti arrested for alleged $20 million extortion attempt on Nike
                      </div>
                      <div className={`${styles.trendingAuthorInfo}`}>
                        <Image
                          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                          avatar
                        />
                        <span className={styles.trendingAuthorName}>r/news and more</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${styles.trendingItem} ${styles.trendingBox}`}>
                  <div
                    className={`${styles.trendingBefor} ${styles.trendingImages}`}
                    style={{
                      background: `linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0)),url(${url}) center center / cover no-repeat transparent`,
                    }}
                  >
                    <div className={styles.trendingTextContent}>
                      <h2 className={styles.trendingItemTitle}>Michael Avenatti</h2>
                      <div className={styles.trendingItemDesc}>
                        Michael Avenatti arrested for alleged $20 million extortion attempt on Nike
                      </div>
                      <div className={`${styles.trendingAuthorInfo}`}>
                        <Image
                          src="https://styles.redditmedia.com/t5_2qhfg/styles/communityIcon_xm0illyxmid01.png"
                          avatar
                        />
                        <span>r/news and more</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${styles.trendingItem} ${styles.trendingBox}`}>
                  <div
                    className={`${styles.trendingBefor} ${styles.trendingImages}`}
                    style={{
                      background: `linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0)),url(${url}) center center / cover no-repeat transparent`,
                    }}
                  >
                    <div className={styles.trendingTextContent}>
                      <h2 className={styles.trendingItemTitle}>Michael Avenatti</h2>
                      <div className={styles.trendingItemDesc}>
                        Michael Avenatti arrested for alleged $20 million extortion attempt on Nike
                      </div>
                      <div className={`${styles.trendingAuthorInfo}`}>
                        <Image
                          src="https://a.thumbs.redditmedia.com/E0Bkwgwe5TkVLflBA7WMe9fMSC7DV2UOeff-UpNJeb0.png"
                          avatar
                        />
                        <span>r/news and more</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${styles.trendingItem} ${styles.trendingBox}`}>
                  <div
                    className={`${styles.trendingBefor} ${styles.trendingImages}`}
                    style={{
                      background: `linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0)),url(${url}) center center / cover no-repeat transparent`,
                    }}
                  >
                    <div className={styles.trendingTextContent}>
                      <h2 className={styles.trendingItemTitle}>Michael Avenatti</h2>
                      <div className={styles.trendingItemDesc}>
                        Michael Avenatti arrested for alleged $20 million extortion attempt on Nike
                      </div>
                      <div className={`${styles.trendingAuthorInfo}`}>
                        <Image
                          src="https://styles.redditmedia.com/t5_2qhwp/styles/communityIcon_xirfqw6qgs811.png"
                          avatar
                        />
                        <span>r/news and more</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postWrapper}>
          <div className={styles.postContent}>
            <div className={styles.trendingHeader}>
              <Ant.Breadcrumb>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="hotjar" color="red" />
                  <span>最火</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="history" color="orange" />
                  <span>最新</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="als" color="olive" />
                  <span>热议</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="chart line" color="blue" />
                  <span>上升最快</span>
                </Ant.Breadcrumb.Item>
              </Ant.Breadcrumb>
            </div>
            <div className={styles.postContent}>
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
          </div>
          <div className={styles.postRight} />
        </div>
      </div>
    );
  }
}
