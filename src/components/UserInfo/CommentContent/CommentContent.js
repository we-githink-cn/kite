import React, { PureComponent } from 'react';
import { Icon, Button, Comment, Label, Menu, Tab, Image, Item, Pagination} from 'semantic-ui-react';
import * as Ant from 'antd';

import styles from './CommentContent.less';
import {scrollToAnchor} from "../../../utils/utils";
import ArticleListItem from "../ArticleContent/ArticleContent";

export default class CommentContent extends PureComponent {

  state = {
    totalPages: 0,
    commentPage: 1,
    commentStarPage: 1,
    page: 1,
    pageSize: 20,
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
      commentPage: activePage
    });
    scrollToAnchor('articleContent');
  };

  handlePageStarChange = (event, { activePage }) => {
    const { articleList } = this.state;
    this.setState({
      commentStarPage: activePage
    });
    scrollToAnchor('starContent');
  };

  render() {
    const {totalPages, commentPage, commentStarPage} = this.state;
    const panes = [
      {
        menuItem: (
          <Menu.Item key='comment'>
            我评论的 <Label color='red'>15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane>
          <div className={styles.ArticlePagesWrapper} id='articleContent'>
            <div className={styles.ArticlePagesContent} >
              <div className={styles.ArticlePages}>
                <Pagination
                  activePage={commentPage}
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
            <Item.Group divided>
              <Item>
                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <Item.Content>
                  <Item.Header as='a'>Arrowhead Valley Camp</Item.Header>
                  <Item.Meta content='$1000 2 Weeks' />
                  <Item.Description>
                    星期日早上九点半，金蔚婧本打算去臧承吾家再一起出发的，可他说用不着这么麻烦，直接去约定地点就可以了。于是金蔚婧没好气地把地址发个他，骂他是个大笨蛋。
                  </Item.Description>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                <Item.Content>
                  <Item.Header as='a'>Buck's Homebrew Stayaway</Item.Header>
                  <Item.Meta content='$1000 2 Weeks' />
                  <Item.Description>
                    星期日早上九点半，金蔚婧本打算去臧承吾家再一起出发的，可他说用不着这么麻烦，直接去约定地点就可以了。于是金蔚婧没好气地把地址发个他，骂他是个大笨蛋。
                  </Item.Description>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <Item.Content>
                  <Item.Header as='a'>Buck's Homebrew Stayaway</Item.Header>
                  <Item.Meta content='$1000 2 Weeks' />
                  <Item.Description>
                    星期日早上九点半，金蔚婧本打算去臧承吾家再一起出发的，可他说用不着这么麻烦，直接去约定地点就可以了。于是金蔚婧没好气地把地址发个他，骂他是个大笨蛋。
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
            <div className={styles.ArticlePagesContent}>
              <div className={styles.ArticlePages}>
                <Pagination
                  activePage={commentStarPage}
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
        </Tab.Pane>,
      },
      {
        menuItem: (
          <Menu.Item key='comments'>
            收到的评论 <Label color='red'>15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane>
          <div className={styles.ArticlePagesWrapper} id='articleContent'>
            <div className={styles.ArticlePagesContent} >
              <div className={styles.ArticlePages}>
                <Pagination
                  activePage={commentPage}
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
            <Item.Group divided>
              <Item>
                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                <Item.Content>
                  <Item.Header as='a'>Arrowhead Valley Camp</Item.Header>
                  <Item.Meta content='$1000 2 Weeks' />
                  <Item.Description>
                    星期日早上九点半，金蔚婧本打算去臧承吾家再一起出发的，可他说用不着这么麻烦，直接去约定地点就可以了。于是金蔚婧没好气地把地址发个他，骂他是个大笨蛋。
                  </Item.Description>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                <Item.Content>
                  <Item.Header as='a'>Buck's Homebrew Stayaway</Item.Header>
                  <Item.Meta content='$1000 2 Weeks' />
                  <Item.Description>
                    星期日早上九点半，金蔚婧本打算去臧承吾家再一起出发的，可他说用不着这么麻烦，直接去约定地点就可以了。于是金蔚婧没好气地把地址发个他，骂他是个大笨蛋。
                  </Item.Description>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                <Item.Content>
                  <Item.Header as='a'>Buck's Homebrew Stayaway</Item.Header>
                  <Item.Meta content='$1000 2 Weeks' />
                  <Item.Description>
                    星期日早上九点半，金蔚婧本打算去臧承吾家再一起出发的，可他说用不着这么麻烦，直接去约定地点就可以了。于是金蔚婧没好气地把地址发个他，骂他是个大笨蛋。
                  </Item.Description>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <Item.Content>
                  <Item.Header as='a'>Buck's Homebrew Stayaway</Item.Header>
                  <Item.Meta content='$1000 2 Weeks' />
                  <Item.Description>
                    星期日早上九点半，金蔚婧本打算去臧承吾家再一起出发的，可他说用不着这么麻烦，直接去约定地点就可以了。于是金蔚婧没好气地把地址发个他，骂他是个大笨蛋。
                  </Item.Description>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                <Item.Content>
                  <Item.Header as='a'>Buck's Homebrew Stayaway</Item.Header>
                  <Item.Meta content='$1000 2 Weeks' />
                  <Item.Description>
                    星期日早上九点半，金蔚婧本打算去臧承吾家再一起出发的，可他说用不着这么麻烦，直接去约定地点就可以了。于是金蔚婧没好气地把地址发个他，骂他是个大笨蛋。
                  </Item.Description>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <Item.Content>
                  <Item.Header as='a'>Buck's Homebrew Stayaway</Item.Header>
                  <Item.Meta content='$1000 2 Weeks' />
                  <Item.Description>
                    星期日早上九点半，金蔚婧本打算去臧承吾家再一起出发的，可他说用不着这么麻烦，直接去约定地点就可以了。于是金蔚婧没好气地把地址发个他，骂他是个大笨蛋。
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
            <div className={styles.ArticlePagesContent}>
              <div className={styles.ArticlePages}>
                <Pagination
                  activePage={commentStarPage}
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
        </Tab.Pane>,
      },
    ]
    return (
      <div>
        <Tab menu={{ fluid: true, vertical: true }} panes={panes} />
      </div>
    )
  }
}
