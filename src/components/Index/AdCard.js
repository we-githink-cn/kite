import React from 'react';
import styles from './AdCard.less'

export const AdCard = ({url}) => {
  return (
    <a href="" className={styles.rightAd} style={{backgroundImage: `url(${url})`}}>
      <span className={styles.aDbadge}>广告</span>
    </a>
  )
};
