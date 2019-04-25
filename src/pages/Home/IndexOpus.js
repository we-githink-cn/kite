import React, { Component } from 'react';
import { Card, Icon, Image, Label, Menu, Search, Popup, List, Modal } from 'semantic-ui-react';
import * as Ant from 'antd';
import { connect } from 'dva';
import styles from './IndexOpus.less';
import OpusItem from "../../components/Opus/OpusItem";

@connect(({ mark }) => ({
  mark: mark,
}))
export default class IndexOpus extends Component {
  state = {
    open: false,
    mark: null,
    html: null,
    images: [],
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'mark/fetchHtml',
      callback: res => {
        this.setState({
          html: res,
        });
      },
    });
    dispatch({
      type: 'mark/fetch',
      callback: res => {
        this.setState({
          mark: res,
        });
      },
    });
    window.addEventListener('scroll', e => {
      //监听事件内容
      if (this.getScrollHeight() == this.getWindowHeight() + this.getDocumentTop()) {
        console.log(this.getScrollHeight());
      }
    });
  }

  componentWillUnmount() {}


  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  //文档高度
  getDocumentTop() {
    var scrollTop = 0,
      bodyScrollTop = 0,
      documentScrollTop = 0;
    if (document.body) {
      bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
    return scrollTop;
  }

  //可视窗口高度
  getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == 'CSS1Compat') {
      windowHeight = document.documentElement.clientHeight;
    } else {
      windowHeight = document.body.clientHeight;
    }
    return windowHeight;
  }

  //滚动条滚动高度
  getScrollHeight() {
    let scrollHeight = 0,
      bodyScrollHeight = 0,
      documentScrollHeight = 0;
    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight;
    }

    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight =
      bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
  }

  render() {
    const { activeItem, open, html, mark } = this.state;
    return (
      <div className={styles.OpusWrapper}>
        <div className={styles.OpusCardWrapper}>
          <div className={styles.OpusMenuWrapper}>
            <Ant.Affix offsetTop={145}>
              <div className="GlobalLineHeader" style={{ width: '210px' }}>
                <h4>
                  <Icon name="list ul" color="green" /> 作品分类
                </h4>
              </div>
              <Menu vertical secondary>
                <Menu.Item
                  name="icon"
                  active={activeItem === 'icon'}
                  onClick={this.handleItemClick}
                >
                  <Icon name="eye dropper" color="orange" />
                  Icon/Logo
                </Menu.Item>
                <Menu.Item name="ui" active={activeItem === 'ui'} onClick={this.handleItemClick}>
                  <Icon name="uikit" color="orange" />
                  UI
                </Menu.Item>
                <Menu.Item name="web" active={activeItem === 'web'} onClick={this.handleItemClick}>
                  <Icon name="chrome" color="teal" />
                  WebSite
                </Menu.Item>
                <Menu.Item name="app" active={activeItem === 'app'} onClick={this.handleItemClick}>
                  <Icon name="app store ios" color="violet" />
                  App Design
                </Menu.Item>
                <Menu.Item
                  name="layout"
                  active={activeItem === 'layout'}
                  onClick={this.handleItemClick}
                >
                  <Icon name="table" color="blue" />
                  Layout Design
                </Menu.Item>
                <Menu.Item
                  name="image"
                  active={activeItem === 'image'}
                  onClick={this.handleItemClick}
                >
                  <Icon name="camera retro" color="brown" />
                  Picture
                </Menu.Item>
                <Menu.Item
                  name="design"
                  active={activeItem === 'design'}
                  onClick={this.handleItemClick}
                >
                  <Icon name="cut" color="green" />
                  Design
                </Menu.Item>
                <Menu.Item
                  name="github"
                  active={activeItem === 'github'}
                  onClick={this.handleItemClick}
                >
                  <Icon name="github alternate" color="olive" />
                  Repositories
                </Menu.Item>
                <Menu.Item
                  name="more"
                  active={activeItem === 'more'}
                  onClick={this.handleItemClick}
                >
                  <Icon name="ellipsis horizontal" color="black" />
                  查看更多
                </Menu.Item>
              </Menu>
            </Ant.Affix>
          </div>
          <div className={styles.OpusBody}>
            <div className={`${styles.OpusSearchWrapper} opus-search-wrapper`}>
              <Search fluid />
            </div>
            <div className="GlobalLineHeader" style={{ marginTop: '16px' }}>
              <Ant.Breadcrumb>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="heart" color="red" />
                  <span>喜欢</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="star" color="orange" />
                  <span>收藏</span>
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
                <Ant.Breadcrumb.Item href="">
                  <Icon name="sort amount down" color="purple" />
                  <span>时间倒叙</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="sort amount up" color="brown" />
                  <span>时间正序</span>
                </Ant.Breadcrumb.Item>
              </Ant.Breadcrumb>
            </div>
            <div className={styles.OpusCardContent}>
              <Card.Group style={{ marginTop: '4px' }}>
                <OpusItem width='200px'/>
                <OpusItem width='200px'/>
                <OpusItem width='200px'/>
                <OpusItem width='200px'/>
                <OpusItem width='200px'/>
                <OpusItem width='200px'/>
              </Card.Group>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
