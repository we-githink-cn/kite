import React, { Component } from 'react';
import { Icon, Image, Pagination, Button, Label, Search, List } from 'semantic-ui-react';
import * as Ant from 'antd';
import styles from './IndexQuestion.less';
import { scrollToAnchor } from '../../utils/utils';
import UserCard from '../../components/User/UserCard';
import UnLoginCard from '../../components/User/UnLoginCard';
import { AdCard } from '../../components/Index/AdCard';
import RecCard from '../../components/Index/RecCard';
import QuestionItem from '../../components/QuestionItem/Index'
import router from 'umi/router';

export default class IndexQuestion extends Component {
  state = {
    isLogin: false,
    totalPages: 0,
    activeQuestionPage: 1,
    page: 1,
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

  _initTotalPages = () => {
    const { articleList, pageSize } = this.state;
    this.setState({
      totalPages: Math.ceil(9999 / pageSize),
    });
  };

  handlePageChange = (event, { activePage }) => {
    const { articleList } = this.state;
    this.setState({
      activeQuestionPage: activePage,
    });
    scrollToAnchor('IndexQuestionWrapper');
  };

  handleUserListClick = () => {
    router.push('/index/user-list');
  };

  handleAvatarClick = () => {
    router.push('/full/userInfo');
  };

  render() {
    const { isLogin, articleList, totalPages, activeQuestionPage } = this.state;
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
    return (
      <div className={styles.IndexQuestionWrapper} id="IndexQuestionWrapper">
        <div className={styles.IndexQuestionMainContent}>
          <div className="GlobalLineHeader">
            <Ant.Breadcrumb>
              <Ant.Breadcrumb.Item href="">
                <Icon name="sort amount down" color="orange" />
                <span>时间倒叙</span>
              </Ant.Breadcrumb.Item>
              <Ant.Breadcrumb.Item href="">
                <Icon name="sort amount up" color="brown" />
                <span>时间正序</span>
              </Ant.Breadcrumb.Item>
            </Ant.Breadcrumb>
          </div>
          <div className="GlobalPagesContent" style={{ backgroundColor: '#FFF' }}>
            <div className="GlobalPages">
              <Pagination
                activePage={activeQuestionPage}
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
          <div className={styles.IndexQuestionContent}>
            <QuestionItem />
            <QuestionItem />
            <QuestionItem />
            <QuestionItem />

          </div>
          <div className="GlobalPagesContent" style={{ backgroundColor: '#FFF' }}>
            <div className="GlobalPages">
              <Pagination
                activePage={activeQuestionPage}
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
        <div className={styles.IndexQuestionRightContent}>
          {/*用户信息卡*/}
          {!isLogin ? (
            <UserCard user={null} handleAvatarClick={this.handleAvatarClick} />
          ) : (
            <UnLoginCard />
          )}
          {/*相关文章*/}
          <div className={styles.marginTop20}>
            <div className="GlobalLineHeader">
              <h4>
                <Icon name="file alternate outline" color="violet" /> 相关文章
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
                        <div className={styles.questCardDesc}>Last seen watching 10 hours ago.</div>
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
            <div className="GlobalLineHeader">
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
          {/*广告位*/}
          <AdCard url="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" />
          {/*热门标签*/}
          <div className={styles.marginTop20}>
            <div className="GlobalLineHeader">
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
    );
  }
}
