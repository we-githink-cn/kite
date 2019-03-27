import React, { Component } from 'react';
import { Icon, Image, Pagination, Label, Segment} from 'semantic-ui-react';
import * as Ant from 'antd';
import styles from './Index.less';
import {scrollToAnchor} from '../../utils/utils'
import ArticleListItem from "../../components/Article/ArticleListItem";

const options = [
  { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
  { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
  { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
]

export default class Index extends Component {
  state = {
    totalPages: 0,
    page: 1,
    pageSize: 20,
    articleList: [
      {key: '1'},
      {key: '1'},
      {key: '1'},
      {key: '1'},
      {key: '1'},
      {key: '1'},
    ],
  };

  componentDidMount() {
    this._initTotalPages();
  }

  componentWillUnmount() {}

  _init = () => {
    const {articleList} = this.state;
    const list = [
      {key: '1'},
      {key: '1'},
      {key: '1'},
      {key: '1'},
      {key: '1'},
    ];
    this.setState({
      articleList: list
    },);
  }

  _initTotalPages = () =>{
    const { articleList, pageSize } = this.state;
    this.setState({
      totalPages: Math.ceil(9999 /pageSize)
    })
  };



  handlePageChange = (event, { activePage }) =>{
    const { articleList } = this.state;
    if(activePage != 1) {
      scrollToAnchor('postId');
      this.setState({
        articleList: articleList
      })
    }else{
      this._init()
    }
  }

  render() {
    const { articleList, totalPages } = this.state;
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
        <div className={styles.postWrapper} id='postId'>
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
            <div className={styles.postPagesContent} style={{marginTop: '10px'}}>
              <div className={styles.postPages}>
                <Pagination
                  defaultActivePage={1}
                  pointing
                  secondary
                  ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                  firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                  lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                  prevItem={{ content: <Icon name='angle left' />, icon: true }}
                  nextItem={{ content: <Icon name='angle right' />, icon: true }}
                  totalPages={totalPages}
                  onPageChange={this.handlePageChange.bind(this)}
                />
              </div>
            </div>
            {
              articleList.map((item, index) => (
                <ArticleListItem item={item} key={index}/>
              ))
            }
            <div className={styles.postPagesContent}>
              <div className={styles.postPages}>
                <Pagination
                  defaultActivePage={1}
                  pointing
                  secondary
                  ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                  firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                  lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                  prevItem={{ content: <Icon name='angle left' />, icon: true }}
                  nextItem={{ content: <Icon name='angle right' />, icon: true }}
                  totalPages={totalPages}
                  onPageChange={this.handlePageChange.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className={styles.postRight}>
            <div className={styles.userCard}>
              <div className={styles.userCardContent}>
                <div className={styles.userCardHeader}>
                  <div className={styles.userCardHeaderBd} style={{backgroundImage: `url("https://styles.redditmedia.com/t5_spi1u/styles/profileBanner_qsylndybb0a21.jpg?width=1280&height=384&crop=1280:384,smart&s=d73ee78c44b2174b8f80a3b707356af370602dfb")`}}></div>
                </div>
                <div className={styles.userCardAvatar}>
                  <div className={styles.userAvatar} style={{backgroundImage: `url("https://styles.redditmedia.com/t5_spi1u/styles/profileIcon_f9143x0bb0a21.jpg?width=256&height=256&crop=256:256,smart&s=7a4730d43a44ba9b77668806d9bdbec3e976495a")`}}></div>
                </div>
                <span className={styles.userName}>Githinkcn</span>
                <span>大梦初醒，荒唐了一生。</span>
              </div>
            </div>
            <a href="" className={styles.rightAd} style={{backgroundImage: `url(${url})`}}>
              <span className={styles.aDbadge}>广告</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
