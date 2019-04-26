import React, { Component } from 'react';
import { Icon, Button, Tab, Label, Menu, Popup } from 'semantic-ui-react';
import * as Ant from 'antd';
import router from 'umi/router';
import AllContent from '../../../components/UserInfo/AllContent/AllContent';
import ArticleContent from '../../../components/UserInfo/ArticleContent/ArticleContent';
import CommentContent from '../../../components/UserInfo/CommentContent/CommentContent';
import QuestionContent from '../../../components/UserInfo/QuestionContent/QuestionContent';
import OpusContent from '../../../components/UserInfo/OpusContent/OpusContent';
import FollowContent from '../../../components/UserInfo/FollowContent/FollowContent';
import ImageContent from '../../../components/UserInfo/ImageContent/ImageContent';
import MoreContent from '../../../components/UserInfo/MoreContent/MoreContent';
import styles from './UserInfo.less';
import svip6 from '../../../assets/vip/svip6.png';
import officialMedal from '../../../assets/medal/official_medal.png';
import userArticleMedal from "../../../assets/medal/user_article_medal.png";
import userQuestionMedal from "../../../assets/medal/user_question_medal.png";
import userInfoMedal from "../../../assets/medal/user_info_medal.png";
import desginGoldMedal from "../../../assets/medal/desgin_gold_medal.png";
import desginSilverMedal from "../../../assets/medal/desgin_silver_medal.png";

