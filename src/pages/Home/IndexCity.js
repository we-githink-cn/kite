import React, { Component } from 'react';
import {Icon, Image, Pagination, Button, Label, Search, List, Dropdown, Card, Item} from 'semantic-ui-react';
import * as Ant from 'antd';

import styles from './IndexCity.less';
import PhotoItem from "../../components/Photo/PhotoItem";
import ArticleListItem from "../../components/Article/ArticleListItem";
import OpusItem from "../../components/Opus/OpusItem";
import QuestionItem from "../../components/Question/Index";
import GoodPng from "../../assets/good.png";
import qAnda from "../../assets/q&a.png";
import camera from "../../assets/camera.png";
import opus from "../../assets/opus.png";

export default class IndexCity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const {width} =this.props;
    return (
      <div className={styles.CityWrapper}>
        <div className={styles.CityHeaderWrapper} style={{ backgroundImage: `url(http://pic.vjshi.com/2017-01-20/1602e2b49097fc80fcf57247fa9bc1eb/00002.jpg?x-oss-process=style/watermark)`, }}>
          <div className={styles.CityHeaderInfo}>
            <div className={styles.CityHeaderName}>
              潍坊
            </div>
            <div className={styles.CityHeaderDesc}>
              潍坊，山东省下辖地级市，古称“潍州”、“潍县”，又名“鸢都”，位于山东半岛的中部，与青岛、日照、淄博、烟台、临沂等地相邻。
              气候属暖温带季风型半湿润大陆性气候，市域地貌自北向南，由低到高，形成几个台阶。截至2016年，辖4区6市2县。2017年总人口936.3万人。
            </div>
          </div>
        </div>
        <div className={styles.CityContentWrapper}>
          <div className={styles.CityMainWrapper}>
            <div className="GlobalLineHeader" style={{ marginTop: '8px',marginBottom:'12px' }}>
              <Ant.Breadcrumb>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="file alternate outline" color="red" />
                  <span>文章</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="question circle outline" color="orange" />
                  <span>问答</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="stumbleupon circle" color="olive" />
                  <span>作品</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="camera retro" color="blue" />
                  <span>图圈</span>
                </Ant.Breadcrumb.Item>
              </Ant.Breadcrumb>
            </div>
            <div className={styles.CityMainItem}>
              <PhotoItem src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg" marginBottom='12px'/>
              <ArticleListItem/>
              <Card.Group style={{marginTop:'4px',marginBottom:'12px',justifyContent: 'space-between' }}>
                <OpusItem width='285px'/>
                <OpusItem width='285px'/>
              </Card.Group>
              <QuestionItem width='590px'/>
            </div>

            <div className={styles.CityMainItem}>
              <PhotoItem src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg" marginBottom='12px'/>
              <ArticleListItem/>
              <Card.Group style={{marginTop:'4px',marginBottom:'12px',justifyContent: 'space-between' }}>
                <OpusItem width='285px'/>
                <OpusItem width='285px'/>
              </Card.Group>
              <QuestionItem width='590px'/>
            </div>
          </div>
          <div className={styles.CityMateWrapper}>
            <div>
              {/*同城热议*/}
              <div className="GlobalLineHeader">
                <h4>
                  <Icon name="wpforms" color="red" /> 同城热议
                </h4>
              </div>
              <div className={styles.HotArticleContent}>
                <div className={styles.HotArticleBody}>
                  <Item.Group>
                    <Item>
                      <Ant.Tooltip placement="top" title="Anni">
                        <Item.Image
                          style={{ height: '20px', width: '20px' }}
                          size="mini"
                          src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                        />
                      </Ant.Tooltip>
                      <Ant.Tooltip placement="top" title="优选">
                        <img
                          src={GoodPng}
                          alt=""
                          style={{ width: '20px', height: '20px', marginLeft: '8px' }}
                        />
                      </Ant.Tooltip>
                      <span className={styles.RelevantArticleText}>
                            王紫璇，这个姑娘颜值太能够打，不仅戏好辨识度还高
                          </span>
                    </Item>
                    <Item>
                      <Ant.Tooltip placement="top" title="Anni">
                        <Item.Image
                          style={{ height: '20px', width: '20px' }}
                          size="mini"
                          src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                        />
                      </Ant.Tooltip>
                      <span className={styles.RelevantArticleText}>
                            Android进阶：六、在子线程中直接使用 Toast 及其原理
                          </span>
                    </Item>
                    <Item>
                      <Ant.Tooltip placement="top" title="Anni">
                        <Item.Image
                          style={{ height: '20px', width: '20px' }}
                          size="mini"
                          src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                        />
                      </Ant.Tooltip>
                      <span className={styles.RelevantArticleText}>
                            发文15篇后，我拿到了头条的原创标
                          </span>
                    </Item>
                    <Item>
                      <Ant.Tooltip placement="top" title="Anni">
                        <Item.Image
                          style={{ height: '20px', width: '20px' }}
                          size="mini"
                          src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                        />
                      </Ant.Tooltip>
                      <Ant.Tooltip placement="top" title="优选">
                        <img
                          src={GoodPng}
                          alt=""
                          style={{ width: '20px', height: '20px', marginLeft: '8px' }}
                        />
                      </Ant.Tooltip>
                      <span className={styles.RelevantArticleText}>
                            3个月闪婚，郭碧婷大钻戒超抢眼！向佐求婚成功放了什么大招？
                          </span>
                    </Item>
                    <Item>
                      <Ant.Tooltip placement="top" title="Anni">
                        <Item.Image
                          style={{ height: '20px', width: '20px' }}
                          size="mini"
                          src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                        />
                      </Ant.Tooltip>
                      <span className={styles.RelevantArticleText}>
                            为啥程序员下班后只关显示器从不关电脑？
                          </span>
                    </Item>
                    <Item>
                      <Ant.Tooltip placement="top" title="Anni">
                        <Item.Image
                          style={{ height: '20px', width: '20px' }}
                          size="mini"
                          src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                        />
                      </Ant.Tooltip>
                      <span className={styles.RelevantArticleText}>
                            Linux平台上直接运行Android应用
                          </span>
                    </Item>
                    <Item>
                      <Ant.Tooltip placement="top" title="Anni">
                        <Item.Image
                          style={{ height: '20px', width: '20px' }}
                          size="mini"
                          src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                        />
                      </Ant.Tooltip>
                      <span className={styles.RelevantArticleText}>
                            王紫璇，这个姑娘颜值太能够打，不仅戏好辨识度还高
                          </span>
                    </Item>
                    <Item>
                      <Ant.Tooltip placement="top" title="Anni">
                        <Item.Image
                          style={{ height: '20px', width: '20px' }}
                          size="mini"
                          src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                        />
                      </Ant.Tooltip>
                      <span className={styles.RelevantArticleText}>
                            Android进阶：六、在子线程中直接使用 Toast 及其原理
                          </span>
                    </Item>
                    <Item>
                      <Ant.Tooltip placement="top" title="Anni">
                        <Item.Image
                          style={{ height: '20px', width: '20px' }}
                          size="mini"
                          src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                        />
                      </Ant.Tooltip>
                      <Ant.Tooltip placement="top" title="优选">
                        <img
                          src={GoodPng}
                          alt=""
                          style={{ width: '20px', height: '20px', marginLeft: '8px' }}
                        />
                      </Ant.Tooltip>
                      <span className={styles.RelevantArticleText}>
                            发文15篇后，我拿到了头条的原创标
                          </span>
                    </Item>
                    <Item>
                      <Ant.Tooltip placement="top" title="Anni">
                        <Item.Image
                          style={{ height: '20px', width: '20px' }}
                          size="mini"
                          src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                        />
                      </Ant.Tooltip>
                      <span className={styles.RelevantArticleText}>
                            3个月闪婚，郭碧婷大钻戒超抢眼！向佐求婚成功放了什么大招？
                          </span>
                    </Item>
                    <Item>
                      <Ant.Tooltip placement="top" title="Anni">
                        <Item.Image
                          style={{ height: '20px', width: '20px' }}
                          size="mini"
                          src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                        />
                      </Ant.Tooltip>
                      <span className={styles.RelevantArticleText}>
                            为啥程序员下班后只关显示器从不关电脑？
                          </span>
                    </Item>
                    <Item>
                      <Ant.Tooltip placement="top" title="Anni">
                        <Item.Image
                          style={{ height: '20px', width: '20px' }}
                          size="mini"
                          src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                        />
                      </Ant.Tooltip>
                      <span className={styles.RelevantArticleText}>
                            Linux平台上直接运行Android应用
                          </span>
                    </Item>
                  </Item.Group>
                </div>
              </div>
              {/*优质作品*/}
              <div className='GlobalLineHeader' style={{ marginTop: '10px' }}>
                <h4>
                  <Icon name="stumbleupon circle" color="olive" /> 优质作品
                </h4>
              </div>
              <div className={styles.RelevantArticleQuestionContent}>
                <div className={styles.RelevantArticleQuestionBody}>
                  <Item.Group>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={opus}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            王紫璇，这个姑娘颜值太能够打，不仅戏好辨识度还高
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={opus}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            Android进阶：六、在子线程中直接使用 Toast 及其原理
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={opus}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            发文15篇后，我拿到了头条的原创标
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={opus}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            3个月闪婚，郭碧婷大钻戒超抢眼！向佐求婚成功放了什么大招？
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={opus}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            为啥程序员下班后只关显示器从不关电脑？
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={opus}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            Linux平台上直接运行Android应用
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={opus}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            王紫璇，这个姑娘颜值太能够打，不仅戏好辨识度还高
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={opus}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            Android进阶：六、在子线程中直接使用 Toast 及其原理
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={opus}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            发文15篇后，我拿到了头条的原创标
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={opus}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            3个月闪婚，郭碧婷大钻戒超抢眼！向佐求婚成功放了什么大招？
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={opus}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            为啥程序员下班后只关显示器从不关电脑？
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={opus}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            Linux平台上直接运行Android应用
                          </span>
                    </Item>
                  </Item.Group>
                </div>
              </div>
              {/*同城图圈*/}
              <div className='GlobalLineHeader' style={{ marginTop: '10px' }}>
                <h4>
                  <Icon name="camera retro" color="orange" /> 潍坊图圈
                </h4>
              </div>
              <div className={styles.RelevantArticleQuestionContent}>
                <div className={styles.RelevantArticleQuestionBody}>
                  <Item.Group>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={camera}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            王紫璇，这个姑娘颜值太能够打，不仅戏好辨识度还高
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={camera}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            Android进阶：六、在子线程中直接使用 Toast 及其原理
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={camera}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            发文15篇后，我拿到了头条的原创标
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={camera}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            3个月闪婚，郭碧婷大钻戒超抢眼！向佐求婚成功放了什么大招？
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={camera}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            为啥程序员下班后只关显示器从不关电脑？
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={camera}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            Linux平台上直接运行Android应用
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={camera}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            王紫璇，这个姑娘颜值太能够打，不仅戏好辨识度还高
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={camera}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            Android进阶：六、在子线程中直接使用 Toast 及其原理
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={camera}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            发文15篇后，我拿到了头条的原创标
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={camera}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            3个月闪婚，郭碧婷大钻戒超抢眼！向佐求婚成功放了什么大招？
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={camera}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            为啥程序员下班后只关显示器从不关电脑？
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={camera}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            Linux平台上直接运行Android应用
                          </span>
                    </Item>
                  </Item.Group>
                </div>
              </div>
              {/*同城问答*/}
              <div className='GlobalLineHeader' style={{ marginTop: '10px' }}>
                <h4>
                  <Icon name="question circle outline" color="brown" /> 相关问答
                </h4>
              </div>
              <div className={styles.RelevantArticleQuestionContent}>
                <div className={styles.RelevantArticleQuestionBody}>
                  <Item.Group>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={qAnda}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            王紫璇，这个姑娘颜值太能够打，不仅戏好辨识度还高
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={qAnda}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            Android进阶：六、在子线程中直接使用 Toast 及其原理
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={qAnda}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            发文15篇后，我拿到了头条的原创标
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={qAnda}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            3个月闪婚，郭碧婷大钻戒超抢眼！向佐求婚成功放了什么大招？
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={qAnda}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            为啥程序员下班后只关显示器从不关电脑？
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={qAnda}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            Linux平台上直接运行Android应用
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={qAnda}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            王紫璇，这个姑娘颜值太能够打，不仅戏好辨识度还高
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={qAnda}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            Android进阶：六、在子线程中直接使用 Toast 及其原理
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={qAnda}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            发文15篇后，我拿到了头条的原创标
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={qAnda}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            3个月闪婚，郭碧婷大钻戒超抢眼！向佐求婚成功放了什么大招？
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={qAnda}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            为啥程序员下班后只关显示器从不关电脑？
                          </span>
                    </Item>
                    <Item>
                      <Item.Image
                        style={{ height: '20px', width: '20px' }}
                        size="mini"
                        src={qAnda}
                      />
                      <span className={styles.RelevantArticleQuestionText}>
                            Linux平台上直接运行Android应用
                          </span>
                    </Item>
                  </Item.Group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
