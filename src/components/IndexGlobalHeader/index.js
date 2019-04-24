import React, { PureComponent } from 'react';
import Link from 'umi/link';
import Debounce from 'lodash-decorators/debounce';
import { Menu } from 'semantic-ui-react';
import { Row, Col } from 'antd';
import router from 'umi/router';
import styles from './index.less';
import RightContent from './RightContent';

export default class GlobalHeader extends PureComponent {
  state = {  };

  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }

  handleItemClick = (e, { name }) => {
    switch (name) {
      case '首页':
        router.push('/');
        break;
      case '问答':
        router.push('/index/question');
        break;
      case '作品':
        router.push('/full/opus');
        break;
      case '图圈':
        router.push('/index/photo');
        break;
      case '同城':
        router.push('/full/city');
        break;
      default:

    }
    this.setState({
      activeItem: name
    })
  };

  /* eslint-disable*/
  @Debounce(600)
  triggerResizeEvent() {
    // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  render() {
    const { logo } = this.props;
    const { activeItem } = this.state;
    return (
      <div className={styles.header}>
        <Row>
          <Col
            span={8}
            className={styles.logo}
            onClick={() => {
              router.push('/');
            }}
          >
            <img src={logo} alt="logo" width="32" />
            <span className={styles.title}>We!</span>
          </Col>
          <Col span={8}>
            <div className={styles.menu}>
              <Menu secondary style={{ margin: '0 auto' }}>
                <Menu.Item
                  name="首页"
                  icon="compass outline"
                  active={activeItem === '首页'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="问答"
                  active={activeItem === '问答'}
                  onClick={this.handleItemClick}
                  icon="question circle outline"
                />
                <Menu.Item
                  name="作品"
                  active={activeItem === '作品'}
                  onClick={this.handleItemClick}
                  icon="stumbleupon circle"
                />
                <Menu.Item
                  name="图圈"
                  active={activeItem === '图圈'}
                  onClick={this.handleItemClick}
                  icon="camera retro"
                />
                <Menu.Item
                  name="同城"
                  active={activeItem === '同城'}
                  onClick={this.handleItemClick}
                  icon="dot circle outline"
                />
              </Menu>
            </div>
          </Col>
          <Col span={8}>
            <RightContent {...this.props} />
          </Col>
        </Row>
      </div>
    );
  }
}
