import React from 'react';
import { Icon, Button, Popup, Progress } from 'semantic-ui-react';
import * as Ant from 'antd';
import { getUser } from '../../utils/utils';
import styles from './UserCard.less';
import svip6 from '../../assets/vip/svip6.png';

export const UserCard = user => {
  let currentUser = getUser();
  return (
    <div className={styles.userCard}>
      <div className={styles.userCardContent}>
        <div className={styles.userCardHeader}>
          <div
            className={styles.userCardHeaderBd}
            style={{
              backgroundImage: `url("https://react.semantic-ui.com/images/avatar/large/elliot.jpg")`,
            }}
          />
        </div>
        <div className={styles.userCardAvatar}>
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
            <Ant.Tooltip placement="top" title={!user.isAdmin ? '站长' : '社区管理员'}>
              <Icon
                name="user secret"
                color={!user.isAdmin ? 'red' : 'green'}
                style={{ lineHeight: '20px' }}
              />
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
        <span className={styles.userDesc}>大梦初醒，荒唐了一生。</span>
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
            {!(user.uid === 'id') ? (
              <Button compact color="orange" className={styles.userActionBtn}>
                发新帖
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
};
export default UserCard;
