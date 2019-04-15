import React, { Component } from 'react';
import {
  Card,
  Icon,
  Image,
  Label,
  Menu,
  Search,
  Popup,
  List,
  Modal,
  Header,
} from 'semantic-ui-react';
import * as Ant from 'antd';
import styles from './IndexOpus.less';

export default class IndexQuestion extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
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
    const { activeItem, open } = this.state;
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
        <Modal
          open={open}
          dimmer="blurring"
          closeIcon
          onClose={() => {
            this.setState({ open: false });
          }}
        >
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size="medium"
              src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
