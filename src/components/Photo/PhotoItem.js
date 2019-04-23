import React, {PureComponent} from 'react';
import {Icon, Modal, Header, Image, Button, Comment, Dropdown, Checkbox, Sidebar, Label} from 'semantic-ui-react';
import * as Ant from 'antd';
import Vditor from 'vditor';
import AwesomeSlider from 'react-awesome-slider';
import AvatarList from '../../components/AvatarList';
import blackLogo from '../../assets/black_logo.svg'

import styles from './PhotoItem.less';

export default class PhotoItem extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      detailVisible: false,
      commentLoading: false,
      commentVditor:null,
      commentVisible: false,
      open: false
    }
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUpdate (nextProps, nextState) {}

  componentDidUpdate (prevProps, prevState) {}

  handleCommentClick =()=>{
    this.setState({
      commentVisible: true,
    },()=>{
      const commentVditor = this._initCommentEditor({
        id: 'detail-comment-content',
        show: true,
        height: 200,
        placeholder: '请输入内容',
        resize: true,
      });
      this.setState({
        commentVditor: commentVditor,
      })
    });
  };

  handleCommentCancelClick = () => {
    this.state.commentVditor.setValue('');
    this.setState({
      commentVisible: false,
    });
  }

  handleOpenDetail = () => {
    this.setState({
      detailVisible: true,
    });
  };

  _initCommentEditor = data =>{
    return new Vditor(data.id, {
      cache: false,
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
        position: 'bottom',
        enable: data.resize,
      },
      placeholder: data.placeholder,
    });
  }

  handleImagePreviewClick = () => {
    this.setState({
      open: true
    })
  };

  render() {
    const {src} = this.props;
    const {
      detailVisible,
      commentLoading,
      commentVisible,
      open
    } = this.state;
    return (
      <div className={styles.PhotoItemContent}>
        <div className={styles.PhotoItemHeader} onClick={this.handleOpenDetail}>
          <div className={styles.PhotoItemHeaderAvatar}>
            <Header as='h4'>
              <Image circular src={src} /> Patrick
            </Header>
          </div>
          <div className={styles.PhotoItemHeaderIcon}>
            <Icon name='ellipsis horizontal'/>
          </div>
        </div>
        <div className={styles.PhotoItemImageContent}>
          <img src={src}  alt=""/>
          <span onClick={this.handleImagePreviewClick}><Icon name='clone outline' className={styles.PhotoItemImageIcon} /></span>
        </div>
        <div className={styles.PhotoItemActionContent}>
          <div className={styles.PhotoItemActionItem}>
            <Icon name='heart outline'/>
          </div>
          <div className={styles.PhotoItemActionItem}>
            <Icon name='comment outline'/>
          </div>
          <div className={styles.PhotoItemActionItem}>
            <Icon name='bookmark outline'/>
          </div>
        </div>
        <div className={styles.PhotoItemIconText}>
          4,117 次赞
        </div>
        <div className={`${styles.PhotoItemText} vditor-reset`} dangerouslySetInnerHTML={{ __html: '<p>Kotlin 是一个用于现代多平台应用的静态编程语言，由 JetBrains 开发。Kotlin可以编译成Java字节码，也可以编译成JavaScript，方便在没有JVM的设备上运行。Kotlin已正式成为Android官方支持开发语言。此外，Kotlin还是一门融合了面向对象与函数式编程的语言，支持泛型、安全的空判断，并且Kotlin与Java可以做到完全的交互。</p>' }}/>
        <div className={styles.PhotoItemDesc}>
          <div className={styles.PhotoItemCommentText}>
            全部 77 条评论
          </div>
          <div className={styles.PhotoItemTimeText}>
            4 小时前
          </div>
        </div>
        {/*图片预览*/}
        <Modal open={open} basic className={styles.ImagePreview} onClose={()=>{this.setState({open:false})}} closeIcon>
          <AwesomeSlider style={{position: 'relative'}}>
            <div data-src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
            <div data-src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg" />
            <div data-src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" />
          </AwesomeSlider>
          <div className={styles.ImagePreviewTextMate}>
            <div className={`${styles.ImagePreviewText} vditor-reset`} dangerouslySetInnerHTML={{ __html: '<p>Kotlin 是一个用于现代多平台应用的静态编程语言，由 JetBrains 开发。Kotlin可以编译成Java字节码，也可以编译成JavaScript，方便在没有JVM的设备上运行。Kotlin已正式成为Android官方支持开发语言。此外，Kotlin还是一门融合了面向对象与函数式编程的语言，支持泛型、安全的空判断，并且Kotlin与Java可以做到完全的交互。</p>' }}/>
          </div>
          <div className={styles.ImagePreviewActionWrapper}>
            <div className={styles.ImagePreviewActionItem}>
              <Icon name='comment outline'/> 2326
            </div>
            <div className={styles.ImagePreviewActionItem}>
              <Icon name='star outline'/> 989
            </div>
            <div className={styles.ImagePreviewActionItem}>
              <Icon name='heart outline'/> 1232
            </div>
            <div className={styles.ImagePreviewActionItem}>
              <Icon name='mail outline'/>
            </div>
          </div>
        </Modal>
        {/*详情*/}
        <Modal open={detailVisible} closeIcon onClose={() => { this.setState({ detailVisible: false }); }} style={{ width: '642px', borderRadius: '8px', marginTop: '4rem', marginBottom: '4rem' }}>
          <Modal.Content>
            <div className={styles.DetailWrapper}>
              <div className={styles.DetailContent}>
                <div className={styles.DetailHeaderWrapper}>
                  <div className={styles.DetailHeaderAvatar}>
                    <Header as='h2'>
                      <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                      <Header.Content>
                        Patrick
                        <Header.Subheader>Manage your preferences</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </div>
                  <div className={styles.DetailHeaderAction}>
                    <Button compact color='orange'>关 注</Button>
                    <Dropdown trigger={<Icon name='angle down' size='large'/>} pointing='top left' icon={null} >
                      <Dropdown.Menu>
                        <Dropdown.Item text='复制圈图链接' icon='copy'/>
                        <Dropdown.Item text='复制圈图链接' icon='copy'/>
                        <Dropdown.Item text='复制圈图链接' icon='copy'/>
                        <Dropdown.Item text='复制圈图链接' icon='copy'/>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className={`${styles.DetailText} vditor-reset`} dangerouslySetInnerHTML={{ __html: '<p>Kotlin 是一个用于现代多平台应用的静态编程语言，由 JetBrains 开发。Kotlin可以编译成Java字节码，也可以编译成JavaScript，方便在没有JVM的设备上运行。Kotlin已正式成为Android官方支持开发语言。此外，Kotlin还是一门融合了面向对象与函数式编程的语言，支持泛型、安全的空判断，并且Kotlin与Java可以做到完全的交互。</p>' }}/>
                <div className={styles.DetailImageContent}>
                  <img src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'  alt=""/>
                  <span><Icon name='clone outline' className={styles.DetailImageIcon}/></span>
                </div>
                <div className={styles.DetailTimeContent}>
                  <span className={styles.DetailTimeText}>2019-04-21 12:00</span>
                </div>
                <div className={styles.DetailLikeAndShareContent}>
                  <div className={styles.DetailLikeAndShareText}>
                    {/*<Ant.Tooltip placement="top" title={'收藏'}>*/}
                    {/*<Icon name='star outline'/>*/}
                    {/*</Ant.Tooltip>*/}
                    收藏
                    &nbsp;<strong style={{color: '#333'}}>2444</strong>
                  </div>
                  <div className={styles.DetailLikeAndShareText}>
                    {/*<Ant.Tooltip placement="top" title={'喜欢'}>*/}
                    {/*<Icon name='heart outline'/>*/}
                    {/*</Ant.Tooltip>*/}
                    喜欢
                    &nbsp;<strong style={{color: '#333'}}>5677</strong>
                  </div>
                  <div className={styles.DetailAvatar}>
                    <AvatarList size="small" style={{marginLeft:'-130px!important'}} maxLength={5} excessItemsStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                      <AvatarList.Item tips="Jake" src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />
                      <AvatarList.Item tips="Andy" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" />
                      <AvatarList.Item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
                      <AvatarList.Item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
                      <AvatarList.Item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
                      <AvatarList.Item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
                    </AvatarList>
                  </div>
                </div>
                <div className={styles.DetailActionWrapper}>
                  <div className={styles.DetailActionItem}>
                    <Icon name='comment outline' size='large'/> <span className={styles.DetailActionItemText}>24</span>
                  </div>
                  <div className={styles.DetailActionItem}>
                    <Icon name='star outline' size='large'/> <span className={styles.DetailActionItemText}>25674</span>
                  </div>
                  <div className={styles.DetailActionItem}>
                    <Icon name='heart outline' size='large'/> <span className={styles.DetailActionItemText}>66</span>
                  </div>
                  <div className={styles.DetailActionItem}>
                    <Icon name='mail outline' size='large'/>
                  </div>
                </div>
                <div className={styles.DetailCommentWrapper}>
                  <div className={styles.ReplyContent} onClick={this.handleCommentClick}>
                    <div className={styles.AuthorAvatar}>
                      <Ant.Avatar
                        shape="square"
                        size="large"
                        src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                      />
                    </div>
                    <div className={styles.ReplyContentInput}>
                      请输入内容...
                    </div>
                  </div>
                </div>
                <div className={`${styles.DetailCommentBody} article_comment`}>
                  <Comment.Group threaded size='large'>
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
          </Modal.Content>
          <div className={styles.DetailLoadMoreWrapper}>
            查看更多评论
          </div>
          <div className={styles.DetailFootWrapper}>
            <Ant.Spin spinning={commentLoading} delay={500}>
              { !commentLoading &&
              <img src={blackLogo} alt="logo"  width={32}/>
              }
            </Ant.Spin>
          </div>
        </Modal>
        {/*评论*/}
        <Modal open={commentVisible} closeIcon onClose={() => { this.setState({ commentVisible: false }); }} style={{ width: '652px', borderRadius: '8px', marginTop: '4rem', marginBottom: '4rem' }}>
        <div className={styles.ReplyVditorContent}>
          <div className={styles.ReplyVditorHeader}>
            <div className={styles.ReplyVditorHeaderTitle}>
              <Icon name="share" style={{marginRight: '8px'}}/>
              <Label as="a" image>
                <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"/>
                Elliot
              </Label>
            </div>
            <div
              className={styles.ReplyVditorHeaderIcon}
              onClick={this.handleCommentCancelClick}
            >
              <Ant.Tooltip placement="left" title="取消">
                <Icon name="caret down" size="large"/>
              </Ant.Tooltip>
            </div>
          </div>
          <div
            id="detail-comment-content"
            style={{maxWidth: '620px', minWidth: '620px', margin: '0 auto'}}
          />
          <div className={styles.ReplyVditorBottom}>
            <Button.Group size="small" className={styles.ReplyVditorBottomBtn}>
              <Button positive>评论</Button>
              <Button.Or text="or" style={{marginBottom: '2px'}}/>
              <Button color="blue" onClick={this.handleCommentCancelClick}>
                取消
              </Button>
            </Button.Group>
          </div>
        </div>
      </Modal>
      </div>
    )
  }
}
