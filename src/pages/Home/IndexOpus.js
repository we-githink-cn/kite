import React, { Component } from 'react';
import {Card, Icon, Image, Label, Menu, Search, Popup, List, Modal, Header, Button, Divider, Comment, Sidebar} from 'semantic-ui-react';
import * as Ant from 'antd';
import ImageGallery from 'react-image-gallery';
import Vditor from 'vditor';
import {connect} from "dva";

import styles from './IndexOpus.less';
import {scrollToAnchor} from "../../utils/utils";

@connect(({ mark }) => ({
  mark: mark,
}))
export default class IndexQuestion extends Component {
  state = {
    open: false,
    visible: false,
    mark: null,
    html: null,
    replyVditor: null,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'mark/fetch',
      callback: (res) => {
        this.setState({
          mark: res
        })
      }
    });
    dispatch({
      type: 'mark/fetchHtml',
      callback: (res) => {
        console.log(res);
        this.setState({
          html: res
        })
      }
    });
    const replyEditor = this._initReplyEditor({
      id: 'reply-content',
      show: true,
      height: 200,
      placeholder: '请输入内容',
      resize: true,
    });
    this.setState({
      replyVditor: replyEditor,
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

  _initReplyEditor = data => {
    return new Vditor(data.id, {
      preview: {
        delay: 500,
        show: data.show,
        parse: element => {
          if (element.style.display === 'none') {
            return;
          }
        },
      },
      height: data.height,
      counter: 4096,
      resize: {
        position: 'top',
        enable: data.resize,
      },
      placeholder: data.placeholder,
    });
  };

  handleReplyOpenClick = () => {
    this.setState({
      visible: true,
    });
    scrollToAnchor('reply-content');
  };

  handleReplyCloseClick = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { activeItem, open, visible, html } = this.state;
    const images = [
      {
        original: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
        thumbnail: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
      },{
        original: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
        thumbnail: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
      }
    ];
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
                <Card style={{ width: '200px' }}>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    onClick={item => {
                      this.setState({
                        open: true,
                      });
                    }}
                  />
                  <Card.Content>
                    <Image
                      floated="left"
                      size="mini"
                      src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                    />
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description
                      onClick={item => {
                        this.setState({
                          open: true,
                        });
                      }}
                    >
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content
                    extra
                    onClick={item => {
                      this.setState({
                        open: true,
                      });
                    }}
                  >
                    <span
                      style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}
                      className={styles.OpusCardItemIcon}
                    >
                      <Icon name="heart" /> 112.3k
                    </span>
                    <Popup
                      on="hover"
                      trigger={
                        <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                          <Icon name="ellipsis vertical" />
                        </a>
                      }
                      position="top center"
                    >
                      <Popup.Content>
                        <List divided>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="comment" /> 12.3k
                            </a>
                          </List.Item>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="eye" /> 2.3k
                            </a>
                          </List.Item>
                        </List>
                      </Popup.Content>
                    </Popup>
                    <Label as="a" style={{ float: 'right', fontSize: '10px' }} color="orange">
                      生活 · 美食
                    </Label>
                  </Card.Content>
                </Card>
                <Card style={{ width: '200px' }}>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                  <Card.Content>
                    <Image
                      floated="left"
                      size="mini"
                      src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                    />
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                      <Icon name="heart" /> 112.3k
                    </a>
                    <Popup
                      on="hover"
                      trigger={
                        <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                          <Icon name="ellipsis vertical" />
                        </a>
                      }
                      position="top center"
                    >
                      <Popup.Content>
                        <List divided>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="comment" /> 12.3k
                            </a>
                          </List.Item>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="eye" /> 2.3k
                            </a>
                          </List.Item>
                        </List>
                      </Popup.Content>
                    </Popup>
                    <Label as="a" style={{ float: 'right', fontSize: '10px' }} color="orange">
                      生活 · 美食
                    </Label>
                  </Card.Content>
                </Card>
                <Card style={{ width: '200px' }}>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                  <Card.Content>
                    <Image
                      floated="left"
                      size="mini"
                      src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                    />
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                      <Icon name="heart" /> 112.3k
                    </a>
                    <Popup
                      on="hover"
                      trigger={
                        <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                          <Icon name="ellipsis vertical" />
                        </a>
                      }
                      position="top center"
                    >
                      <Popup.Content>
                        <List divided>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="comment" /> 12.3k
                            </a>
                          </List.Item>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="eye" /> 2.3k
                            </a>
                          </List.Item>
                        </List>
                      </Popup.Content>
                    </Popup>
                    <Label as="a" style={{ float: 'right', fontSize: '10px' }} color="orange">
                      生活 · 美食
                    </Label>
                  </Card.Content>
                </Card>
                <Card style={{ width: '200px' }}>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                  <Card.Content>
                    <Image
                      floated="left"
                      size="mini"
                      src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                    />
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                      <Icon name="heart" /> 112.3k
                    </a>
                    <Popup
                      on="hover"
                      trigger={
                        <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                          <Icon name="ellipsis vertical" />
                        </a>
                      }
                      position="top center"
                    >
                      <Popup.Content>
                        <List divided>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="comment" /> 12.3k
                            </a>
                          </List.Item>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="eye" /> 2.3k
                            </a>
                          </List.Item>
                        </List>
                      </Popup.Content>
                    </Popup>
                    <Label as="a" style={{ float: 'right', fontSize: '10px' }} color="orange">
                      生活 · 美食
                    </Label>
                  </Card.Content>
                </Card>
                <Card style={{ width: '200px' }}>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                  <Card.Content>
                    <Image
                      floated="left"
                      size="mini"
                      src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                    />
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                      <Icon name="heart" /> 112.3k
                    </a>
                    <Popup
                      on="hover"
                      trigger={
                        <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                          <Icon name="ellipsis vertical" />
                        </a>
                      }
                      position="top center"
                    >
                      <Popup.Content>
                        <List divided>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="comment" /> 12.3k
                            </a>
                          </List.Item>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="eye" /> 2.3k
                            </a>
                          </List.Item>
                        </List>
                      </Popup.Content>
                    </Popup>
                    <Label as="a" style={{ float: 'right', fontSize: '10px' }} color="orange">
                      生活 · 美食
                    </Label>
                  </Card.Content>
                </Card>
                <Card style={{ width: '200px' }}>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                  <Card.Content>
                    <Image
                      floated="left"
                      size="mini"
                      src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                    />
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                      <Icon name="heart" /> 112.3k
                    </a>
                    <Popup
                      on="hover"
                      trigger={
                        <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                          <Icon name="ellipsis vertical" />
                        </a>
                      }
                      position="top center"
                    >
                      <Popup.Content>
                        <List divided>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="comment" /> 12.3k
                            </a>
                          </List.Item>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="eye" /> 2.3k
                            </a>
                          </List.Item>
                        </List>
                      </Popup.Content>
                    </Popup>
                    <Label as="a" style={{ float: 'right', fontSize: '10px' }} color="orange">
                      生活 · 美食
                    </Label>
                  </Card.Content>
                </Card>
                <Card style={{ width: '200px' }}>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                  <Card.Content>
                    <Image
                      floated="left"
                      size="mini"
                      src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                    />
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                      <Icon name="heart" /> 112.3k
                    </a>
                    <Popup
                      on="hover"
                      trigger={
                        <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                          <Icon name="ellipsis vertical" />
                        </a>
                      }
                      position="top center"
                    >
                      <Popup.Content>
                        <List divided>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="comment" /> 12.3k
                            </a>
                          </List.Item>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="eye" /> 2.3k
                            </a>
                          </List.Item>
                        </List>
                      </Popup.Content>
                    </Popup>
                    <Label as="a" style={{ float: 'right', fontSize: '10px' }} color="orange">
                      生活 · 美食
                    </Label>
                  </Card.Content>
                </Card>
                <Card style={{ width: '200px' }}>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                  <Card.Content>
                    <Image
                      floated="left"
                      size="mini"
                      src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                    />
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                      <Icon name="heart" /> 112.3k
                    </a>
                    <Popup
                      on="hover"
                      trigger={
                        <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                          <Icon name="ellipsis vertical" />
                        </a>
                      }
                      position="top center"
                    >
                      <Popup.Content>
                        <List divided>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="comment" /> 12.3k
                            </a>
                          </List.Item>
                          <List.Item>
                            <a
                              style={{
                                marginRight: '8px',
                                lineHeight: '26px',
                                fontSize: '12px',
                                color: '#989898',
                              }}
                            >
                              <Icon name="eye" /> 2.3k
                            </a>
                          </List.Item>
                        </List>
                      </Popup.Content>
                    </Popup>
                    <Label as="a" style={{ float: 'right', fontSize: '10px' }} color="orange">
                      生活 · 美食
                    </Label>
                  </Card.Content>
                </Card>
              </Card.Group>
            </div>
          </div>
        </div>
        <Modal open={true} closeIcon style={{width:'800px',marginTop: '3rem',marginBottom:'3rem'}} onClose={() => { this.setState({ open: false });}}>
          <div className={`opus-detail`}>
            <Sidebar.Pushable as="div">
              <Sidebar.Pusher>
                <div className={`${styles.OpusDetailWrapper}`}>
                  <ul className={styles.OpusDetailNav}>
                    <li className={styles.OpusDetailNavPrev}>
                    <span>
                      <Icon className={styles.OpusDetailNavPrevIcon} name='angle left'/>
                    </span>
                    </li>
                    <li className={styles.OpusDetailNavNext}>
                    <span>
                      <Icon className={styles.OpusDetailNavNextIcon} name='angle right'/>
                    </span>
                    </li>
                  </ul>
                  <div className={styles.OpusDetailHeader}>
                    <div className={styles.OpusDetailHeaderUserInfo}>
                      <Header as='h2'>
                        <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                        <Header.Content>
                          Account Settings
                          <Header.Subheader><a>Manage</a> your preferences</Header.Subheader>
                        </Header.Content>
                      </Header>
                    </div>
                    <div className={styles.OpusDetailHeaderUserInfoAction}>
                      <Ant.Tooltip placement="top" title='收藏'>
                        <Button icon inverted color='olive'>
                          <Icon name='star'/>
                        </Button>
                      </Ant.Tooltip>
                      <Ant.Tooltip placement="top" title='喜欢'>
                        <Button as='div' labelPosition='right'>
                          <Button color='red'>
                            <Icon name='heart' />
                            Like
                          </Button>
                          <Label as='a' basic color='red' pointing='left'>
                            2,048
                          </Label>
                        </Button>
                      </Ant.Tooltip>
                    </div>
                  </div>
                  <div className={styles.OpusDetailImageContent}>
                    <ImageGallery showNav={false} onImageLoad={(e)=>{
                      console.log(e)
                    }} autoPlay={true} slideDuration={600} items={images} />
                  </div>
                  <div className={styles.OpusDetailInfoContent}>
                    <div className={styles.OpusDetailMainContent}>
                      <div className={`${styles.OpusDetailHtml} vditor-reset`}  dangerouslySetInnerHTML = {{ __html:html }}/>
                      <Divider />
                      <div className={styles.ArticleCommentContent}>
                        <div className={styles.trendingHeader}>
                          <h4>32 评论</h4>
                        </div>
                        {/*回复*/}
                        <div className={styles.ReplyContent}>
                          <div className={styles.AuthorAvatar}>
                            <Ant.Avatar
                              shape="square"
                              size="large"
                              src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                            />
                          </div>
                          <div
                            className={styles.ReplyContentInput}
                            onClick={this.handleReplyOpenClick}
                          >
                            请输入回帖内容 ...
                          </div>
                        </div>
                        {/*评论列表*/}
                        <div className={`${styles.ArticleCommentBody} article_comment`}>
                          <Comment.Group threaded>
                            <Comment>
                              <Comment.Avatar
                                as="a"
                                src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                              />
                              <Comment.Content>
                                <Comment.Author as="a">Matt</Comment.Author>
                                <Comment.Metadata>
                                  <span>Today at 5:42PM</span>
                                </Comment.Metadata>
                                <Comment.Text>
                                  2.手把手教你使用 Kotlin 打造通用 Android MVP 架构本场 Chat
                                  会从零开始教会大家如何使用 Kotlin 构建一个模块化的 MVP
                                  架构（附源码），什么是 MVP
                                  架构、模块间的通信、用户在视图上的操作到网络请求的整个数据流向。
                                  包括像 Anko、Retrofit、Dagger2、ARouter
                                  等一些第三方插件的使用和封装以及常见问题。最后使用框架完成注册登录流程。
                                </Comment.Text>
                                <Comment.Actions>
                                  <a>
                                    <Icon name="reply" />
                                    回复
                                  </a>
                                  <a>
                                    <Icon name="heart outline" />
                                    喜欢
                                  </a>
                                  <a>
                                    <Icon name="arrow alternate circle up" />顶
                                  </a>
                                  <a>
                                    <Icon name="arrow alternate circle down" />踩
                                  </a>
                                  <a>
                                    <Icon name="dont" />
                                    举报
                                  </a>
                                </Comment.Actions>
                              </Comment.Content>
                            </Comment>
                            <Comment>
                              <Comment.Avatar
                                as="a"
                                src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                              />
                              <Comment.Content>
                                <Comment.Author as="a">Elliot Fu</Comment.Author>
                                <Comment.Metadata>
                                  <span>Yesterday at 12:30AM</span>
                                </Comment.Metadata>
                                <Comment.Text>
                                  <p>This has been very useful for my research. Thanks as well!</p>
                                </Comment.Text>
                                <Comment.Actions>
                                  <a>
                                    <Icon name="reply" />
                                    回复
                                  </a>
                                  <a>
                                    <Icon name="heart outline" />
                                    喜欢
                                  </a>
                                  <a>
                                    <Icon name="arrow alternate circle up" />顶
                                  </a>
                                  <a>
                                    <Icon name="arrow alternate circle down" />踩
                                  </a>
                                  <a>
                                    <Icon name="dont" />
                                    举报
                                  </a>
                                </Comment.Actions>
                              </Comment.Content>
                              <Comment.Group>
                                <Comment>
                                  <Comment.Avatar
                                    as="a"
                                    src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                                  />
                                  <Comment.Content>
                                    <Comment.Author as="a">Jenny Hess</Comment.Author>
                                    <Comment.Metadata>
                                      <span>Just now</span>
                                    </Comment.Metadata>
                                    <Comment.Text>Elliot you are always so right :)</Comment.Text>
                                    <Comment.Actions>
                                      <a>
                                        <Icon name="reply" />
                                        回复
                                      </a>
                                      <a>
                                        <Icon name="heart outline" />
                                        喜欢
                                      </a>
                                      <a>
                                        <Icon name="arrow alternate circle up" />顶
                                      </a>
                                      <a>
                                        <Icon name="arrow alternate circle down" />踩
                                      </a>
                                      <a>
                                        <Icon name="dont" />
                                        举报
                                      </a>
                                    </Comment.Actions>
                                  </Comment.Content>
                                </Comment>
                              </Comment.Group>
                            </Comment>
                            <Comment>
                              <Comment.Avatar
                                as="a"
                                src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                              />
                              <Comment.Content>
                                <Comment.Author as="a">Joe Henderson</Comment.Author>
                                <Comment.Metadata>
                                  <span>5 days ago</span>
                                </Comment.Metadata>
                                <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                <Comment.Actions>
                                  <a>
                                    <Icon name="reply" />
                                    回复
                                  </a>
                                  <a>
                                    <Icon name="heart outline" />
                                    喜欢
                                  </a>
                                  <a>
                                    <Icon name="arrow alternate circle up" />顶
                                  </a>
                                  <a>
                                    <Icon name="arrow alternate circle down" />踩
                                  </a>
                                  <a>
                                    <Icon name="dont" />
                                    举报
                                  </a>
                                </Comment.Actions>
                              </Comment.Content>
                            </Comment>
                          </Comment.Group>
                        </div>
                      </div>
                    </div>
                    <div className={styles.OpusDetailMateContent}>
                      <div className={styles.OpusDetailMateShareContent}>
                        <Button compact icon>
                          <Icon name='qq' />
                        </Button>
                        <Button compact icon>
                          <Icon name='weibo' />
                        </Button>
                        <Button compact icon>
                          <Icon name='wechat' />
                        </Button>
                        <Button compact icon>
                          <Icon name='github' />
                        </Button>
                        <Button compact icon>
                          <Icon name='users' />
                        </Button>
                      </div>
                      <div className={styles.OpusDetailMateTagsContent}>
                        <div className={styles.OpusDetailMateTagsIcon}>
                          <Icon name='tag' color='grey'/>
                        </div>
                        <div className={styles.OpusDetailMateTags}>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            头像
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            UI/UX
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            大众设计
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            大众设计的
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            头像
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            UI/UX
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            头像
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            UI/UX
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            大众设计
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            大众设计的
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            头像
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            UI/UX
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            头像
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            UI/UX
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            大众设计
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            大众设计的
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            头像
                          </Label>
                          <Label as='a' style={{marginBottom: '6px'}}>
                            UI/UX
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.OpusKeyContent}>
                    <p>
                      快捷键:
                      <span><strong>{'←'}</strong> 上一个作品</span>
                      <span>下一个作品 <strong>{'→'}</strong></span>
                      <span><strong>Esc</strong>  关闭</span>
                      <span><strong>L</strong> 或 <strong>F</strong> 喜欢</span>
                      <span><strong>C</strong> 收藏</span>
                    </p>
                  </div>
                  <Sidebar as="div" animation="scale down" direction="bottom" visible={visible}>
                    <div className={styles.ReplyVditorContent}>
                      <div className={styles.ReplyVditorHeader}>
                        <div className={styles.ReplyVditorHeaderTitle}>
                          <Icon name="share" style={{ marginRight: '8px' }} />
                          <Label as="a" image>
                            <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                            Elliot
                          </Label>
                        </div>
                        <div
                          className={styles.ReplyVditorHeaderIcon}
                          onClick={this.handleReplyCloseClick}
                        >
                          <Ant.Tooltip placement="left" title="取消">
                            <Icon name="caret down" size="large" />
                          </Ant.Tooltip>
                        </div>
                      </div>
                      <div
                        id="reply-content"
                        style={{ maxWidth: '800px', minWidth: '770px', margin: '0 auto' }}
                      />
                      <div className={styles.ReplyVditorBottom}>
                        <Button.Group size="small" className={styles.ReplyVditorBottomBtn}>
                          <Button positive>评论</Button>
                          <Button.Or text="or" style={{ marginBottom: '2px' }} />
                          <Button color="blue" onClick={this.handleReplyCloseClick}>
                            取消
                          </Button>
                        </Button.Group>
                      </div>
                    </div>
                  </Sidebar>
                </div>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
        </Modal>
      </div>
    );
  }
}
