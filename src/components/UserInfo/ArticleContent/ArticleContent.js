import React, { PureComponent } from 'react';
import {Label, Menu, Tab, Pagination, Icon} from 'semantic-ui-react';
import * as Ant from 'antd';
import Empty from '../../../components/Common/Empty';
import {scrollToAnchor} from "../../../utils/utils";
import ArticleListItem from "../../../components/Article/ArticleListItem";

import styles from './ArticleContent.less';


export default class ArticleContent extends PureComponent {

  state = {
    isEmpty: false,
    totalPages: 0,
    activeArticlePage: 1,
    activeStarPage: 1,
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

  componentWillUnmount() {}

  componentDidMount() {
    let { item } = this.props;
    this._initTotalPages();
  }

  _initTotalPages = () => {
    const { articleList, pageSize } = this.state;
    this.setState({
      totalPages: Math.ceil(9999 / pageSize),
    });
  };

  handlePageChange = (event, { activePage }) => {
    const { articleList } = this.state;
    this.setState({
      activeArticlePage: activePage
    });
    scrollToAnchor('articleContent');
  };

  handlePageStarChange = (event, { activePage }) => {
      const { articleList } = this.state;
      this.setState({
        activeStarPage: activePage
      });
      scrollToAnchor('starContent');
  };

  render() {
    const {isEmpty, articleList, totalPages, activeArticlePage, activeStarPage} = this.state;
    const panes = [
      {
        menuItem: (
          <Menu.Item key='MineArticle'>
            我的文章 <Label color='red'>15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane>
          {
            isEmpty ? (<Empty/>):(
              <div className={styles.ArticlePagesWrapper} id='articleContent'>
                <div className={styles.ArticlePagesContent} >
                  <div className={styles.ArticlePages}>
                    <Pagination
                      activePage={activeArticlePage}
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
                <div className={styles.ArticlePagesContent}>
                  <div className={styles.ArticlePages}>
                    <Pagination
                      activePage={activeArticlePage}
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
            )
          }
        </Tab.Pane>,
      },
      {
        menuItem: (
          <Menu.Item key='StarArticle'>
            收藏的文章 <Label color='red'>15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane>
          {
            isEmpty ? (<Empty/>):(
              <div className={styles.ArticlePagesWrapper} id='starContent'>
                <div className={styles.ArticlePagesContent} >
                  <div className={styles.ArticlePages}>
                    <Pagination
                      activePage={activeStarPage}
                      pointing
                      secondary
                      ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                      firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                      lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                      prevItem={{ content: <Icon name="angle left" />, icon: true }}
                      nextItem={{ content: <Icon name="angle right" />, icon: true }}
                      totalPages={totalPages}
                      onPageChange={this.handlePageStarChange.bind(this)}
                    />
                  </div>
                </div>
                {articleList.map((item, index) => (
                  <ArticleListItem item={item} key={index} />
                ))}
                <div className={styles.ArticlePagesContent}>
                  <div className={styles.ArticlePages}>
                    <Pagination
                      activePage={activeStarPage}
                      pointing
                      secondary
                      ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                      firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                      lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                      prevItem={{ content: <Icon name="angle left" />, icon: true }}
                      nextItem={{ content: <Icon name="angle right" />, icon: true }}
                      totalPages={totalPages}
                      onPageChange={this.handlePageStarChange.bind(this)}
                    />
                  </div>
                </div>
              </div>
            )
          }
        </Tab.Pane>,
      },
    ];
    return (
      <Tab menu={{ fluid: true, vertical: true }} panes={panes} />
    )
  }
}
