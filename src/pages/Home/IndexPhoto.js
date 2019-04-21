import React, { Component } from 'react';
import { Icon, Modal, Header, Image, Button, Comment, Dropdown, Checkbox } from 'semantic-ui-react';
import * as Ant from 'antd';
import Vditor from 'vditor';
import router from 'umi/router';
import RecCard from '../../components/Index/RecCard';
import AvatarList from '../../components/AvatarList';
import PhotoItem from '../../components/Photo/PhotoItem';
import blackLogo from '../../assets/black_logo.svg'

import styles from './IndexPhoto.less';

const options = [
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
];

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vditor: null,
      putVisible: false,
      detailVisible: false,
      previewVisible: false,
      previewImage: '',
      fileList: [],
      tags: options,
      currentTags: [],
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  _initVditor = data => {
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
      counter: 512,
      resize: {
        position: 'bottom',
        enable: data.resize,
      },
      placeholder: data.placeholder,
      toolbar: [
        {
          hotkey: '⌘-e',
          name: 'emoji',
          tipPosition: 'ne',
        },
        {
          hotkey: '⌘-h',
          name: 'headings',
          tipPosition: 'ne',
        },
        {
          hotkey: '⌘-b',
          name: 'bold',
          prefix: '**',
          suffix: '**',
          tipPosition: 'ne',
        },
        {
          hotkey: '⌘-i',
          name: 'italic',
          prefix: '*',
          suffix: '*',
          tipPosition: 'ne',
        },
        {
          hotkey: '⌘-s',
          name: 'strike',
          prefix: '~~',
          suffix: '~~',
          tipPosition: 'ne',
        },
        {
          hotkey: '⌘-d',
          name: 'line',
          prefix: '---\n',
          tipPosition: 'n',
        },
        {
          hotkey: '⌘-.',
          name: 'quote',
          prefix: '> ',
          tipPosition: 'n',
        },
        {
          hotkey: '⌘-l',
          name: 'list',
          prefix: '* ',
          tipPosition: 'n',
        },
        {
          hotkey: '⌘-o',
          name: 'ordered-list',
          prefix: '1. ',
          tipPosition: 'n',
        },
        {
          hotkey: '⌘-j',
          name: 'check',
          prefix: '* [ ] ',
          tipPosition: 'n',
        },
        {
          hotkey: '⌘-z',
          name: 'undo',
          tipPosition: 'n',
        },
        {
          hotkey: '⌘-y',
          name: 'redo',
          tipPosition: 'n',
        },
        {
          hotkey: '⌘-k',
          name: 'link',
          prefix: '[',
          suffix: '](https://)',
          tipPosition: 'n',
        },
        {
          hotkey: '⌘-p',
          name: 'preview',
          tipPosition: 'nw',
        },
        {
          hotkey: "⌘-'",
          name: 'fullscreen',
          tipPosition: 'nw',
        },
        {
          name: 'br',
        },
      ],
    });
  };

  handlePutOpenClick = () => {
    this.setState(
      {
        putVisible: true,
      },
      () => {
        const vditor = this._initVditor({
          id: 'put-content',
          show: false,
          height: 200,
          placeholder: '请输入内容',
          resize: true,
        });
        this.setState({
          vditor: vditor,
        });
      }
    );
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  handleAddition = (e, { value }) => {
    this.setState({
      tags: [{ text: value, value }, ...this.state.tags],
    });
  };

  handleTagChange = (e, { value }) => this.setState({ currentTags: value });

  handleOpenDetail = () => {
    this.setState({
      detailVisible: true,
    });
  };

  render() {
    const {
      putVisible,
      previewVisible,
      detailVisible,
      previewImage,
      fileList,
      currentTags,
    } = this.state;

    const recList = [
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
      },
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg',
      },
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
      },
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
      },
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/small/veronika.jpg',
      },
      {
        avatar: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
      },
    ];
    return (
      <div className={styles.PhotoWrapper}>
        <div className={styles.PhotoMainWrapper}>
          <div className={styles.PhotoMainContent}>
            <PhotoItem src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg" />
            <PhotoItem src="https://react.semantic-ui.com/images/avatar/large/steve.jpg" />
            <PhotoItem src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg" />
          </div>
        </div>
        <div className={styles.PhotoMateWrapper}>
          <div className={styles.PutContent}>
            <div className={styles.ReplyContent}>
              <div className={styles.AuthorAvatar}>
                <Ant.Avatar
                  shape="square"
                  size="large"
                  src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                />
              </div>
              <div className={styles.ReplyContentInput} onClick={this.handlePutOpenClick}>
                发一条图圈？
              </div>
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <div className="GlobalLineHeader">
              <h4>
                <Icon name="star" color="teal" /> 推荐作者
              </h4>
            </div>
            <div className={styles.recCard}>
              <div className={styles.recCardContent}>
                {recList.map((item, index) => (
                  <RecCard user={item} key={index} />
                ))}
              </div>
            </div>
            <div className={styles.recCardBtn}>
              <Button
                color="brown"
                compact
                fluid
                content="查看更多"
                onClick={this.handleUserListClick}
              />
            </div>
          </div>
        </div>
        <Modal
          size="small"
          open={putVisible}
          closeIcon
          onClose={() => {
            this.setState({ putVisible: false });
          }}
        >
          <div className={styles.moduleHeader} style={{ paddingTop: '10px' }}>
            <h3>发图</h3>
          </div>
          <Modal.Content>
            <div className={styles.PutBody}>
              <div style={{ width: '100%' }} className="Put-Upload">
                <Ant.Upload.Dragger
                  name="file"
                  multiple={true}
                  action=""
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 9 ? (
                    <p className="ant-upload-text">最多支持上传9张图片。</p>
                  ) : (
                    <div>
                      <p className="ant-upload-drag-icon">
                        <Ant.Icon type="inbox" />
                      </p>
                      <p className="ant-upload-text">
                        单击或拖动文件到此区域进行上传，支持单个或批量上传。
                      </p>
                    </div>
                  )}
                </Ant.Upload.Dragger>
              </div>

              <div id="put-content" style={{ width: '678px', margin: '0 auto' }} />

              <div className={styles.wrapper}>
                <div className={styles.weFlex}>
                  <div className={styles.weFlex1}>
                    <div className={styles.module}>
                      <div className={styles.moduleHeader}>
                        <h4>标签</h4>
                      </div>
                      <div className={styles.postModule}>
                        <Dropdown
                          options={this.state.tags}
                          placeholder="回车添加标签"
                          search
                          selection
                          fluid
                          multiple
                          allowAdditions
                          additionLabel="添加: "
                          value={currentTags}
                          onAddItem={this.handleAddition}
                          onChange={this.handleTagChange}
                        />
                      </div>
                    </div>
                    <div className={styles.module}>
                      <div className={styles.moduleHeader}>
                        <h4>其他</h4>
                      </div>
                      <div className={styles.postModule}>
                        <Checkbox toggle defaultChecked label={{ children: '允许回帖' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.weFlex}>
                  <div className={styles.weFlex1}>
                    <Icon size="large" name="hand point right outline" />{' '}
                    <span className={styles.ftH5}>发文</span>
                    <span className={styles.ftGray}>
                      <span className={styles.ftGreen}>图圈</span>分享你身边的美好
                    </span>
                  </div>
                  <Button.Group size="small">
                    <Button
                      onClick={() => {
                        this.setState({ putVisible: false });
                      }}
                    >
                      取消
                    </Button>
                    <Button.Or text="or" style={{ marginBottom: '2px' }} />
                    <Button positive onClick={this.handleSaveClick}>
                      保存
                    </Button>
                  </Button.Group>
                </div>
              </div>
            </div>

            <Modal
              open={previewVisible}
              closeIcon
              onClose={() => {
                this.setState({ previewVisible: false });
              }}
            >
              <Modal.Content image>
                <img style={{ width: '100%', height: '100%' }} src={previewImage} alt="" />
              </Modal.Content>
            </Modal>
          </Modal.Content>
        </Modal>
        <Modal
          open={true}
          closeIcon
          onClose={() => {
            this.setState({ detailVisible: false });
          }}
          style={{ width: '642px', borderRadius: '8px', marginTop: '4rem', marginBottom: '4rem' }}
        >
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
                  <div className={styles.ReplyContent}>
                    <div className={styles.AuthorAvatar}>
                      <Ant.Avatar
                        shape="square"
                        size="large"
                        src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                      />
                    </div>
                    <div className={styles.ReplyContentInput} onClick={this.handlePutOpenClick}>
                      发一条图圈？
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
          <div className={styles.DetailFootWrapper}>
            <img src={blackLogo} alt="logo"  width={32}/>
          </div>
        </Modal>
      </div>
    );
  }
}
