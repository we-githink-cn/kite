import React, { Component } from 'react';
import { Card, Icon, Image, Header } from 'semantic-ui-react';
import * as Ant from 'antd';
import styles from './Index.less';

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
                  <Icon name="sort content descending" color="blue" />
                  <span>上升最快</span>
                </Ant.Breadcrumb.Item>
              </Ant.Breadcrumb>
            </div>
            <div className={styles.postContent}>
              <div className={styles.postItem}>
                <div className={styles.postItemAction}>
                  <div className={styles.postItemActionIcon}>
                    <div className={`${styles.postItemActionIconItem} ${styles.postItemActionIconItemUp}`}>
                      <Icon name='hand point up' size='large'/>
                    </div>
                    <div className={styles.postItemActionText}>
                      49.8k
                    </div>
                    <div className={`${styles.postItemActionIconItem} ${styles.postItemActionIconItemDown}`}>
                      <Icon name='hand point down' size='large'/>
                    </div>
                  </div>
                </div>
                1
              </div>
            </div>
          </div>
          <div className={styles.postRight} />
        </div>
      </div>
    );
  }
}
