import React, { PureComponent } from 'react';
import Link from 'umi/link';
import Debounce from 'lodash-decorators/debounce';
import { Menu } from 'semantic-ui-react';
import { Row, Col } from 'antd';
import router from 'umi/router';
import styles from './index.less';
import RightContent from './RightContent';

export default class GlobalHeader extends PureComponent {
  state = { activeItem: 'home' };

  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }

  handleItemClick = (e, { name }) => {
    switch (name) {
      case '首页':
        router.push('/we');
        break;
    }
    this.setState({ activeItem: name });
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
          <Col span={8}>
            <Link to="/we" className={styles.logo} key="logo">
              <img src={logo} alt="logo" width="32" />
              <span className={styles.title}>We!</span>
            </Link>
          </Col>
          <Col span={8}>
            <div className={styles.menu}>
              <Menu secondary>
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
                  name="关注"
                  active={activeItem === '关注'}
                  onClick={this.handleItemClick}
                  icon="heart outline"
                />
                <Menu.Item
                  name="最新"
                  active={activeItem === '最新'}
                  onClick={this.handleItemClick}
                  icon="clock outline"
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
