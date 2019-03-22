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
      <Row type="flex" justify="space-around" align="middle" className={styles.content} gutter={16}>
        <Col span={12} className={styles.item}>
          <Icon name="pen square" size="massive" />
          <Row>发文</Row>
        </Col>
        <Col span={12} className={styles.item}>
          <Icon name="question circle" size="massive" />
          <Row>发问</Row>
        </Col>
      </Row>
    );
  }
}
export default Create;
