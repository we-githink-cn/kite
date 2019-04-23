import React, { Component } from 'react';
import {Icon, Modal, Header, Image, Button, Comment, Dropdown, Checkbox, Sidebar, Label} from 'semantic-ui-react';
import * as Ant from 'antd';
import Vditor from 'vditor';
import AvatarList from '../../components/AvatarList';
import blackLogo from '../../assets/black_logo.svg'
import RecCard from '../../components/Index/RecCard';
import PhotoItem from '../../components/Photo/PhotoItem';
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
      commentLoading: false,
      commentVditor:null,
      commentVisible: false,
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  _initVditor = data => {
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

  render() {
    const {
      putVisible,
      previewVisible,
      detailVisible,
      previewImage,
      fileList,
      currentTags,
      commentLoading,
      commentVisible,
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
            <PhotoItem src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg" onClick={this.handleOpenDetail}/>
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
      </div>
    );
  }
}
