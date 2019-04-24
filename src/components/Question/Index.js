import React, { PureComponent } from 'react';
import {Feed, Icon, Label, Modal} from 'semantic-ui-react';
import * as Ant from 'antd';
import questionIcon from '../../assets/q&a.png';
import QuestionDetail from "../Question/QuestionDetail";

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

  handleWrapperCloseClick = () => {
    this.setState({
      open: false,
    });
  };

  handleUserInfoClick = () => {
    console.log('handleUserInfoClick');
  };

  handleItemClick = () => {
    const { open } = this.state;
    if (open) {
      this.setState({
        open: false,
      });
    } else {
      this.setState({
        open: true,
      });
    }
    console.log('handleItemClick');
  };

  render() {
    const {open} = this.state;
    return (
      <div className={styles.QuestionContent}>
        <Ant.Tooltip placement="top" title='已被采纳'>
          <Label as='a' color='olive' corner='right' icon='checkmark'/>
        </Ant.Tooltip>
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
              <Ant.Avatar onClick={this.handleUserInfoClick}
                src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
                size="large"
                shape="square"
              />
              <Feed.Content style={{paddingLeft:'8px'}} onClick={this.handleItemClick}>
                <Feed.Summary>
                  <a>Joe Henderson</a>
                </Feed.Summary>
                <Feed.Date style={{paddingTop: '8px'}}>
                  3 days ago
                </Feed.Date>
                <Feed.Extra text>
                  <img src={questionIcon} style={{width: '16px',height: '16px'}} alt=""/><a href="" className={styles.RewardTagContent}>&nbsp;# 悬赏问答 #&nbsp;</a>Ours is a life of constant reruns. We're always circling back to where
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
                      <Icon name="eye" />
                      1.1k 浏览
                    </div>
                    <div className={styles.ActionItemText}>
                      <Icon name="bookmark" />
                      1k 收藏
                    </div>
                  </div>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </div>
        <Modal style={{margin: '3rem 0 3rem 0!important'}}
               open={open}
               onClose={() => {
                 this.setState({ open: false });
               }}
               size="fullscreen"
        >
          <QuestionDetail handleWrapperCloseClick={this.handleWrapperCloseClick} />
        </Modal>
      </div>
    )
  }
}
