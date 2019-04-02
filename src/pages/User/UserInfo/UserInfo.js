import React, { Component } from 'react';
import {
  Input,
  Icon,
  Button,
  Checkbox,
  Dropdown,
  Header,
  Image,
  Modal,
  Popup,
} from 'semantic-ui-react';
import * as Ant from 'antd';
import router from 'umi/router';
import styles from './UserInfo.less';
import svip6 from '../../../assets/vip/svip6.png';

export default class UserInfo extends Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    let index = Math.floor(Math.random() * 5);
    console.log(index);
    let UserHeader = null;
    switch (0) {
      case 0:
        UserHeader = (
          <div
            className={styles.UserHeader}
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(131, 72, 187, 0.36), rgba(255, 255, 255, 0.76), rgba(131, 72, 187, 0.36))',
            }}
          >
            <div className={styles.UserHeaderInfo}>
              <div className={styles.UserHeaderInfoAvatar}>
                <Ant.Avatar
                  shape="square"
                  size={72}
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </div>
              <div className={styles.UserHeaderUserInfo}>
                <div className={styles.UserHeaderUserName}>
                  <div className={styles.UserHeaderUserNameContent}>
                    <h2>
                      <a href="" style={{ lineHeight: '44px' }}>
                        Githinkcn
                      </a>
                    </h2>
                    <span className={styles.UserHeaderUserId}>549595297</span>
                  </div>
                  <div className={styles.UserHeaderUserNameContentAction}>
                    <Button color="green" compact>
                      私信
                    </Button>
                    <Button color="orange" compact>
                      关注
                    </Button>
                  </div>
                </div>
                <div className={styles.UserHeaderOtherInfo}>
                  <Ant.Tooltip placement="top" title={true ? '站长' : '社区管理员'}>
                    <Icon
                      name="user secret"
                      color={true ? 'red' : 'green'}
                      style={{ lineHeight: '20px' }}
                    />
                  </Ant.Tooltip>

                  <div className={styles.userVip}>
                    <Popup trigger={<img src={svip6} className={styles.userVipImg} />} size="mini">
                      <div>
                        <span className={styles.userExpName}>黑钻会员：</span>
                        <div className={styles.userExpBar}>
                          <div
                            className={styles.userExpNumber}
                            style={{
                              backgroundColor: '#4CAF50',
                              width: (20000 / 20000) * 100 + '%',
                            }}
                          >
                            20000/20000
                          </div>
                        </div>
                      </div>
                    </Popup>
                  </div>
                  <div>
                    <span className={styles.userDesc}>大梦初醒，荒唐了一生。</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        break;
      case 1:
        UserHeader = (
          <div
            className={styles.UserHeader}
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(118, 199, 129, 0.36), rgba(255, 255, 255, 0.76), rgba(118, 199, 129, 0.36))',
            }}
          />
        );
        break;
      case 2:
        UserHeader = (
          <div
            className={styles.UserHeader}
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(152, 130, 134, 0.36), rgba(255, 255, 255, 0.76), rgba(152, 130, 134, 0.36))',
            }}
          />
        );
        break;
      case 3:
        UserHeader = (
          <div
            className={styles.UserHeader}
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(7, 152, 145, 0.36), rgba(255, 255, 255, 0.76), rgba(7, 152, 145, 0.36))',
            }}
          />
        );
        break;
      case 4:
        UserHeader = (
          <div
            className={styles.UserHeader}
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(144, 130, 67, 0.36), rgba(255, 255, 255, 0.76), rgba(144, 130, 67, 0.36))',
            }}
          />
        );
        break;
      case 5:
        UserHeader = (
          <div
            className={styles.UserHeader}
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(181, 134, 103, 0.36), rgba(255, 255, 255, 0.76), rgba(181, 134, 103, 0.36))',
            }}
          />
        );
        break;
      default:
    }

    return <div className={styles.Content}>{UserHeader}</div>;
  }
}
