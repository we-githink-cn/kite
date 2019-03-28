import React from 'react';
import { Icon, Button, Popup, Progress} from 'semantic-ui-react';
import * as Ant from 'antd';
import styles from './UserCard.less'
import svip6 from '../../assets/vip/svip6.png';

export const UserCard = user => {
  return (
    <div className={styles.userCard}>
      <div className={styles.userCardContent}>
        <div className={styles.userCardHeader}>
          <div className={styles.userCardHeaderBd} style={{backgroundImage: `url("https://styles.redditmedia.com/t5_spi1u/styles/profileBanner_qsylndybb0a21.jpg?width=1280&height=384&crop=1280:384,smart&s=d73ee78c44b2174b8f80a3b707356af370602dfb")`}}></div>
        </div>
        <div className={styles.userCardAvatar}>
          <div className={styles.userAvatar} style={{backgroundImage: `url("https://styles.redditmedia.com/t5_spi1u/styles/profileIcon_f9143x0bb0a21.jpg?width=256&height=256&crop=256:256,smart&s=7a4730d43a44ba9b77668806d9bdbec3e976495a")`}}></div>
        </div>
        <div className={styles.userNameContent}>
          <span className={styles.userName}>Githinkcn</span>
          <div className={styles.userNameIcon}>
            <Ant.Tooltip placement="top" title={!user.isAdmin ? '站长': '社区管理员'}>
              <Icon name='user secret' color={!user.isAdmin? 'red' : 'green'} style={{lineHeight: '20px'}} />
            </Ant.Tooltip>
          </div>
          <div className={styles.userVip}>
            <Popup
              trigger={<img src={svip6} className={styles.userVipImg}/>}
              size='mini'
            >
              <div>
                <span className={styles.userExpName}>黑钻会员：</span>
                <div className={styles.userExpBar}>
                  <div className={styles.userExpNumber} style={{backgroundColor: '#4CAF50',width: (20000/20000)*100 + '%'}}>20000/20000</div>
                </div>
              </div>
            </Popup>
          </div>
        </div>
        <span className={styles.userDesc}>大梦初醒，荒唐了一生。</span>
        <div className={styles.userActionContent}>
          <div className={styles.userActionItem}>
            <Ant.Tooltip placement="top" title='新手/第 8 号会员'>
              <Icon name='user' />
            </Ant.Tooltip>
          </div>
          <div className={styles.userActionItem}>
            <Ant.Tooltip placement="top" title='粉丝 109.8k'>
              <Icon name='chess queen' />
            </Ant.Tooltip>
          </div>
          <div className={styles.userActionItem}>
            <Ant.Tooltip placement="top" title='关注 9'>
              <Icon name='heart' />
            </Ant.Tooltip>
          </div>
          <div className={styles.userActionItem}>
            <Ant.Tooltip placement="top" title='收获点赞 109.8k'>
              <Icon name='thumbs up' />
            </Ant.Tooltip>
          </div>
          <div className={styles.userActionItem}>
            <Ant.Tooltip placement="top" title='文章 22 篇'>
              <Icon name='book' />
            </Ant.Tooltip>
          </div>
          <div className={styles.userActionItem}>
            <Ant.Tooltip placement="top" title='https://blog.githink.cn'>
              <Icon name='linkify' />
            </Ant.Tooltip>
          </div>
          <div className={styles.userActionItemBtn}>
            <Button compact color='orange' className={styles.userActionBtn}>发新帖</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserCard;
