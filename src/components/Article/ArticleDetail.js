import React, { PureComponent } from 'react';
import { Icon, Button, Comment, Label, Sidebar,} from 'semantic-ui-react';
import * as Ant from 'antd';
import Vditor from 'vditor';
import GoodPng from '../../assets/good.png'
import styles from './ArticleDetail.less';
import UserCard from "../User/UserCard";
import {AdCard} from "../Index/AdCard";

export default class ArticleDetail extends PureComponent {
  state = {
    vditor: null,
    replyVditor: null,
    visible: false,
  };

  componentWillUnmount() {

  }

  componentDidMount() {
    const contentEditor = this._initEditor({
      id: 'ArticleContent',
    });
    const replyEditor = this._initReplyEditor({
      id: 'reply-content',
      show: true,
      height: 200,
      placeholder: '请输入内容',
      resize: true,
    })
    this.setState({
      vditor: contentEditor,
      replyVditor: replyEditor,
    });
  }

  _initEditor = data => {
    return new Vditor(data.id, {
      preview: {
        delay: 100,
        show: true,
      },
      height: '100%',
      counter: 4096,
    });
  };

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
      counter: 102400,
      resize: {
        position: 'top',
        enable: data.resize,
      },
      placeholder: data.placeholder,
    });
  };

  handleReplyOpenClick =()=>{
    this.setState({
      visible: true
    })
  }

  handleReplyCloseClick =()=>{
    this.setState({
      visible: false
    })
  }

  render() {
    const { handleWrapperCloseClick } = this.props;
    const { visible } = this.state;
    return (
      <div className={`article-detail`}>
        <Sidebar.Pushable as='div'>
          <Sidebar.Pusher>
            <div className={styles.ArticleWrapperHeader}>
              <div className={styles.ArticleHeaderContent}>
                <div className={styles.ArticleHeader}>
                  <div className={styles.ArticleUpDownContent}>
                    <div className={styles.ArticleUpIcon}>
                      <Icon name='arrow alternate circle up' />
                    </div>
                    <div className={styles.ArticleIconText}>
                      49.8k
                    </div>
                    <div className={styles.ArticleDownIcon}>
                      <Icon name='arrow alternate circle down' />
                    </div>
                  </div>
                  <div className={styles.ArticleMiddleIcon}>
                    <Icon name='file alternate'/>
                  </div>
                  <div className={styles.ArticleHeaderTitleContent}>
                    <span className={styles.ArticleHeaderTitleBody}>
                      <h2 className={styles.ArticleHeaderTitle}>
                        We创作介绍Android进阶：六、在子线程中直接使用 Toast 及其原理
                      </h2>
                    </span>
                  </div>
                </div>
                <div className={styles.ArticleHeaderAction}>
                  <div className={styles.ArticleHeaderActionClose} onClick={handleWrapperCloseClick}>
                    <Icon name='close' style={{color: '#FFF',alignSelf: 'center'}} size="large"/>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.articleContent}>
              <div className={styles.articleContentBody}>
                <div className={styles.ArticleWrapper}>
                  <div className={styles.ArticleWrapperContent}>
                    <div className={styles.ArticleTitle}>
                      <h2 className={styles.ArticleTitleH2}>
                        <Ant.Tooltip placement="left" title='优选'>
                          <img src={GoodPng} alt="" style={{width: '36px', height: '36px'}}/>
                        </Ant.Tooltip>
                        We创作介绍Android进阶：六、在子线程中直接使用 Toast 及其原理
                      </h2>
                    </div>
                    <div className={`${styles.ArticleContent} article-content vditor-reset`}>
                      <div id='ArticleContent' style={{width: '816px!important'}}></div>
                    </div>
                    <div className={styles.ArticleCommentContent}>
                      <div className={styles.trendingHeader}>
                        <h4>
                          32 评论
                        </h4>
                      </div>
                      {/*回复*/}
                      <div className={styles.ReplyContent}>
                        <div className={styles.AuthorAvatar}>
                          <Ant.Avatar shape="square" size="large" src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                        </div>
                        <div className={styles.ReplyContentInput} onClick={this.handleReplyOpenClick}>请输入回帖内容 ...</div>
                      </div>
                      {/*评论列表*/}
                      <div className={`${styles.ArticleCommentBody} article_comment`}>
                        <Comment.Group threaded>
                          <Comment>
                            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                            <Comment.Content>
                              <Comment.Author as='a'>Matt</Comment.Author>
                              <Comment.Metadata>
                                <span>Today at 5:42PM</span>
                              </Comment.Metadata>
                              <Comment.Text>
                                2.手把手教你使用 Kotlin 打造通用 Android MVP 架构本场 Chat 会从零开始教会大家如何使用 Kotlin 构建一个模块化的 MVP 架构（附源码），什么是 MVP 架构、模块间的通信、用户在视图上的操作到网络请求的整个数据流向。
                                包括像 Anko、Retrofit、Dagger2、ARouter 等一些第三方插件的使用和封装以及常见问题。最后使用框架完成注册登录流程。
                              </Comment.Text>
                              <Comment.Actions>
                                <a><Icon name='reply'/>回复</a>
                                <a><Icon name='heart outline'/>喜欢</a>
                                <a><Icon name='arrow alternate circle up'/>顶</a>
                                <a><Icon name='arrow alternate circle down'/>踩</a>
                                <a><Icon name='dont'/>举报</a>
                              </Comment.Actions>
                            </Comment.Content>
                          </Comment>
                          <Comment>
                            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                            <Comment.Content>
                              <Comment.Author as='a'>Elliot Fu</Comment.Author>
                              <Comment.Metadata>
                                <span>Yesterday at 12:30AM</span>
                              </Comment.Metadata>
                              <Comment.Text>
                                <p>This has been very useful for my research. Thanks as well!</p>
                              </Comment.Text>
                              <Comment.Actions>
                                <a>Reply</a>
                              </Comment.Actions>
                            </Comment.Content>
                            <Comment.Group>
                              <Comment>
                                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                                <Comment.Content>
                                  <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                  <Comment.Metadata>
                                    <span>Just now</span>
                                  </Comment.Metadata>
                                  <Comment.Text>Elliot you are always so right :)</Comment.Text>
                                  <Comment.Actions>
                                    <a>Reply</a>
                                  </Comment.Actions>
                                </Comment.Content>
                              </Comment>
                            </Comment.Group>
                          </Comment>
                          <Comment>
                            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                            <Comment.Content>
                              <Comment.Author as='a'>Joe Henderson</Comment.Author>
                              <Comment.Metadata>
                                <span>5 days ago</span>
                              </Comment.Metadata>
                              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                              <Comment.Actions>
                                <a>Reply</a>
                              </Comment.Actions>
                            </Comment.Content>
                          </Comment>
                        </Comment.Group>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.ArticleWrapperRight}>
                  <UserCard item={null}/>
                  <AdCard url={"https://react.semantic-ui.com/images/avatar/large/matthew.png"}/>
                </div>
              </div>
            </div>
            <Sidebar as='div' animation='scale down' direction='bottom' visible={visible}>
              <div className={styles.ReplyVditorContent}>
                <div className={styles.ReplyVditorHeader}>
                  <div className={styles.ReplyVditorHeaderTitle}>
                    <Icon name='share' style={{marginRight: '8px'}}/>
                    <Label as='a' image>
                      <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                      Elliot
                    </Label>
                  </div>
                  <div onClick={this.handleReplyCloseClick}>
                    <Icon name='caret down' size='large'/>
                  </div>
                </div>
                <div id='reply-content'></div>
                <div className={styles.ReplyVditorBottom}>
                  <Button.Group size="small" className={styles.ReplyVditorBottomBtn}>
                    <Button positive>评论</Button>
                    <Button.Or text="or" style={{ marginBottom: '2px' }} />
                    <Button color='blue' onClick={this.handleReplyCloseClick}>取消</Button>
                  </Button.Group>
                </div>
              </div>
            </Sidebar>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

