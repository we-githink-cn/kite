import React, { PureComponent } from 'react';
import { Label, Menu, Tab, Icon, Pagination } from 'semantic-ui-react';
import * as Ant from 'antd';

import styles from './QuestionContent.less';
import {scrollToAnchor} from "../../../utils/utils";
import QuestionItem from "../../../components/QuestionItem/Index";

export default class QuestionContent extends PureComponent {
  state = {
    totalPages: 0,
    questionPage: 1,
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
      questionPage: activePage,
    });
    scrollToAnchor('myQuestion');
  };


  render() {
    const { articleList, totalPages, questionPage } = this.state;
    const panes = [
      {
        menuItem: (
          <Menu.Item key="myQuestion">
            我的提问 <Label color="red">15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane>
          <div className="GlobalPagesWrapper" id="myQuestion">
            <div className="GlobalLineHeader">
              <Ant.Breadcrumb>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="reply all" color="blue" />
                  <span>回复</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="arrow alternate circle up" color="red" />
                  <span>赞同</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="sort amount down" color="orange" />
                  <span>倒序</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="sort amount up" color="brown" />
                  <span>正序</span>
                </Ant.Breadcrumb.Item>
              </Ant.Breadcrumb>
            </div>
            <div className="GlobalPagesContent" style={{marginBottom: '12px'}}>
              <div className="GlobalPages">
                <Pagination
                  activePage={questionPage}
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
              <QuestionItem key={index}/>
            ))}
            <div className="GlobalPagesContent">
              <div className="GlobalPages">
                <Pagination
                  activePage={questionPage}
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
          <Menu.Item key="myAgreeQuestion">
            我采纳的回答 <Label color="red">15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane />,
      },
      {
        menuItem: (
          <Menu.Item key="myAnswer">
            我的回答 <Label color="red">15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane />,
      },
      {
        menuItem: (
          <Menu.Item key="myAgreeAnswer">
            被采纳的回答 <Label color="red">15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane />,
      },
    ];

    return <Tab menu={{ fluid: true, vertical: true }} panes={panes} />;
  }
}
