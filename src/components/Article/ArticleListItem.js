import React, { PureComponent } from 'react';
import { Icon, Image, Item, Button, Header, Modal } from 'semantic-ui-react';
import * as Ant from 'antd';
import GoodPng from '../../assets/good.png'
import styles from './ArticleListItem.less';
import UserCard from "../User/UserCard";
import {AdCard} from "../Index/AdCard";

export default class ArticleListItem extends PureComponent {
  state = {
    open: false
  };

  componentWillUnmount() {

  }

  componentDidMount() {
    let {item} = this.props;
  }

  handleItemClick = () => {
    const {open} = this.state;
    if(open){
      this.setState({
        open: false
      })
    }else{
      this.setState({
        open: true
      })
    }
    console.log("handleItemClick")
  };

  handleUpClick = () => {
    console.log("handleUpClick")
  };

  handleDownClick = () => {
    console.log("handleDownClick")
  };

  handleUserInfoClick = () => {
    console.log("handleUserInfoClick")
  };

  handleWrapperCloseClick =()=>{
    this.setState({
      open: false
    })
  };

  render() {
    const {open} = this.state;
    return (
      <div className={`${styles.postContent} index`}>
        <div className={styles.postItem}>
          <div className={styles.postItemAction}>
            <div className={styles.postItemActionIcon}>
              <div className={`${styles.postItemActionIconItem} ${styles.postItemActionIconItemUp}`} onClick={this.handleUpClick}>
                <Icon name='arrow alternate circle up' size='large' />
              </div>
              <div className={styles.postItemActionText}>
                49.8k
              </div>
              <div className={`${styles.postItemActionIconItem} ${styles.postItemActionIconItemDown}`} onClick={this.handleDownClick}>
                <Icon name='arrow alternate circle down' size='large' />
              </div>
            </div>
          </div>
          <Item.Group className={styles.postRightContent}>
            <Item>
              <Item.Content>
                <div className={styles.postUserInfoContent} onClick={this.handleUserInfoClick}>
                  <div className={styles.postUserInfoAvatar}>
                    <Ant.Avatar src='https://styles.redditmedia.com/t5_2qhwp/styles/communityIcon_xirfqw6qgs811.png' size='large' shape="square" />
                  </div>
                  <div className={styles.postUserInfoView}>
                    <div className={styles.postUserInfoName}>12 Years a Slave</div>
                    <Item.Meta>
                      <span className={styles.cinema}>Union Square 14</span>
                    </Item.Meta>
                  </div>
                </div>
                <Item.Description className={styles.postContentDesc} onClick={this.handleItemClick}>
                  <div className={styles.postContentDescTitle}> Cute dogs come in a variety of shapes</div>
                  <div style={{color: '#AFAFAF',padding: '0', margin: '0'}}>
                    Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.
                    Many people also have their own barometers for what makes a cute dog.
                  </div>
                </Item.Description>
                <Item.Extra onClick={this.handleItemClick}>
                  <div className={styles.rightActionContent}>
                    <div className={styles.actionItemText}>
                      <Icon name='comment' />5.1k 评论
                    </div>
                    <div className={styles.actionItemText}>
                      <Icon name='share' />1.1k 分享
                    </div>
                    <div className={styles.actionItemText}>
                      <Icon name='star' />1k 收藏
                    </div>
                  </div>
                </Item.Extra>
              </Item.Content>
              <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' onClick={this.handleItemClick} />
            </Item>
          </Item.Group>
        </div>
        <Modal open={open} onClose={()=>{this.setState({open: false})}} size='fullscreen' id='articleItem'>
          <div className={styles.ArticleWrapperHeader}>
            <div className={styles.ArticleHeaderContent}>
              <div className={styles.ArticleHeader}>
                <div className={styles.ArticleUpDownContent}>
                  <div className={styles.ArticleUpIcon}>
                    <Icon name='arrow alternate circle up' />
                  </div>
                  <div className={styles.ArticleIconText}>
                    49.8k
                  </div>
                  <div className={styles.ArticleDownIcon}>
                    <Icon name='arrow alternate circle down' />
                  </div>
                </div>
                <div className={styles.ArticleMiddleIcon}>
                  <Icon name='file alternate'/>
                </div>
                <div className={styles.ArticleHeaderTitleContent}>
                  <span className={styles.ArticleHeaderTitleBody}>
                    <h2 className={styles.ArticleHeaderTitle}>
                      Has anyone ever honoured one of those “if we’re still single at 40 let’s get married” commitments? How did it go?
                    </h2>
                  </span>
                </div>
              </div>
              <div className={styles.ArticleHeaderAction}>
                  <div className={styles.ArticleHeaderActionClose} onClick={this.handleWrapperCloseClick}>
                    <Icon name='close' style={{color: '#FFF',alignSelf: 'center'}} size="large"/>
                  </div>
              </div>
            </div>
          </div>
          <div className={styles.articleContent}>
            <div className={styles.articleContentBody}>
              <div className={styles.ArticleWrapper}>
                <div className={styles.ArticleWrapperContent}>
                  <div className={styles.ArticleTitle}>
                    <h2 className={styles.ArticleTitleH2}>
                      <Ant.Tooltip placement="left" title='优选'>
                        <img src={GoodPng} alt="" style={{width: '36px', height: '36px'}}/>
                      </Ant.Tooltip>
                      We创作介绍Android进阶：六、在子线程中直接使用 Toast 及其原理
                    </h2>
                  </div>
                  <div className={styles.ArticleContent}>

                  </div>
                </div>
              </div>
              <div className={styles.ArticleWrapperRight}>
                <UserCard item={null}/>
                <AdCard url={"https://react.semantic-ui.com/images/avatar/large/matthew.png"}/>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

