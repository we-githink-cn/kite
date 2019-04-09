import React, { Component } from 'react';
import {
  Icon,
  Button,
  Tab,
  Label, Menu,
  Popup,
} from 'semantic-ui-react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import * as Ant from 'antd';
import router from 'umi/router';
import styles from './UserInfo.less';
import svip6 from '../../../assets/vip/svip6.png';
//用户详细信息
const UserContent = (<div className={styles.UserHeaderInfo}>
  <div className={styles.UserHeaderInfoAvatar}>
    <Ant.Avatar
      shape="square"
      size={84}
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
</div>);
//带背景图的用户详细信息
const UserBgContent = (<div
  className={styles.UserBgHeader}
  style={{
    backgroundImage: `url(https://img.hacpai.com/bg/home/1353745196354_1551340749271.jpg?imageslim)`,
  }}
>
  <div
    className={styles.UserBgHeaderContent}
    style={{
      backgroundImage:
        'linear-gradient(90deg, #FF6D185c, rgb(255, 255, 255, 0.76), #FF6D185c)',
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
            <Popup
              trigger={<img src={svip6} className={styles.userVipImg} />}
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
</div>);
const AllContent = (
  <div className={styles.AllContent}>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Icon name='user' size='large'/>}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Icon name='user'/>}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Icon name='user'/>}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>
          User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Icon name='user'/>}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
          User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<Icon name='user'/>}
      >
        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>
          Strategy, Social Media
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<Icon name='user'/>}
      >
        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>
          Creative Direction, User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<Icon name='user'/>}
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>
          Creative Direction, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<Icon name='user'/>}
      />
    </VerticalTimeline>

  </div>
);
const panes = [
  { menuItem: { key: 'all', icon: 'hdd outline', content: '综合' }, render: () => <Tab.Pane attached={false}>
      {AllContent}
    </Tab.Pane> },
  { menuItem: (<Menu.Item key='messages'>Messages<Label>15</Label></Menu.Item>), render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
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

    return <div className={styles.Content}>
      { !isBack ? (UserHeader):(UserBgContent)}
      <div className={styles.UserPreviewHeader}>
        <div className={styles.UserPreviewInfoHeader}>
          <div className={styles.UserPreviewInfoHeaderItem}>
            <div className={styles.UserPreviewInfoHeaderItemCnt}>6.0k</div>
            <div className={styles.UserPreviewInfoHeaderItemDesc}>
              <a href="" style={{padding: '0 5px'}}>个人主页</a>浏览
            </div>
          </div>
          <div className={styles.UserPreviewInfoHeaderItem}>
            <div className={styles.UserPreviewInfoHeaderItemCnt}>12.0k</div>
            <div className={styles.UserPreviewInfoHeaderItemDesc}>
              <a href="" style={{padding: '0 5px'}}>文章</a>+
              <a href="" style={{padding: '0 5px'}}>评论</a>
            </div>
          </div>
          <div className={styles.UserPreviewInfoHeaderItem}>
            <div className={styles.UserPreviewInfoHeaderItemCnt}>212</div>
            <div className={styles.UserPreviewInfoHeaderItemDesc}>
              <a href="" style={{padding: '0 5px'}}>积分</a> +
              <Popup trigger={<img src={svip6} className={styles.userVipImg} style={{padding: '0 5px'}}/>} size="mini">
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
              <a href="" style={{padding: '0 5px'}}>问答</a>
            </div>
          </div>
          <div className={styles.UserPreviewInfoHeaderItem}>
            <div className={styles.UserPreviewInfoHeaderItemCnt}>1.0k</div>
            <div className={styles.UserPreviewInfoHeaderItemDesc}>
              <a href="" style={{padding: '0 5px'}}>粉丝</a>
            </div>
          </div>
        </div>
        <div className={`${styles.UserHeaderPreviewDesc} vditor-reset`}>大梦初醒，荒唐了一生 😁</div>
      </div>
      <div className={styles.UserInfoContent}>
        <Tab menu={{ color: 'red', pointing: true,}} panes={panes} />
      </div>
    </div>;
  }
}
