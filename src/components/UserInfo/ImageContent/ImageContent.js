import React, { PureComponent } from 'react';
import { Label, Menu, Tab, Icon, Pagination,Item } from 'semantic-ui-react';
import * as Ant from 'antd';

import styles from './ImageContent.less';
import {scrollToAnchor} from "../../../utils/utils";

export default class ImageContent extends PureComponent {

  state = {
    totalPages: 0,
    imagePage: 1,
    page: 1,
    pageSize: 20,
  };

  componentWillUnmount() {}

  componentDidMount() {
    let { item } = this.props;
    this._initTotalPages();
  }

  _initTotalPages = () => {
    const { pageSize } = this.state;
    this.setState({
      totalPages: Math.ceil(9999 / pageSize),
    });
  };

  handlePageChange = (event, { activePage }) => {
    this.setState({
      imagePage: activePage,
    });
    scrollToAnchor('myImages');
  };

  render() {
    const { totalPages, imagePage } = this.state;
    const panes = [
      {
        menuItem: (
          <Menu.Item key="myImages">
            我的图圈 <Label color="red">15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane>
          <div className="GlobalPagesWrapper" id="myImages">
            <div className="GlobalLineHeader">
              <Ant.Breadcrumb>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="reply all" color="blue" />
                  <span>回复</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="arrow alternate circle up" color="red" />
                  <span>赞同</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="sort amount down" color="orange" />
                  <span>倒序</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="sort amount up" color="brown" />
                  <span>正序</span>
                </Ant.Breadcrumb.Item>
              </Ant.Breadcrumb>
            </div>
            <div className="GlobalPagesContent" style={{marginBottom: '12px'}}>
              <div className="GlobalPages">
                <Pagination
                  activePage={imagePage}
                  pointing
                  secondary
                  ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                  firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                  lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                  prevItem={{ content: <Icon name="angle left" />, icon: true }}
                  nextItem={{ content: <Icon name="angle right" />, icon: true }}
                  totalPages={totalPages}
                  onPageChange={this.handlePageChange.bind(this)}
                />
              </div>
            </div>
            <Item.Group divided>
              <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                <Item.Content>
                  <Item.Header as='a'>Cute Dog</Item.Header>
                  <Item.Description>
                    在真实项目开发中，你可能会需要 Redux 或者 MobX 这样的数据流方案，Ant Design React 作为一个 UI 库，可以和任何 React 生态圈内的数据流方案以及应用框架搭配使用。我们基于 Redux 推出了自己的最佳实践 dva，以及可插拔的企业级应用框架 umi，推荐你在项目中使用。
                  </Item.Description>
                  <Item.Extra>
                    <Icon color='green' name='check' /> 121 Votes
                  </Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                <Item.Content>
                  <Item.Header as='a'>Cute Dog</Item.Header>
                  <Item.Description>
                    在真实项目开发中，你可能会需要 Redux 或者 MobX 这样的数据流方案，Ant Design React 作为一个 UI 库，可以和任何 React 生态圈内的数据流方案以及应用框架搭配使用。我们基于 Redux 推出了自己的最佳实践 dva，以及可插拔的企业级应用框架 umi，推荐你在项目中使用。
                  </Item.Description>
                  <Item.Extra>
                    <Icon color='green' name='check' /> 121 Votes
                  </Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Item.Content>
                  <Item.Header as='a'>Cute Dog</Item.Header>
                  <Item.Description>
                    在真实项目开发中，你可能会需要 Redux 或者 MobX 这样的数据流方案，Ant Design React 作为一个 UI 库，可以和任何 React 生态圈内的数据流方案以及应用框架搭配使用。我们基于 Redux 推出了自己的最佳实践 dva，以及可插拔的企业级应用框架 umi，推荐你在项目中使用。
                    在真实项目开发中，你可能会需要 Redux 或者 MobX 这样的数据流方案，Ant Design React 作为一个 UI 库，可以和任何 React 生态圈内的数据流方案以及应用框架搭配使用。我们基于 Redux 推出了自己的最佳实践 dva，以及可插拔的企业级应用框架 umi，推荐你在项目中使用。
                  </Item.Description>
                  <Item.Extra>
                    <Icon color='green' name='check' /> 121 Votes
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
            <div className="GlobalPagesContent">
              <div className="GlobalPages">
                <Pagination
                  activePage={imagePage}
                  pointing
                  secondary
                  ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                  firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                  lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                  prevItem={{ content: <Icon name="angle left" />, icon: true }}
                  nextItem={{ content: <Icon name="angle right" />, icon: true }}
                  totalPages={totalPages}
                  onPageChange={this.handlePageChange.bind(this)}
                />
              </div>
            </div>
          </div>
        </Tab.Pane>,
      },
      {
        menuItem: (
          <Menu.Item key="myAgreeQuestion">
            收藏的图圈 <Label color="red">15k</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane>
          <div className="GlobalPagesWrapper" id="myImages">
            <div className="GlobalLineHeader">
              <Ant.Breadcrumb>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="reply all" color="blue" />
                  <span>回复</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="arrow alternate circle up" color="red" />
                  <span>赞同</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="sort amount down" color="orange" />
                  <span>倒序</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="sort amount up" color="brown" />
                  <span>正序</span>
                </Ant.Breadcrumb.Item>
              </Ant.Breadcrumb>
            </div>
            <div className="GlobalPagesContent" style={{marginBottom: '12px'}}>
              <div className="GlobalPages">
                <Pagination
                  activePage={imagePage}
                  pointing
                  secondary
                  ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                  firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                  lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                  prevItem={{ content: <Icon name="angle left" />, icon: true }}
                  nextItem={{ content: <Icon name="angle right" />, icon: true }}
                  totalPages={totalPages}
                  onPageChange={this.handlePageChange.bind(this)}
                />
              </div>
            </div>
            <Item.Group divided>
              <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                <Item.Content>
                  <Item.Header as='a'>Cute Dog</Item.Header>
                  <Item.Description>
                    在真实项目开发中，你可能会需要 Redux 或者 MobX 这样的数据流方案，Ant Design React 作为一个 UI 库，可以和任何 React 生态圈内的数据流方案以及应用框架搭配使用。我们基于 Redux 推出了自己的最佳实践 dva，以及可插拔的企业级应用框架 umi，推荐你在项目中使用。
                  </Item.Description>
                  <Item.Extra>
                    <Icon color='green' name='check' /> 121 Votes
                  </Item.Extra>
                </Item.Content>
              </Item>
              <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                <Item.Content>
                  <Item.Header as='a'>Cute Dog</Item.Header>
                  <Item.Description>
                    在真实项目开发中，你可能会需要 Redux 或者 MobX 这样的数据流方案，Ant Design React 作为一个 UI 库，可以和任何 React 生态圈内的数据流方案以及应用框架搭配使用。我们基于 Redux 推出了自己的最佳实践 dva，以及可插拔的企业级应用框架 umi，推荐你在项目中使用。
                  </Item.Description>
                  <Item.Extra>
                    <Icon color='green' name='check' /> 121 Votes
                  </Item.Extra>
                </Item.Content>
              </Item>
              <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                <Item.Content>
                  <Item.Header as='a'>Cute Dog</Item.Header>
                  <Item.Description>
                    在真实项目开发中，你可能会需要 Redux 或者 MobX 这样的数据流方案，Ant Design React 作为一个 UI 库，可以和任何 React 生态圈内的数据流方案以及应用框架搭配使用。我们基于 Redux 推出了自己的最佳实践 dva，以及可插拔的企业级应用框架 umi，推荐你在项目中使用。
                  </Item.Description>
                  <Item.Extra>
                    <Icon color='green' name='check' /> 121 Votes
                  </Item.Extra>
                </Item.Content>
              </Item>
              <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                <Item.Content>
                  <Item.Header as='a'>Cute Dog</Item.Header>
                  <Item.Description>
                    在真实项目开发中，你可能会需要 Redux 或者 MobX 这样的数据流方案，Ant Design React 作为一个 UI 库，可以和任何 React 生态圈内的数据流方案以及应用框架搭配使用。我们基于 Redux 推出了自己的最佳实践 dva，以及可插拔的企业级应用框架 umi，推荐你在项目中使用。
                  </Item.Description>
                  <Item.Extra>
                    <Icon color='green' name='check' /> 121 Votes
                  </Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                <Item.Content>
                  <Item.Header as='a'>Cute Dog</Item.Header>
                  <Item.Description>
                    在真实项目开发中，你可能会需要 Redux 或者 MobX 这样的数据流方案，Ant Design React 作为一个 UI 库，可以和任何 React 生态圈内的数据流方案以及应用框架搭配使用。我们基于 Redux 推出了自己的最佳实践 dva，以及可插拔的企业级应用框架 umi，推荐你在项目中使用。
                  </Item.Description>
                  <Item.Extra>
                    <Icon color='green' name='check' /> 121 Votes
                  </Item.Extra>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Item.Content>
                  <Item.Header as='a'>Cute Dog</Item.Header>
                  <Item.Description>
                    在真实项目开发中，你可能会需要 Redux 或者 MobX 这样的数据流方案，Ant Design React 作为一个 UI 库，可以和任何 React 生态圈内的数据流方案以及应用框架搭配使用。我们基于 Redux 推出了自己的最佳实践 dva，以及可插拔的企业级应用框架 umi，推荐你在项目中使用。
                    在真实项目开发中，你可能会需要 Redux 或者 MobX 这样的数据流方案，Ant Design React 作为一个 UI 库，可以和任何 React 生态圈内的数据流方案以及应用框架搭配使用。我们基于 Redux 推出了自己的最佳实践 dva，以及可插拔的企业级应用框架 umi，推荐你在项目中使用。
                  </Item.Description>
                  <Item.Extra>
                    <Icon color='green' name='check' /> 121 Votes
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
            <div className="GlobalPagesContent">
              <div className="GlobalPages">
                <Pagination
                  activePage={imagePage}
                  pointing
                  secondary
                  ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                  firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                  lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                  prevItem={{ content: <Icon name="angle left" />, icon: true }}
                  nextItem={{ content: <Icon name="angle right" />, icon: true }}
                  totalPages={totalPages}
                  onPageChange={this.handlePageChange.bind(this)}
                />
              </div>
            </div>
          </div>
        </Tab.Pane>,
      },
      {
        menuItem: (
          <Menu.Item key="myAnswer">
            收到的评论 <Label color="red">15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane>
          <div className="GlobalPagesWrapper" id="CommentContent">
            <div className="GlobalLineHeader">
              <Ant.Breadcrumb>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="reply all" color="blue" />
                  <span>回复</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="arrow alternate circle up" color="red" />
                  <span>赞同</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="sort amount down" color="orange" />
                  <span>倒序</span>
                </Ant.Breadcrumb.Item>
                <Ant.Breadcrumb.Item href="">
                  <Icon name="sort amount up" color="brown" />
                  <span>正序</span>
                </Ant.Breadcrumb.Item>
              </Ant.Breadcrumb>
            </div>
            <div className="GlobalPagesContent">
              <div className="GlobalPages">
                <Pagination
                  activePage={imagePage}
                  pointing
                  secondary
                  ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                  firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                  lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                  prevItem={{ content: <Icon name="angle left" />, icon: true }}
                  nextItem={{ content: <Icon name="angle right" />, icon: true }}
                  totalPages={totalPages}
                  onPageChange={this.handlePageChange.bind(this)}
                />
              </div>
            </div>
            <Item.Group divided>
              <Item>
                <Item.Image
                  size="tiny"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />
                <Item.Content>
                  <Item.Header as="a">Arrowhead Valley Camp</Item.Header>
                  <Item.Meta content="$1000 2 Weeks" />
                  <Item.Description>
                    星期日早上九点半，金蔚婧本打算去臧承吾家再一起出发的，可他说用不着这么麻烦，直接去约定地点就可以了。于是金蔚婧没好气地把地址发个他，骂他是个大笨蛋。
                  </Item.Description>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image
                  size="tiny"
                  src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
                />
                <Item.Content>
                  <Item.Header as="a">Buck's Homebrew Stayaway</Item.Header>
                  <Item.Meta content="$1000 2 Weeks" />
                  <Item.Description>
                    星期日早上九点半，金蔚婧本打算去臧承吾家再一起出发的，可他说用不着这么麻烦，直接去约定地点就可以了。于是金蔚婧没好气地把地址发个他，骂他是个大笨蛋。
                  </Item.Description>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image
                  size="tiny"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />
                <Item.Content>
                  <Item.Header as="a">Buck's Homebrew Stayaway</Item.Header>
                  <Item.Meta content="$1000 2 Weeks" />
                  <Item.Description>
                    星期日早上九点半，金蔚婧本打算去臧承吾家再一起出发的，可他说用不着这么麻烦，直接去约定地点就可以了。于是金蔚婧没好气地把地址发个他，骂他是个大笨蛋。
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
            <div className="GlobalPagesContent">
              <div className="GlobalPages">
                <Pagination
                  activePage={imagePage}
                  pointing
                  secondary
                  ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                  firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                  lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                  prevItem={{ content: <Icon name="angle left" />, icon: true }}
                  nextItem={{ content: <Icon name="angle right" />, icon: true }}
                  totalPages={totalPages}
                  onPageChange={this.handlePageChange.bind(this)}
                />
              </div>
            </div>
          </div>
        </Tab.Pane>,
      },
    ];
    return (
      <Tab menu={{ fluid: true, vertical: true }} panes={panes} />
    )
  }
}
