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
              潍坊
            </div>
            <div className={styles.CityHeaderDesc}>
              潍坊，山东省下辖地级市，古称“潍州”、“潍县”，又名“鸢都”，位于山东半岛的中部，与青岛、日照、淄博、烟台、临沂等地相邻。
              气候属暖温带季风型半湿润大陆性气候，市域地貌自北向南，由低到高，形成几个台阶。截至2016年，辖4区6市2县。2017年总人口936.3万人。
            </div>
          </div>
        </div>
        <div className={styles.CityContentWrapper}>
          <div className={styles.CityMainWrapper}>

          </div>
          <div className={styles.CityMateWrapper}>

          </div>
        </div>
      </div>
    )
  }
}
