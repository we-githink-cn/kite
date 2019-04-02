import React, { Component } from 'react';
import { Icon, Image, Pagination, Button, Label, Search, List } from 'semantic-ui-react';
import * as Ant from 'antd';
import router from 'umi/router';
import styles from './Index.less';
import { scrollToAnchor } from '../../utils/utils';
import ArticleListItem from '../../components/Article/ArticleListItem';
import UserCard from '../../components/User/UserCard';
import logo from '../../assets/black_logo.svg';
import UnLoginCard from '../../components/User/UnLoginCard';
import RecCard from '../../components/Index/RecCard';
import { AdCard } from '../../components/Index/AdCard';

const options = [
  { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
  { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
  { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
];

export default class Index extends Component {
  state = {
    totalPages: 0,
    page: 1,
    isLogin: false,
    pageSize: 20,
    articleList: [
      { key: '1' },
      { key: '1' },
      { key: '1' },
      { key: '1' },
      { key: '1' },
      { key: '1' },
    ],
  };

  componentDidMount() {
    this._initTotalPages();
  }

  componentWillUnmount() {}

  _init = () => {
    const { articleList } = this.state;
    const list = [{ key: '1' }, { key: '1' }, { key: '1' }, { key: '1' }, { key: '1' }];
    this.setState({
      articleList: list,
    });
  };

  _initTotalPages = () => {
    const { articleList, pageSize } = this.state;
    this.setState({
      totalPages: Math.ceil(9999 / pageSize),
    });
  };

  handlePageChange = (event, { activePage }) => {
    const { articleList } = this.state;
    scrollToAnchor('postId');
  };

  handleUserListClick = () => {
    router.push('/index/user-list');
  };

  handleAvatarClick = () => {
    router.push('/full/userInfo');
  };

  render() {
    const { articleList, totalPages, isLogin } = this.state;
    const recList = [
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
      },
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg',
      },
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
      },
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
      },
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/small/veronika.jpg',
      },
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
      },
    ];
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
                          src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
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
                          src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
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
                          src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
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
        <div className={styles.postWrapper} id="postId">
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
                <Ant.Breadcrumb.Item href="">
                  <Icon name="location arrow" color="violet" />
                  <span>济南</span>
                </Ant.Breadcrumb.Item>
              </Ant.Breadcrumb>
            </div>
            <div className={styles.postPagesContent} style={{ marginTop: '10px' }}>
              <div className={styles.postPages}>
                <Pagination
                  defaultActivePage={1}
                  pointing
                  secondary
                  ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                  firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                  lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                  prevItem={{ content: <Icon name="angle left" />, icon: true }}
                  nextItem={{ content: <Icon name="angle right" />, icon: true }}
                  totalPages={totalPages}
                  onPageChange={this.handlePageChange.bind(this)}
                />
              </div>
            </div>
            {articleList.map((item, index) => (
              <ArticleListItem item={item} key={index} />
            ))}
            <div className={styles.postPagesContent}>
              <div className={styles.postPages}>
                <Pagination
                  defaultActivePage={1}
                  pointing
                  secondary
                  ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                  firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                  lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                  prevItem={{ content: <Icon name="angle left" />, icon: true }}
                  nextItem={{ content: <Icon name="angle right" />, icon: true }}
                  totalPages={totalPages}
                  onPageChange={this.handlePageChange.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className={styles.postRight}>
            {/*用户信息卡*/}
            {!isLogin ? (
              <UserCard user={null} handleAvatarClick={this.handleAvatarClick} />
            ) : (
              <UnLoginCard />
            )}
            {/*广告位*/}
            <AdCard url={url} />
            {/*热门问答*/}
            <div className={styles.marginTop20}>
              <div className={styles.trendingHeader}>
                <h4>
                  <Icon name="question circle" color="violet" /> 热门问答
                </h4>
              </div>
              <div className={`${styles.questCardSearch} quest`}>
                <Search />
              </div>
              <div className={styles.questCard}>
                <div className={`${styles.questCardContent} questCard`}>
                  <List relaxed>
                    <List.Item>
                      <Image
                        size="mini"
                        src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
                      />
                      <List.Content>
                        <List.Header as="a">Daniel Louise</List.Header>
                        <List.Description>
                          <div className={styles.questCardDesc}>
                            Last seen watching Arrested Development just now.
                          </div>
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <Image
                        size="mini"
                        src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
                      />
                      <List.Content>
                        <List.Header as="a">Stevie Feliciano</List.Header>
                        <List.Description>
                          <div className={styles.questCardDesc}>
                            Last seen watching 10 hours ago.
                          </div>
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <Image
                        size="mini"
                        src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                      />
                      <List.Content>
                        <List.Header as="a">Elliot Fu</List.Header>
                        <List.Description>
                          <div className={styles.questCardDesc}>
                            Last seen watching The Godfather Part 2 yesterday.
                          </div>
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </div>
              </div>
            </div>

            {/*推荐作者*/}
            <div className={styles.marginTop20}>
              <div className={styles.trendingHeader}>
                <h4>
                  <Icon name="star" color="teal" /> 推荐作者
                </h4>
              </div>
              <div className={styles.recCard}>
                <div className={styles.recCardContent}>
                  {recList.map((item, index) => (
                    <RecCard user={item} key={index} />
                  ))}
                </div>
              </div>
              <div className={styles.recCardBtn}>
                <Button
                  color="brown"
                  compact
                  fluid
                  content="查看更多"
                  onClick={this.handleUserListClick}
                />
              </div>
            </div>

            {/*热门标签*/}
            <div className={styles.marginTop20}>
              <div className={styles.trendingHeader}>
                <h4>
                  <Icon name="tag" color="red" /> 热门标签
                </h4>
              </div>
              <div className={styles.tagCard}>
                <div className={styles.tagCardContent}>
                  <div className={`${styles.tagCardItem}`}>
                    <Label as="a" image>
                      <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                      IT
                    </Label>
                  </div>
                  <div className={styles.tagCardItem}>
                    <Label as="a" image>
                      <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                      Docker
                    </Label>
                  </div>
                  <div className={styles.tagCardItem}>
                    <Label as="a" image>
                      <img src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" />
                      Kubernetes
                    </Label>
                  </div>
                  <div className={styles.tagCardItem}>
                    <Label as="a" image>
                      <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                      支付
                    </Label>
                  </div>
                  <div className={styles.tagCardItem}>
                    <Label as="a" image>
                      <img src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" />
                      股票
                    </Label>
                  </div>
                  <div className={styles.tagCardItem}>
                    <Label as="a" image>
                      <img src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" />
                      新闻
                    </Label>
                  </div>
                  <div className={styles.tagCardItem}>
                    <Label as="a" image>
                      <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                      文学
                    </Label>
                  </div>
                  <div className={styles.tagCardItem}>
                    <Label as="a" image>
                      <img src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" />
                      视频剪辑
                    </Label>
                  </div>
                  <div className={styles.tagCardItem}>
                    <Label as="a" image>
                      <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                      动漫
                    </Label>
                  </div>
                  <div className={styles.tagCardItem}>
                    <Label as="a" image>
                      <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                      女装大佬
                    </Label>
                  </div>
                  <div className={styles.tagCardItem}>
                    <Label as="a" image>
                      <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                      前方高能
                    </Label>
                  </div>
                  <div className={styles.tagCardItem}>
                    <Label as="a" image>
                      <img src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" />
                      运动
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
