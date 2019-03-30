import React, { PureComponent } from 'react';
import { Icon, Button, Comment, Form, Header} from 'semantic-ui-react';
import * as Ant from 'antd';
import Vditor from 'vditor';
import GoodPng from '../../assets/good.png'
import styles from './ArticleDetail.less';
import UserCard from "../User/UserCard";
import {AdCard} from "../Index/AdCard";


export default class ArticleDetail extends PureComponent {
  state = {
    vditor: null,
  };

  componentWillUnmount() {

  }

  componentDidMount() {
    const contentEditor = this._initEditor({
      id: 'ArticleContent',
    });
    this.setState({
      vditor: contentEditor,
    });
  }

  _initEditor = data => {
    return new Vditor(data.id, {
      preview: {
        delay: 100,
        show: true,
      },
      height: '100%',
      counter: 102400,
    });
  };


  render() {
    const { handleWrapperCloseClick } = this.props;
    return (
      <div>
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
                    We创作介绍Android进阶：六、在子线程中直接使用 Toast 及其原理
                    </h2>
                  </span>
              </div>
            </div>
            <div className={styles.ArticleHeaderAction}>
              <div className={styles.ArticleHeaderActionClose} onClick={handleWrapperCloseClick}>
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
                <div className={`${styles.ArticleContent} article-content vditor-reset`}>
                  <div id='ArticleContent' style={{width: '816px!important'}}></div>
                </div>
                <div className={styles.ArticleCommentContent}>
                  <Form reply>
                    <Form.TextArea />
                    <Button style={{float: 'right'}} content='Add Reply' labelPosition='left' icon='edit' primary />
                  </Form>
                  <div className={styles.trendingHeader}>
                    <h4>
                      32 评论
                    </h4>
                  </div>
                  <div className={`${styles.ArticleCommentBody} article_comment`}>
                    <Comment.Group threaded>
                      <Comment>
                        <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                        <Comment.Content>
                          <Comment.Author as='a'>Matt</Comment.Author>
                          <Comment.Metadata>
                            <span>Today at 5:42PM</span>
                          </Comment.Metadata>
                          <Comment.Text>How artistic!</Comment.Text>
                          <Comment.Actions>
                            <a>Reply</a>
                          </Comment.Actions>
                        </Comment.Content>
                      </Comment>

                      <Comment>
                        <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                        <Comment.Content>
                          <Comment.Author as='a'>Elliot Fu</Comment.Author>
                          <Comment.Metadata>
                            <span>Yesterday at 12:30AM</span>
                          </Comment.Metadata>
                          <Comment.Text>
                            <p>This has been very useful for my research. Thanks as well!</p>
                          </Comment.Text>
                          <Comment.Actions>
                            <a>Reply</a>
                          </Comment.Actions>
                        </Comment.Content>

                        <Comment.Group>
                          <Comment>
                            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                            <Comment.Content>
                              <Comment.Author as='a'>Jenny Hess</Comment.Author>
                              <Comment.Metadata>
                                <span>Just now</span>
                              </Comment.Metadata>
                              <Comment.Text>Elliot you are always so right :)</Comment.Text>
                              <Comment.Actions>
                                <a>Reply</a>
                              </Comment.Actions>
                            </Comment.Content>
                          </Comment>
                        </Comment.Group>
                      </Comment>

                      <Comment>
                        <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                        <Comment.Content>
                          <Comment.Author as='a'>Joe Henderson</Comment.Author>
                          <Comment.Metadata>
                            <span>5 days ago</span>
                          </Comment.Metadata>
                          <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                          <Comment.Actions>
                            <a>Reply</a>
                          </Comment.Actions>
                        </Comment.Content>
                      </Comment>
                    </Comment.Group>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ArticleWrapperRight}>
              <UserCard item={null}/>
              <AdCard url={"https://react.semantic-ui.com/images/avatar/large/matthew.png"}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

