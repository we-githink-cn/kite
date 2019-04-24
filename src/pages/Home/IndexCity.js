import React, { Component } from 'react';
import { Icon, Image, Pagination, Button, Label, Search, List } from 'semantic-ui-react';
import * as Ant from 'antd';

import styles from './IndexCity.less';

export default class IndexCity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <div className={styles.CityWrapper}>
        <div className={styles.CityHeaderWrapper} style={{ backgroundImage: `url(http://pic.vjshi.com/2017-01-20/1602e2b49097fc80fcf57247fa9bc1eb/00002.jpg?x-oss-process=style/watermark)`, }}>
          <div className={styles.CityHeaderInfo}>
            <div className={styles.CityHeaderName}>
              济南
            </div>
            <div className={styles.CityHeaderDesc}>
              济南因境内泉水众多，拥有“七十二名泉”，被称为“泉城”，素有“四面荷花三面柳，一城山色半城湖”的美誉，济南八景闻名于世，是拥有“山、泉、湖、河、城”独特风貌的旅游城市，是国家历史文化名城、首批中国优秀旅游城市，史前文化——龙山文化的发祥地之一。
            </div>
          </div>
        </div>
      </div>
    )
  }
}
