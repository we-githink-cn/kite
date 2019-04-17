import React, { PureComponent } from 'react';
import {
  Icon,
  Image,
  Label,
  Header,
  Button,
  Divider,
  Comment,
  Sidebar,
  Popup,
} from 'semantic-ui-react';
import * as Ant from 'antd';
import ImageGallery from 'react-image-gallery';
import Vditor from 'vditor';

import { scrollToAnchor } from '../../utils/utils';
import { AdCard } from '../../components/Index/AdCard';
import UserCard from '../User/UserCard';
import styles from './OpusDetail.less';

export default class OpusDetail extends PureComponent {
  state = {
    visible: false,
    replyVditor: null,
  };

  componentDidMount() {
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
    scrollToAnchor('reply-content-scroll');
  };

  handleReplyCloseClick = () => {
    this.setState({
      visible: false,
    });
  };

  componentWillUnmount() {}

  render() {
    const { html } = this.props;
    const { visible } = this.state;
    const images = [
      {
        original: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
        thumbnail: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
      },
      {
        original: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
        thumbnail: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
      },
    ];
    return (
      <div className={`opus-detail`}>
        <Sidebar.Pushable as="div">
          <Sidebar.Pusher>
            <div className={`${styles.OpusDetailWrapper}`}>
              <ul className={styles.OpusDetailNav}>
                <li className={styles.OpusDetailNavPrev}>
                  <span>
                    <Icon className={styles.OpusDetailNavPrevIcon} name="angle left" />
                  </span>
                </li>
                <li className={styles.OpusDetailNavNext}>
                  <span>
                    <Icon className={styles.OpusDetailNavNextIcon} name="angle right" />
                  </span>
                </li>
              </ul>
              <div className={styles.OpusDetailHeader}>
                <div className={styles.OpusDetailHeaderUserInfo}>
                  <Header as="h2">
                    <Image
                      circular
                      src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
                    />
                    <Header.Content>
                      react-custom-scrollbars滚动加载
                      <Header.Subheader>
                        由
                        <Popup
                          on="hover"
                          flowing
                          hoverable
                          position="bottom center"
                          trigger={<a>李小白</a>}
                        >
                          <UserCard item={null} />
                        </Popup>
                        设计，发表于2019-4-17 16:48
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                </div>
                <div className={styles.OpusDetailHeaderUserInfoAction}>
                  <Ant.Tooltip placement="top" title="收藏">
                    <Button icon inverted color="olive">
                      <Icon name="star" />
                    </Button>
                  </Ant.Tooltip>
                  <Ant.Tooltip placement="top" title="喜欢">
                    <Button as="div" labelPosition="right">
                      <Button color="red">
                        <Icon name="heart" />
                        Like
                      </Button>
                      <Label as="a" basic color="red" pointing="left">
                        2,048
                      </Label>
                    </Button>
                  </Ant.Tooltip>
                </div>
              </div>
              <div className={styles.OpusDetailImageContent}>
                <ImageGallery
                  showNav={false}
                  onImageLoad={e => {}}
                  autoPlay={true}
                  slideDuration={600}
                  items={images}
                />
              </div>
              <div className={styles.OpusDetailInfoContent}>
                <div className={styles.OpusDetailMainContent}>
                  <div
                    className={`${styles.OpusDetailHtml} vditor-reset`}
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  <Divider />
                  <div className={styles.ArticleCommentContent}>
                    <div className="GlobalLineHeader">
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
                      <div className={styles.ReplyContentInput} onClick={this.handleReplyOpenClick}>
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
                  {/*分享*/}
                  <div className={styles.OpusDetailMateShareContent}>
                    <Button compact icon>
                      <Icon name="qq" />
                    </Button>
                    <Button compact icon>
                      <Icon name="weibo" />
                    </Button>
                    <Button compact icon>
                      <Icon name="wechat" />
                    </Button>
                    <Button compact icon>
                      <Icon name="github" />
                    </Button>
                    <Button compact icon>
                      <Icon name="users" />
                    </Button>
                  </div>
                  {/*作品信息*/}
                  <div className={styles.OpusDetailMateTagsContent}>
                    <div className={styles.OpusDetailMateTagsIcon}>
                      <Icon name="tag" color="grey" />
                    </div>
                    <div className={styles.OpusDetailMateTags}>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        头像
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        UI/UX
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        大众设计
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        大众设计的
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        头像
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        UI/UX
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        头像
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        UI/UX
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        大众设计
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        大众设计的
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        头像
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        UI/UX
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        头像
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        UI/UX
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        大众设计
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        大众设计的
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        头像
                      </Label>
                      <Label as="a" style={{ marginBottom: '6px' }}>
                        UI/UX
                      </Label>
                    </div>
                  </div>
                  <div className={styles.OpusDetailMateColorContent}>
                    <div className={styles.OpusDetailMateColorIcon}>
                      <Icon name="magic" color="grey" />
                    </div>
                    <div className={styles.OpusDetailMetaColor}>
                      <ul className={styles.OpusDetailMateColorUl}>
                        <li>
                          <span style={{ backgroundColor: '#0B0610' }} />
                        </li>
                        <li>
                          <span style={{ backgroundColor: '#532222' }} />
                        </li>
                        <li>
                          <span style={{ backgroundColor: '#D53C1C' }} />
                        </li>
                        <li>
                          <span style={{ backgroundColor: '#FA7248' }} />
                        </li>
                        <li>
                          <span style={{ backgroundColor: '#F9E6DE' }} />
                        </li>
                        <li>
                          <span style={{ backgroundColor: '#FA8B64' }} />
                        </li>
                        <li>
                          <span style={{ backgroundColor: '#4B3352' }} />
                        </li>
                        <li>
                          <span style={{ backgroundColor: '#25289B' }} />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.OpusDetailMateItemIconContent}>
                    <div className={styles.OpusDetailMateItemIcon}>
                      <Icon name="eye" color="grey" />
                    </div>
                    <div className={styles.OpusDetailMateItemTextContent}>
                      <span>3978 浏览</span>
                    </div>
                  </div>
                  <div className={styles.OpusDetailMateItemIconContent}>
                    <div className={styles.OpusDetailMateItemIcon}>
                      <Icon name="heart" color="grey" />
                    </div>
                    <div className={styles.OpusDetailMateItemTextContent}>
                      <span>6534 喜欢</span>
                    </div>
                  </div>
                  <div className={styles.OpusDetailMateItemIconContent}>
                    <div className={styles.OpusDetailMateItemIcon}>
                      <Icon name="star" color="grey" />
                    </div>
                    <div className={styles.OpusDetailMateItemTextContent}>
                      <span>7918 收藏</span>
                    </div>
                  </div>
                  <div className={styles.OpusDetailMateItemIconContent}>
                    <div className={styles.OpusDetailMateItemIcon}>
                      <Icon name="calendar alternate" color="grey" />
                    </div>
                    <div className={styles.OpusDetailMateItemTextContent}>
                      <span>2019-4-16 12:00</span>
                    </div>
                  </div>
                  <Divider style={{ marginTop: '-5px' }} />
                  {/*作者作品*/}
                  <div className={styles.OpusDetailAuthorMoreOpusContent}>
                    <div className={styles.OpusDetailAuthorMoreOpusHeader}>
                      <div className={styles.OpusDetailAuthorMoreOpusText}>ta的更多作品</div>
                      <div className={styles.OpusDetailAuthorMoreOpusBtn}>
                        <Ant.Tooltip placement="top" title={'关注李白'}>
                          <Label color="orange">关注</Label>
                        </Ant.Tooltip>
                      </div>
                    </div>
                    <div className={styles.OpusDetailAuthorMoreOpusImages}>
                      <div className={styles.OpusDetailAuthorMoreOpusImagesItem}>
                        <Image src="http://www.jq22.com/demo/pictureViewer201808310052/images/4.png" />
                      </div>
                      <div className={styles.OpusDetailAuthorMoreOpusImagesItem}>
                        <Image src="http://www.jq22.com/demo/pictureViewer201808310052/images/2.png" />
                      </div>
                      <div className={styles.OpusDetailAuthorMoreOpusImagesItem}>
                        <Image src="http://www.jq22.com/demo/pictureViewer201808310052/images/3.png" />
                      </div>
                      <div className={styles.OpusDetailAuthorMoreOpusImagesItem}>
                        <Image src="http://www.jq22.com/demo/pictureViewer201808310052/images/1.png" />
                      </div>
                    </div>
                  </div>
                  {/*广告位*/}
                  <AdCard url={'https://react.semantic-ui.com/images/avatar/large/matthew.png'} />
                </div>
              </div>
              <div className={styles.OpusKeyContent}>
                <p>
                  快捷键:
                  <span>
                    <strong>{'←'}</strong> 上一个作品
                  </span>
                  <span>
                    下一个作品 <strong>{'→'}</strong>
                  </span>
                  <span>
                    <strong>Esc</strong> 关闭
                  </span>
                  <span>
                    <strong>L</strong> 或 <strong>F</strong> 喜欢
                  </span>
                  <span>
                    <strong>C</strong> 收藏
                  </span>
                </p>
              </div>
              <Sidebar as="div" animation="scale down" direction="bottom" visible={visible}>
                <div className={styles.ReplyVditorContent} id="reply-content-scroll">
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
    );
  }
}