//用户详细信息
const UserContent = (
  <div className={styles.UserHeaderInfo}>
    <div className={styles.UserHeaderInfoAvatar}>
      <Ant.Avatar
        shape="square"
        size={90}
        src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
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
          <Icon name="user secret" color={true ? 'red' : 'green'} style={{ lineHeight: '20px', fontSize: '16px'}} />
        </Ant.Tooltip>

        <div className='GlobalAward'>
          <Ant.Tooltip placement="top" title="WE 认证">
            <img src={officialMedal} className='GlobalAwardImg' style={{height: '19px'}} alt=""/>
          </Ant.Tooltip>
        </div>
        <div className='GlobalAward'>
          <Ant.Tooltip placement="top" title="全能奖章">
            <img src={userInfoMedal} className='GlobalAwardImg' style={{height: '22px'}} alt=""/>
          </Ant.Tooltip>
        </div>
        <div className='GlobalAward'>
          <Ant.Tooltip placement="top" title="优质作者">
            <img src={userArticleMedal} className='GlobalAwardImg' style={{height: '23px'}} alt=""/>
          </Ant.Tooltip>
        </div>
        <div className='GlobalAward'>
          <Ant.Tooltip placement="top" title="优质答者">
            <img src={userQuestionMedal} className='GlobalAwardImg' style={{height: '22px'}} alt=""/>
          </Ant.Tooltip>
        </div>
        <div className='GlobalAward'>
          <Ant.Tooltip placement="top" title="金质奖章">
            <img src={desginGoldMedal} className='GlobalAwardImg' style={{height: '20px'}} alt=""/>
          </Ant.Tooltip>
        </div>
        <div className='GlobalAward'>
          <Ant.Tooltip placement="top" title="银质奖章">
            <img src={desginSilverMedal} className='GlobalAwardImg' style={{height: '20px'}} alt=""/>
          </Ant.Tooltip>
        </div>

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
      <div className={styles.UserHeaderAction}>
        <div className={styles.UserActionItem}>
          <Ant.Tooltip placement="top" title="新手/第 8 号会员">
            <Icon name="user" />
          </Ant.Tooltip>
        </div>
        <div className={styles.UserActionItem}>
          <Ant.Tooltip placement="top" title="粉丝 109.8k">
            <Icon name="chess queen" />
          </Ant.Tooltip>
        </div>
        <div className={styles.UserActionItem}>
          <Ant.Tooltip placement="top" title="关注 9">
            <Icon name="heart" />
          </Ant.Tooltip>
        </div>
        <div className={styles.UserActionItem}>
          <Ant.Tooltip placement="top" title="收获点赞 109.8k">
            <Icon name="thumbs up" />
          </Ant.Tooltip>
        </div>
        <div className={styles.UserActionItem}>
          <Ant.Tooltip placement="top" title="文章 22 篇">
            <Icon name="book" />
          </Ant.Tooltip>
        </div>
        <div className={styles.UserActionItem}>
          <Ant.Tooltip placement="top" title="济南">
            <Icon name="location arrow" />
          </Ant.Tooltip>
        </div>
        <div className={styles.UserActionItem}>
          <a href="https://blog.githink.cn" target="_blank">
            <Ant.Tooltip placement="top" title="https://blog.githink.cn">
              <Icon name="linkify" />
            </Ant.Tooltip>
          </a>
        </div>
        <div className={styles.UserActionItem}>
          <a href="https://github.com/githinkcn" target="_blank">
            <Ant.Tooltip placement="top" title="https://github.com/githinkcn">
              <Icon name="github" />
            </Ant.Tooltip>
          </a>
        </div>
        <div className={styles.UserActionItem}>
          <Ant.Tooltip placement="top" title="549595297">
            <Icon name="qq" />
          </Ant.Tooltip>
        </div>
        <div className={styles.UserActionItem}>
          <a href="https://weibo.com/549595297" target="_blank">
            <Ant.Tooltip placement="top" title="549595297">
              <Icon name="weibo" />
            </Ant.Tooltip>
          </a>
        </div>
      </div>
    </div>
  </div>
);
//带背景图的用户详细信息
const UserBgContent = (
  <div
    className={styles.UserBgHeader}
    style={{
      backgroundImage: `url(https://img.hacpai.com/bg/home/1353745196354_1551340749271.jpg?imageslim)`,
    }}
  >
    <div
      className={styles.UserBgHeaderContent}
      style={{
        backgroundImage: 'linear-gradient(90deg, #FF6D185c, rgb(255, 255, 255, 0.76), #FF6D185c)',
      }}
    >
      <div className={styles.UserBgHeaderInfo}>
        <div
          className={styles.UserBgHeaderAvatar}
          style={{
            boxShadow: 'rgba(255, 109, 24, 0.68) 0px 0px 1px',
            backgroundImage: `url("https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png")`,
          }}
        />
        <div className={styles.UserHeaderBgUserInfo}>
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
              <Button color="green" compact onClick={()=>{router.push('/full/chat')}}>
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
                style={{ lineHeight: '20px', fontSize: '16px' }}
              />
            </Ant.Tooltip>

            <div className='GlobalAward'>
              <Ant.Tooltip placement="top" title="WE 认证">
                <img src={officialMedal} className='GlobalAwardImg' style={{height: '19px'}} alt=""/>
              </Ant.Tooltip>
            </div>
            <div className='GlobalAward'>
              <Ant.Tooltip placement="top" title="全能奖章">
                <img src={userInfoMedal} className='GlobalAwardImg' style={{height: '22px'}} alt=""/>
              </Ant.Tooltip>
            </div>
            <div className='GlobalAward'>
              <Ant.Tooltip placement="top" title="优质作者">
                <img src={userArticleMedal} className='GlobalAwardImg' style={{height: '24px'}} alt=""/>
              </Ant.Tooltip>
            </div>
            <div className='GlobalAward'>
              <Ant.Tooltip placement="top" title="优质答者">
                <img src={userQuestionMedal} className='GlobalAwardImg' style={{height: '22px'}} alt=""/>
              </Ant.Tooltip>
            </div>
            <div className='GlobalAward'>
              <Ant.Tooltip placement="top" title="金质奖章">
                <img src={desginGoldMedal} className='GlobalAwardImg' style={{height: '20px'}} alt=""/>
              </Ant.Tooltip>
            </div>
            <div className='GlobalAward'>
              <Ant.Tooltip placement="top" title="银质奖章">
                <img src={desginSilverMedal} className='GlobalAwardImg' style={{height: '20px'}} alt=""/>
              </Ant.Tooltip>
            </div>


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
              <span className={styles.userDesc}>2019年3月31日 19:20:30 加入</span>
            </div>
          </div>
          <div className={styles.UserHeaderAction}>
            <div className={styles.UserActionItem}>
              <Ant.Tooltip placement="top" title="新手/第 8 号会员">
                <Icon name="user" />
              </Ant.Tooltip>
            </div>
            <div className={styles.UserActionItem}>
              <Ant.Tooltip placement="top" title="粉丝 109.8k">
                <Icon name="chess queen" />
              </Ant.Tooltip>
            </div>
            <div className={styles.UserActionItem}>
              <Ant.Tooltip placement="top" title="关注 9">
                <Icon name="heart" />
              </Ant.Tooltip>
            </div>
            <div className={styles.UserActionItem}>
              <Ant.Tooltip placement="top" title="收获点赞 109.8k">
                <Icon name="thumbs up" />
              </Ant.Tooltip>
            </div>
            <div className={styles.UserActionItem}>
              <Ant.Tooltip placement="top" title="文章 22 篇">
                <Icon name="book" />
              </Ant.Tooltip>
            </div>
            <div className={styles.UserActionItem}>
              <Ant.Tooltip placement="top" title="济南">
                <Icon name="location arrow" />
              </Ant.Tooltip>
            </div>
            <div className={styles.UserActionItem}>
              <a href="https://blog.githink.cn" target="_blank">
                <Ant.Tooltip placement="top" title="https://blog.githink.cn">
                  <Icon name="linkify" />
                </Ant.Tooltip>
              </a>
            </div>
            <div className={styles.UserActionItem}>
              <a href="https://github.com/githinkcn" target="_blank">
                <Ant.Tooltip placement="top" title="https://github.com/githinkcn">
                  <Icon name="github" />
                </Ant.Tooltip>
              </a>
            </div>
            <div className={styles.UserActionItem}>
              <Ant.Tooltip placement="top" title="549595297">
                <Icon name="qq" />
              </Ant.Tooltip>
            </div>
            <div className={styles.UserActionItem}>
              <a href="https://weibo.com/549595297" target="_blank">
                <Ant.Tooltip placement="top" title="549595297">
                  <Icon name="weibo" />
                </Ant.Tooltip>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const panes = [
  {
    menuItem: { key: 'all', icon: 'hdd outline', content: '综合' },
    render: () => (
      <Tab.Pane attached={false}>
        <AllContent />
      </Tab.Pane>
    ),
  },
  {
    menuItem: (
      <Menu.Item key="article">
        <Icon name="file alternate outline" /> 文章<Label color="red">15</Label>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane attached={false}>
        <ArticleContent />
      </Tab.Pane>
    ),
  },
  {
    menuItem: (
      <Menu.Item key="comment">
        <Icon name="comment outline" /> 评论<Label color="red">1.1k</Label>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane attached={false}>
        <CommentContent />
      </Tab.Pane>
    ),
  },
  {
    menuItem: (
      <Menu.Item key="question">
        <Icon name="question circle outline" /> 问答<Label color="red">3</Label>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane attached={false}>
        <QuestionContent />
      </Tab.Pane>
    ),
  },
  {
    menuItem: (
      <Menu.Item key="design">
        <Icon name="diamond" /> 作品<Label color="red">3</Label>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane attached={false}>
        <OpusContent />
      </Tab.Pane>
    ),
  },
  {
    menuItem: (
      <Menu.Item key="images">
        <Icon name="images outline" /> 美图<Label color="red">1.1k</Label>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane attached={false}>
        <ImageContent />
      </Tab.Pane>
    ),
  },
  {
    menuItem: (
      <Menu.Item key="eye">
        <Icon name="eye" /> 关注<Label color="red">45.4k</Label>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane attached={false}>
        <FollowContent />
      </Tab.Pane>
    ),
  },
  {
    menuItem: (
      <Menu.Item key="more">
        <Icon name="ellipsis horizontal" /> 更多
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane attached={false}>
        <MoreContent />
      </Tab.Pane>
    ),
  },
];

export default class UserInfo extends Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    let index = Math.floor(Math.random() * 5);
    let UserHeader = null;
    let isBack = true;

    switch (index) {
      case 0:
        UserHeader = (
          <div
            className={styles.UserHeader}
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(131, 72, 187, 0.36), rgba(255, 255, 255, 0.76), rgba(131, 72, 187, 0.36))',
            }}
          >
            {UserContent}
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
          >
            {UserContent}
          </div>
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
          >
            {UserContent}
          </div>
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
          >
            {UserContent}
          </div>
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
          >
            {UserContent}
          </div>
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
          >
            {UserContent}
          </div>
        );
        break;
      default:
    }

    return (
      <div className={styles.Content}>
        {!isBack ? UserHeader : UserBgContent}
        <div className={styles.UserPreviewHeader}>
          <div className={styles.UserPreviewInfoHeader}>
            <div className={styles.UserPreviewInfoHeaderItem}>
              <div className={styles.UserPreviewInfoHeaderItemCnt}>6.0k</div>
              <div className={styles.UserPreviewInfoHeaderItemDesc}>
                <a href="" style={{ padding: '0 5px' }}>
                  个人主页
                </a>
                浏览
              </div>
            </div>
            <div className={styles.UserPreviewInfoHeaderItem}>
              <div className={styles.UserPreviewInfoHeaderItemCnt}>12.0k</div>
              <div className={styles.UserPreviewInfoHeaderItemDesc}>
                <a href="" style={{ padding: '0 5px' }}>
                  文章
                </a>
                +
                <a href="" style={{ padding: '0 5px' }}>
                  评论
                </a>
              </div>
            </div>
            <div className={styles.UserPreviewInfoHeaderItem}>
              <div className={styles.UserPreviewInfoHeaderItemCnt}>212</div>
              <div className={styles.UserPreviewInfoHeaderItemDesc}>
                <a href="" style={{ padding: '0 5px' }}>
                  积分
                </a>{' '}
                +
                <Popup
                  trigger={
                    <img src={svip6} className={styles.userVipImg} style={{ padding: '0 5px' }} />
                  }
                  size="mini"
                >
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
            </div>
            <div className={styles.UserPreviewInfoHeaderItem}>
              <div className={styles.UserPreviewInfoHeaderItemCnt}>1.0k</div>
              <div className={styles.UserPreviewInfoHeaderItemDesc}>
                <a href="" style={{ padding: '0 5px' }}>
                  问答
                </a>
              </div>
            </div>
            <div className={styles.UserPreviewInfoHeaderItem}>
              <div className={styles.UserPreviewInfoHeaderItemCnt}>1.0k</div>
              <div className={styles.UserPreviewInfoHeaderItemDesc}>
                <a href="" style={{ padding: '0 5px' }}>
                  粉丝
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.UserHeaderPreviewDesc} vditor-reset`}>
            #大梦初醒，荒唐了一生# 🎸
          </div>
        </div>
        <div className={`${styles.UserInfoContent} user-info-tab`}>
          <Tab menu={{ color: 'red', pointing: true }} panes={panes} />
        </div>
      </div>
    );
  }
}
