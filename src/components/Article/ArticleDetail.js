import React, { PureComponent, Suspense } from 'react';
import { Icon, Button, Comment, Label, Sidebar, Item } from 'semantic-ui-react';
import * as Ant from 'antd';
import Vditor from 'vditor';
import GoodPng from '../../assets/good.png';
import UserCard from '../User/UserCard';
import { AdCard } from '../Index/AdCard';
import qAnda from '../../assets/q&a.png';

import styles from './ArticleDetail.less';


export default class ArticleDetail extends PureComponent {
  state = {
    vditor: null,
    replyVditor: null,
    visible: false,
    actionVisible: false,
    moreVisible: true,
  };

  componentWillUnmount() {}

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
    });
    this.setState({
      vditor: contentEditor,
      replyVditor: replyEditor,
    });
    contentEditor.setValue('### 安装依赖\n' +
      '```shell\n' +
      '1.安装 redux 依赖\n' +
      'npm install --save redux @tarojs/redux @tarojs/redux-h5 redux-thunk redux-logger\n' +
      '2.安装异步编程依赖\n' +
      'npm install --save @tarojs/async-await\n' +
      '3.安装dva\n' +
      'npm install --save dva-core dva-loading\n' +
      '4.安装 taro-ui\n' +
      'npm install --save taro-ui\n' +
      '```\n' +
      '###### 安装Taro ui注意事项\n' +
      '\n' +
      'H5 配置 `esnextModules`，在 taro 项目的 `config/index.js` 中新增如下配置项：\n' +
      '```json\n' +
      'h5: {\n' +
      '  esnextModules: [\'taro-ui\']\n' +
      '}\n' +
      '```\n' +
      '在`app.js`引入所需样式\n' +
      '```javascript\n' +
      'import \'taro-ui/dist/style/index.scss\' // 全局引入一次即可\n' +
      '```\n' +
      '\n' +
      '### 编写插件\n' +
      '###### 工程目录\n' +
      '```\n' +
      'src\n' +
      '    │  app.js\n' +
      '    │  app.scss\n' +
      '    │  index.html\n' +
      '    │\n' +
      '    ├─asset\n' +
      '    │  └─images\n' +
      '    │\n' +
      '    ├─components\n' +
      '    │  │\n' +
      '    │  └─login\n' +
      '    │          login.js\n' +
      '    │          login.scss\n' +
      '    │\n' +
      '    ├─config\n' +
      '    │      index.js\n' +
      '    │\n' +
      '    ├─constants\n' +
      '    │      common.js\n' +
      '    │\n' +
      '    ├─model\n' +
      '    │      common.js\n' +
      '    │      index.js\n' +
      '    │      login.js\n' +
      '    │\n' +
      '    ├─pages\n' +
      '    │  |\n' +
      '    │  └─login\n' +
      '    │         login.js\n' +
      '    │         login.scss\n' +
      '    │         service.js\n' +
      '    │\n' +
      '    └─utils\n' +
      '            action.js\n' +
      '            common.js\n' +
      '            delay.js\n' +
      '            dva.js\n' +
      '            request.js\n' +
      '\n' +
      '```\n' +
      '各js文件内容：\n' +
      'http://code.githink.cn/Maozk/Taro-Kit')
  }

  _initEditor = data => {
    return new Vditor(data.id, {
      preview: {
        delay: 100,
        show: true,
      },
      height: '100%',
      counter: 102400,
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
  };

  handleReplyCloseClick = () => {
    this.setState({
      visible: false,
    });
  };

  handleMoreClick = () => {
    this.setState({
      actionVisible: true,
      moreVisible: false,
    });
  };

  render() {
    const { handleWrapperCloseClick } = this.props;
    const { visible, moreVisible, actionVisible } = this.state;
    return (
      <div className={`article-detail`}>
        <Sidebar.Pushable as="div">
          <Sidebar.Pusher>
            <div className={styles.ArticleWrapperHeader}>
              <div className={styles.ArticleHeaderContent}>
                <div className={styles.ArticleHeader}>
                  <div className={styles.ArticleUpDownContent}>
                    <div className={styles.ArticleUpIcon}>
                      <Icon name="arrow alternate circle up" />
                    </div>
                    <div className={styles.ArticleIconText}>49.8k</div>
                    <div className={styles.ArticleDownIcon}>
                      <Icon name="arrow alternate circle down" />
                    </div>
                  </div>
                  <div className={styles.ArticleMiddleIcon}>
                    <Icon name="file alternate" />
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
                  <div
                    className={styles.ArticleHeaderActionClose}
                    onClick={handleWrapperCloseClick}
                  >
                    <Icon
                      name="close"
                      style={{ color: '#FFF', alignSelf: 'center' }}
                      size="large"
                    />
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
                        <Ant.Tooltip placement="left" title="优选">
                          <img src={GoodPng} alt="" style={{ width: '36px', height: '36px' }} />
                        </Ant.Tooltip>
                        We创作介绍Android进阶：六、在子线程中直接使用 Toast 及其原理
                      </h2>
                    </div>
                    <div className={`${styles.ArticleContent} article-content vditor-reset`}>
                      <div id="ArticleContent" style={{ width: '816px!important' }} />
                      <div className={styles.trendingHeader} />
                    </div>
                    <div className={styles.ArticleTagAndActionContent}>
                      <div className={styles.ArticleTagContent}>
                        <div className={styles.TagItem}>
                          <Label as="a" image>
                            <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                            IT
                          </Label>
                        </div>
                        <div className={styles.TagItem}>
                          <Label as="a" image>
                            <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                            Docker
                          </Label>
                        </div>
                        <div className={styles.TagItem}>
                          <Label as="a" image>
                            <img src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" />
                            Kubernetes
                          </Label>
                        </div>
                        <div className={styles.TagItem}>
                          <Label as="a" image>
                            <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                            支付
                          </Label>
                        </div>
                      </div>
                      <div className={styles.ArticleActionContent}>
                        <div className={styles.ArticleActionItem}>
                          <Icon name="heart" /> 喜欢
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className={styles.ArticleActionItem}>
                          <Icon name="star" /> 收藏
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div className={styles.ArticleActionItem}>
                          <Icon name="eye" /> 关注
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div
                          className={styles.ArticleActionItem}
                          onClick={this.handleMoreClick}
                          style={{ display: moreVisible ? 'block' : 'none' }}
                        >
                          <Ant.Tooltip placement="top" title="更多">
                            <Icon name="ellipsis horizontal" />
                          </Ant.Tooltip>
                        </div>
                        <div
                          className={styles.ArticleActionItem}
                          style={{ display: actionVisible ? 'block' : 'none' }}
                        >
                          <Icon name="arrow alternate circle up" /> 顶
                        </div>
                        <div
                          className={styles.ArticleActionItem}
                          style={{ display: actionVisible ? 'block' : 'none' }}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <Icon name="arrow alternate circle down" /> 踩
                        </div>
                        <div
                          className={styles.ArticleActionItem}
                          style={{ display: actionVisible ? 'block' : 'none' }}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <Icon name="dont" /> 举报
                        </div>
                        <div
                          className={styles.ArticleActionItem}
                          style={{ display: actionVisible ? 'block' : 'none' }}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <Icon name="share alternate" /> 分享
                        </div>
                      </div>
                    </div>
                    {/*作者信息*/}
                    <div className={styles.ArticleAuthorContent}>
                      <div className={styles.ArticleAuthorBody}>
                        <Ant.Avatar size={64} shape="square" src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                      </div>
                    </div>
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
                    <div className={styles.RelevantArticleContent}>
                      <div className={styles.trendingHeader}>
                        <h4>
                          <Icon name="boxes" color="orange" /> 相关文章
                        </h4>
                      </div>
                      <div className={styles.RelevantArticleBody}>
                        <Item.Group>
                          <Item>
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                            <span className={styles.RelevantArticleText}>
                              王紫璇，这个姑娘颜值太能够打，不仅戏好辨识度还高
                            </span>
                          </Item>
                          <Item>
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                            <span className={styles.RelevantArticleText}>
                              Android进阶：六、在子线程中直接使用 Toast 及其原理
                            </span>
                          </Item>
                          <Item>
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                            <span className={styles.RelevantArticleText}>
                              发文15篇后，我拿到了头条的原创标
                            </span>
                          </Item>
                          <Item>
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                            <span className={styles.RelevantArticleText}>
                              3个月闪婚，郭碧婷大钻戒超抢眼！向佐求婚成功放了什么大招？
                            </span>
                          </Item>
                          <Item>
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                            <span className={styles.RelevantArticleText}>
                              为啥程序员下班后只关显示器从不关电脑？
                            </span>
                          </Item>
                          <Item>
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                            <span className={styles.RelevantArticleText}>
                              Linux平台上直接运行Android应用
                            </span>
                          </Item>
                        </Item.Group>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.ArticleWrapperRight}>
                  <UserCard item={null} />
                  <AdCard url={'https://react.semantic-ui.com/images/avatar/large/matthew.png'} />
                  {/*热文推荐*/}
                  <div className={styles.trendingHeader} style={{ marginTop: '10px' }}>
                    <h4>
                      <Icon name="bolt" color="red" /> 热文推荐
                    </h4>
                  </div>
                  <div className={styles.HotArticleContent}>
                    <div className={styles.HotArticleBody}>
                      <Item.Group>
                        <Item>
                          <Ant.Tooltip placement="top" title="Anni">
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                          </Ant.Tooltip>
                          <Ant.Tooltip placement="top" title="优选">
                            <img src={GoodPng} alt="" style={{ width: '20px', height: '20px',marginLeft: '8px'}} />
                          </Ant.Tooltip>
                          <span className={styles.RelevantArticleText}>
                              王紫璇，这个姑娘颜值太能够打，不仅戏好辨识度还高
                          </span>
                        </Item>
                        <Item>
                          <Ant.Tooltip placement="top" title="Anni">
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                          </Ant.Tooltip>
                          <span className={styles.RelevantArticleText}>
                              Android进阶：六、在子线程中直接使用 Toast 及其原理
                          </span>
                        </Item>
                        <Item>
                          <Ant.Tooltip placement="top" title="Anni">
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                          </Ant.Tooltip>
                          <span className={styles.RelevantArticleText}>
                              发文15篇后，我拿到了头条的原创标
                          </span>
                        </Item>
                        <Item>
                          <Ant.Tooltip placement="top" title="Anni">
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                          </Ant.Tooltip>
                          <Ant.Tooltip placement="top" title="优选">
                            <img src={GoodPng} alt="" style={{ width: '20px', height: '20px',marginLeft: '8px'}} />
                          </Ant.Tooltip>
                          <span className={styles.RelevantArticleText}>
                              3个月闪婚，郭碧婷大钻戒超抢眼！向佐求婚成功放了什么大招？
                          </span>
                        </Item>
                        <Item>
                          <Ant.Tooltip placement="top" title="Anni">
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                          </Ant.Tooltip>
                          <span className={styles.RelevantArticleText}>
                              为啥程序员下班后只关显示器从不关电脑？
                          </span>
                        </Item>
                        <Item>
                          <Ant.Tooltip placement="top" title="Anni">
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                          </Ant.Tooltip>
                          <span className={styles.RelevantArticleText}>
                              Linux平台上直接运行Android应用
                          </span>
                        </Item>
                        <Item>
                          <Ant.Tooltip placement="top" title="Anni">
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                          </Ant.Tooltip>
                          <span className={styles.RelevantArticleText}>
                              王紫璇，这个姑娘颜值太能够打，不仅戏好辨识度还高
                          </span>
                        </Item>
                        <Item>
                          <Ant.Tooltip placement="top" title="Anni">
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                          </Ant.Tooltip>
                          <span className={styles.RelevantArticleText}>
                              Android进阶：六、在子线程中直接使用 Toast 及其原理
                          </span>
                        </Item>
                        <Item>
                          <Ant.Tooltip placement="top" title="Anni">
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                          </Ant.Tooltip>
                          <Ant.Tooltip placement="top" title="优选">
                            <img src={GoodPng} alt="" style={{ width: '20px', height: '20px',marginLeft: '8px'}} />
                          </Ant.Tooltip>
                          <span className={styles.RelevantArticleText}>
                              发文15篇后，我拿到了头条的原创标
                          </span>
                        </Item>
                        <Item>
                          <Ant.Tooltip placement="top" title="Anni">
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                          </Ant.Tooltip>
                          <span className={styles.RelevantArticleText}>
                              3个月闪婚，郭碧婷大钻戒超抢眼！向佐求婚成功放了什么大招？
                          </span>
                        </Item>
                        <Item>
                          <Ant.Tooltip placement="top" title="Anni">
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                          </Ant.Tooltip>
                          <span className={styles.RelevantArticleText}>
                              为啥程序员下班后只关显示器从不关电脑？
                          </span>
                        </Item>
                        <Item>
                          <Ant.Tooltip placement="top" title="Anni">
                            <Item.Image style={{height: '20px',width: '20px'}} size='mini' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                          </Ant.Tooltip>
                          <span className={styles.RelevantArticleText}>
                              Linux平台上直接运行Android应用
                          </span>
                        </Item>
                      </Item.Group>
                    </div>
                  </div>
                  <div className={styles.trendingHeader} style={{ marginTop: '10px' }}>
                    <h4>
                      <Icon name="question circle outline" color="brown" /> 相关问答
                    </h4>
                  </div>
                  <div className={styles.RelevantArticleQuestionContent}>
                    <div className={styles.RelevantArticleQuestionBody}>
                      <Item.Group>
                        <Item>
                          <Item.Image style={{height: '20px',width: '20px'}} size='mini' src={qAnda} />
                          <span className={styles.RelevantArticleQuestionText}>
                              王紫璇，这个姑娘颜值太能够打，不仅戏好辨识度还高
                          </span>
                        </Item>
                        <Item>
                          <Item.Image style={{height: '20px',width: '20px'}} size='mini' src={qAnda} />
                          <span className={styles.RelevantArticleQuestionText}>
                              Android进阶：六、在子线程中直接使用 Toast 及其原理
                          </span>
                        </Item>
                        <Item>
                          <Item.Image style={{height: '20px',width: '20px'}} size='mini' src={qAnda} />
                          <span className={styles.RelevantArticleQuestionText}>
                              发文15篇后，我拿到了头条的原创标
                          </span>
                        </Item>
                        <Item>
                          <Item.Image style={{height: '20px',width: '20px'}} size='mini' src={qAnda} />
                          <span className={styles.RelevantArticleQuestionText}>
                              3个月闪婚，郭碧婷大钻戒超抢眼！向佐求婚成功放了什么大招？
                          </span>
                        </Item>
                        <Item>
                          <Item.Image style={{height: '20px',width: '20px'}} size='mini' src={qAnda} />
                          <span className={styles.RelevantArticleQuestionText}>
                              为啥程序员下班后只关显示器从不关电脑？
                          </span>
                        </Item>
                        <Item>
                          <Item.Image style={{height: '20px',width: '20px'}} size='mini' src={qAnda} />
                          <span className={styles.RelevantArticleQuestionText}>
                              Linux平台上直接运行Android应用
                          </span>
                        </Item>
                        <Item>
                          <Item.Image style={{height: '20px',width: '20px'}} size='mini' src={qAnda} />
                          <span className={styles.RelevantArticleQuestionText}>
                              王紫璇，这个姑娘颜值太能够打，不仅戏好辨识度还高
                          </span>
                        </Item>
                        <Item>
                          <Item.Image style={{height: '20px',width: '20px'}} size='mini' src={qAnda} />
                          <span className={styles.RelevantArticleQuestionText}>
                              Android进阶：六、在子线程中直接使用 Toast 及其原理
                          </span>
                        </Item>
                        <Item>
                          <Item.Image style={{height: '20px',width: '20px'}} size='mini' src={qAnda} />
                          <span className={styles.RelevantArticleQuestionText}>
                              发文15篇后，我拿到了头条的原创标
                          </span>
                        </Item>
                        <Item>
                          <Item.Image style={{height: '20px',width: '20px'}} size='mini' src={qAnda} />
                          <span className={styles.RelevantArticleQuestionText}>
                              3个月闪婚，郭碧婷大钻戒超抢眼！向佐求婚成功放了什么大招？
                          </span>
                        </Item>
                        <Item>
                          <Item.Image style={{height: '20px',width: '20px'}} size='mini' src={qAnda} />
                          <span className={styles.RelevantArticleQuestionText}>
                              为啥程序员下班后只关显示器从不关电脑？
                          </span>
                        </Item>
                        <Item>
                          <Item.Image style={{height: '20px',width: '20px'}} size='mini' src={qAnda} />
                          <span className={styles.RelevantArticleQuestionText}>
                              Linux平台上直接运行Android应用
                          </span>
                        </Item>
                      </Item.Group>
                    </div>
                  </div>
                </div>
              </div>
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
                    <Icon name="caret down" size="large" />
                  </div>
                </div>
                <div id="reply-content" style={{maxWidth: '1380px',minWidth: '1280px',margin: '0 auto'}}/>
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
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
