import React from 'react';
import { Button } from 'semantic-ui-react';
import styles from './UnLoginCard.less'
import logo from '../../assets/black_logo.svg';

export const UnLoginCard = () => {
  return (
    <div className={styles.unLoginCard}>
      <div className={styles.unLoginCardContent}>
        <div className={styles.unLoginCardHeader}></div>
        <div className={styles.unLoginCardLogo}>
          <div className={styles.unLoginCardLogoAtavar}>
            <img src={logo} style={{width: '40px',height: '68px'}}/>
          </div>
          <div className={styles.unLoginCardLogoName}>
            <span className={styles.unLoginCardLogoNameText}>We创作</span>
          </div>
        </div>
        <div className={styles.unLoginCardDesc}>
          The best posts on Reddit for you, pulled from the most active communities on Reddit.
          Check here to see the most shared, upvoted, and commented content on the internet.
        </div>
        <div className={styles.unLoginCardAction}>
          <Button fluid color='olive'>创 作</Button>
        </div>
      </div>
    </div>
  )
}
export default UnLoginCard;
