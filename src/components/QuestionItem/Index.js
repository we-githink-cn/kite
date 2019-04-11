import React, { PureComponent } from 'react';
import { Feed, Icon, } from 'semantic-ui-react';
import * as Ant from 'antd';

import styles from './Index.less';

export default class IndexQuestion extends PureComponent {
  state = {
    open: false,
  };

  componentWillUnmount() {}

  componentDidMount() {
    let { item } = this.props;
  }

  handleUpClick = () => {
    console.log('handleUpClick');
  };

  handleDownClick = () => {
    console.log('handleDownClick');
  };

  render() {
    const {open} = this.state;
    return (
      <div className={styles.QuestionContent}>
        <div className={styles.QuestionItemAction}>
          <div className={styles.QuestionItemActionIcon}>
            <div
              className={`${styles.QuestionItemActionIconItem} ${
                styles.QuestionItemActionIconItemUp
                }`}
              onClick={this.handleUpClick}
            >
              <Icon name="arrow alternate circle up" size="large" />
            </div>
            <div className={styles.QuestionItemActionText}>49.8k</div>
            <div
              className={`${styles.QuestionItemActionIconItem} ${
                styles.QuestionItemActionIconItemDown
                }`}
              onClick={this.handleDownClick}
            >
              <Icon name="arrow alternate circle down" size="large" />
            </div>
          </div>
        </div>
        <div className={styles.QuestionContentBody}>
          <Feed>
            <Feed.Event>
              <Ant.Avatar
                src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
                size="large"
                shape="square"
              />
              <Feed.Content style={{paddingLeft:'8px'}}>
                <Feed.Summary>
                  <a>Joe Henderson</a> posted on his page
                </Feed.Summary>
                <Feed.Date style={{paddingTop: '8px'}}>3 days ago</Feed.Date>
                <Feed.Extra text>
                  Ours is a life of constant reruns. We're always circling back to where
                  we'd we started, then starting all over again. Even if we don't run extra
                  laps that day, we surely will come back for more of the same another day
                  soon.
                </Feed.Extra>
                <Feed.Extra images>
                  <a>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </a>
                  <a>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </a>
                </Feed.Extra>
                <Feed.Meta>
                  <div className={styles.RightActionContent}>
                    <div className={styles.ActionItemText}>
                      <Icon name="comment" />
                      5.1k 评论
                    </div>
                    <div className={styles.ActionItemText}>
                      <Icon name="share" />
                      1.1k 分享
                    </div>
                    <div className={styles.ActionItemText}>
                      <Icon name="star" />
                      1k 收藏
                    </div>
                  </div>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </div>
      </div>
    )
  }
}
