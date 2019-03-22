import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Row, Col } from 'antd';
import styles from './create.less';

class Create extends Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <Row type="flex" justify="space-around" align="middle" className={styles.content} gutter={24}>
        <Col span={12}>
          <div className={styles.item}>
            <Icon name="pen square" size="massive" />
            <Row>发文</Row>
          </div>
        </Col>
        <Col span={12}>
          <div className={styles.item}>
            <Icon name="question circle" size="massive" />
            <Row>发问</Row>
          </div>
        </Col>
      </Row>
    );
  }
}
export default Create;
