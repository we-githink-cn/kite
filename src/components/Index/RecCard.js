import React from 'react';
import * as Ant from 'antd';
import styles from './RecCard.less'
import {Icon} from "semantic-ui-react";

const RecCard = ({user}) => {
  return (
    <div className={styles.recCardItem}>
      <div className={styles.recCardItemContent}>
        <div className={styles.recCardItemAvatarContent}>
          <div className={styles.recCardItemAvatarBody}>
            <Ant.Avatar src={user.avatar} />
          </div>
        </div>
        <div className={styles.recCardUserInfo}>
          <div className={styles.recCardUserInfoBody}>
            <a href="" className={styles.recCardUserName}>r/petthedamnduck</a>
            <div>
              <p className={styles.recCardUserDesc}>1.4k subscribers</p>
            </div>
          </div>
        </div>
        <div className={styles.recCardItemAction}>
          <div className={styles.recCardItemActionBtn}>
            <Icon name='add'/> 关 注
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecCard;
