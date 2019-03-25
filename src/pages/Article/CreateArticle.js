import React, { Component } from 'react';
import { Input, Icon, Button, Checkbox, Dropdown, Header, Image, Modal } from 'semantic-ui-react';
import * as Ant from 'antd';
import Vditor from 'vditor';

import styles from './CreateArticle.less';

const Dragger = Ant.Upload.Dragger;

const props = {
  name: 'file',
  multiple: false,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const options = [
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
];

const corpusOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: {
      avatar: true,
      src: 'https://raw.githubusercontent.com/we-githink-cn/teal/master/teal.jpg',
    },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: {
      avatar: true,
      src: 'https://raw.githubusercontent.com/githinkcn/Giteer/sub/screenshot/giteer.jpg',
    },
  },
];
export default class CreateArticle extends Component {
  state = {
    vditor: null,
    isOpen: true,
    display: 'none',
    tags: options,
    currentTags: [],
    corpus: [],
    open: false,
  };

  componentDidMount() {
    const contentEditor = this._initEditor({
      id: 'contentEditor',
      show: true,
      height: 647,
      placeholder: '请输入内容',
      resize: true,
    });
    this.setState({
      vditor: contentEditor,
    });
  }

  componentWillUnmount() {}

  _initEditor = data => {
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
        enable: data.resize,
      },
      placeholder: data.placeholder,
    });
  };

  handleSettingClick = () => {
    const { isOpen } = this.state;
    if (isOpen) {
      this.setState({
        isOpen: !isOpen,
        display: 'block',
      });
    } else {
      this.setState({
        isOpen: true,
        display: 'none',
      });
    }
  };

  handleAddition = (e, { value }) => {
    this.setState({
      tags: [{ text: value, value }, ...this.state.tags],
    });
  };

  handleChange = (e, { value }) => this.setState({ currentTags: value });

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { currentTags, open } = this.state;
    return (
      <div className={styles.content}>
        <Input size="big" label="标题" placeholder="请输入标题" />
        <div
          id="contentEditor"
          style={{ height: '647px', backgroundColor: '#f6f8fa', flex: '1' }}
        />
        <div className={styles.postSetting}>
          <div className={styles.wrapper} style={{ display: this.state.display }}>
            <div className={styles.weFlex}>
              <div className={styles.weFlex1}>
                <div className={styles.module}>
                  <div className={styles.moduleHeader}>
                    <h4>文集</h4>
                  </div>
                  <div className={styles.postModule}>
                    <div className={styles.corpusFlex}>
                      <div className={styles.corpusFlex1}>
                        <Dropdown placeholder="选择文集" fluid selection options={corpusOptions} />
                      </div>
                      <Button
                        onClick={this.show}
                        style={{ marginLeft: '8px' }}
                        color="orange"
                        content="新增文集"
                        icon="list alternate outline"
                        labelPosition="left"
                      />
                    </div>
                  </div>
                </div>
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
                      onChange={this.handleChange}
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
                  <span className={styles.ftGreen}>分享</span>对别人有帮助的经验与见解
                </span>
              </div>
              <Button.Group size="small">
                <Button onClick={this.handleSettingClick}>设置</Button>
                <Button.Or text="or" style={{ marginBottom: '2px' }} />
                <Button positive>保存</Button>
              </Button.Group>
            </div>
          </div>
        </div>
        <Modal dimmer="blurring" open={open} onClose={this.close}>
          <Modal.Header>添加新文集</Modal.Header>
          <Modal.Content>
            <div className={styles.module}>
              <div className={styles.moduleHeader}>
                <h4>文集封面</h4>
              </div>
              <div className={styles.postModule}>
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <Ant.Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">单击或拖动文件到此区域上传</p>
                </Dragger>
              </div>
            </div>
            <div className={styles.module}>
              <div className={styles.moduleHeader}>
                <h4>文集名称</h4>
              </div>
              <div className={styles.postModule}>
                <Input fluid placeholder="文集名称" />
              </div>
            </div>
            <div className={styles.module}>
              <div className={styles.moduleHeader}>
                <h4>其他</h4>
              </div>
              <div className={styles.postModule}>
                <Checkbox toggle defaultChecked label={{ children: '私密文集' }} />
              </div>
            </div>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.close}>
              取消
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="保存"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
