import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import router from 'umi/router';
import styles from './create.less';

class Create extends Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  handleItemClick = index => {
    switch (index) {
      case 1:
        router.push('/we/create/article');
        break;

      default:
    }
  };

  render() {
    return (
      <div>
        <div className={styles.wrapper} style={{ marginTop: '40px' }}>
          <div className={styles.item} onClick={this.handleItemClick.bind(this, 1)}>
            <a>
              <Icon name="pen square" size="huge" />
              <br />
              <div className={styles.title}>发文</div>
            </a>
            <div className={styles.text}>创作一篇属于你自己的文字，分享你的文字。</div>
          </div>
          <div className={styles.item}>
            <a>
              <Icon name="question circle outline" size="huge" />
              <br />
              <div className={styles.title}>发问</div>
            </a>
            <div className={styles.text}>遇到难题了，找小伙伴问一问吧</div>
          </div>
        </div>
        <div className={styles.wrapper} style={{ marginTop: '40px' }}>
          <div className={styles.item}>
            <a>
              <Icon name="camera retro" size="huge" />
              <br />
              <div className={styles.title}>发图</div>
            </a>
            <div className={styles.text}>发一张自己拍摄的美图或是旅途的风景。</div>
          </div>
          <div className={styles.item}>
            <a>
              <Icon name="crop" size="huge" />
              <br />
              <div className={styles.title}>发作品</div>
            </a>
            <div className={styles.text}>分享一下自己的作品，让更多人知道你的能力。</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Create;
