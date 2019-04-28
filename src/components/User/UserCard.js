import React, { Component }  from 'react';
import { Icon, Button, Popup, Accordion, Image, List } from 'semantic-ui-react';
import * as Ant from 'antd';
import router from 'umi/router';
import { getUser } from '../../utils/utils';
import styles from './UserCard.less';
import svip6 from '../../assets/vip/svip6.png';
import officialMedal from '../../assets/medal/official_medal.png';
import userArticleMedal from "../../assets/medal/user_article_medal.png";
import userQuestionMedal from "../../assets/medal/user_question_medal.png";
import userInfoMedal from "../../assets/medal/user_info_medal.png";
import desginGoldMedal from "../../assets/medal/desgin_gold_medal.png";
import desginSilverMedal from "../../assets/medal/desgin_silver_medal.png";
export default class UserInfo extends Component {

  state = { activeIndex: null };

  componentDidMount() {}

  componentWillUnmount() {}

  handleAccordionClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  };

  render() {
    const {user, handleAvatarClick} = this.props;
    const {activeIndex} = this.state;
    return (
      <div className={`${styles.userCard} user-card`}>
        <div className={styles.userCardContent}>
          <div className={styles.userCardHeader}>
            <div
              className={styles.userCardHeaderBd}
              style={{
                backgroundImage: `url("https://react.semantic-ui.com/images/avatar/large/elliot.jpg")`,
              }}
            />
          </div>
          <div className={styles.userCardAvatar} onClick={handleAvatarClick}>
            <div
              className={styles.userAvatar}
              style={{
                backgroundImage: `url("https://react.semantic-ui.com/images/avatar/large/elliot.jpg")`,
              }}
            />
          </div>
          <div className={styles.userNameContent}>
            <span className={styles.userName}>Githinkcn</span>
            <div className={styles.userNameIcon}>
              <Ant.Tooltip placement="top" title={user ? '站长' : '社区管理员'}>
                <Icon
                  name="user secret"
                  color={user ? 'red' : 'green'}
                  style={{ lineHeight: '20px', fontSize: '16px' }}
                />
              </Ant.Tooltip>
            </div>
            <div className='GlobalAward'>
              <Ant.Tooltip placement="top" title="WE 认证">
                <img src={officialMedal} className='GlobalAwardImg' style={{height: '19px'}} alt=""/>
              </Ant.Tooltip>
            </div>
            <div className={styles.userVip}>
              <Popup trigger={<img src={svip6} className={styles.userVipImg} />} size="mini">
                <div>
                  <span className={styles.userExpName}>黑钻会员：</span>
                  <div className={styles.userExpBar}>
                    <div
                      className={styles.userExpNumber}
                      style={{ backgroundColor: '#4CAF50', width: (20000 / 20000) * 100 + '%' }}
                    >
                      20000/20000
                    </div>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
          <Accordion>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleAccordionClick}>
              大梦初醒，荒唐了一生。
              <Ant.Tooltip placement="top" title="徽章">
                <Icon name='dropdown' style={{float: 'right'}}/>
              </Ant.Tooltip>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <List  verticalAlign='middle'>
                <List.Item>
                  <Image avatar src={userInfoMedal} />
                  <List.Content>
                    <List.Header as='a'>We创作社区 · 全能奖章</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={userArticleMedal} />
                  <List.Content>
                    <List.Header as='a'>We创作社区 · 优质作者</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={userQuestionMedal} />
                  <List.Content>
                    <List.Header as='a'>We创作社区 · 优质答者</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={desginGoldMedal} />
                  <List.Content>
                    <List.Header as='a'>设计板块 · 金质奖章</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src={desginSilverMedal} />
                  <List.Content>
                    <List.Header as='a'>设计板块 · 银质奖章</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Accordion.Content>
          </Accordion>
          <div className={styles.userActionContent}>
            <div className={styles.userActionItem}>
              <Ant.Tooltip placement="top" title="新手/第 8 号会员">
                <Icon name="user" />
              </Ant.Tooltip>
            </div>
            <div className={styles.userActionItem}>
              <Ant.Tooltip placement="top" title="粉丝 109.8k">
                <Icon name="chess queen" />
              </Ant.Tooltip>
            </div>
            <div className={styles.userActionItem}>
              <Ant.Tooltip placement="top" title="关注 9">
                <Icon name="heart" />
              </Ant.Tooltip>
            </div>
            <div className={styles.userActionItem}>
              <Ant.Tooltip placement="top" title="收获点赞 109.8k">
                <Icon name="thumbs up" />
              </Ant.Tooltip>
            </div>
            <div className={styles.userActionItem}>
              <Ant.Tooltip placement="top" title="文章 22 篇">
                <Icon name="book" />
              </Ant.Tooltip>
            </div>
            <div className={styles.userActionItem}>
              <Ant.Tooltip placement="top" title="https://blog.githink.cn">
                <Icon name="linkify" />
              </Ant.Tooltip>
            </div>
            <div className={styles.userActionItemBtn}>
              {!user ? (
                <Button compact color="green" onClick={()=>{router.push('/full/chat')}} className={styles.userActionBtn}>
                  私 信
                </Button>
              ) : (
                <Button compact color="orange" className={styles.userActionBtn}>
                  关注
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
