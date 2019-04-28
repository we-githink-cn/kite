import React, { PureComponent } from 'react';
import {Label, Menu, Tab, Icon, Pagination, Item, Popup} from 'semantic-ui-react';
import * as Ant from 'antd';
import {scrollToAnchor} from "../../../utils/utils";
import UserCard from "../../User/UserCard";


import styles from './FollowContent.less';
export default class FollowContent extends PureComponent {

  state = {
    totalPages: 0,
    totalMePages: 0,
    followPage: 1,
    followMePage: 1,
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
      totalMePages: Math.ceil(9999 / pageSize),
    });
  };

  handlePageChange = (event, { activePage }) => {
    this.setState({
      followPage: activePage,
    });
    scrollToAnchor('myFollow');
  };

  handlePageFollowMeChange = (event, { activePage }) => {
    this.setState({
      followMePage: activePage,
    });
    scrollToAnchor('myFollow');
  };

  render() {
    const {followPage,totalPages,followMePage,totalMePages} =this.state;
    const panes = [
      {
        menuItem: (
          <Menu.Item key="myFollow">
            我的关注 <Label color="red">15</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane>
          <div className="GlobalPagesWrapper" id="myFollow">
            <div className="GlobalPagesContent" style={{marginBottom: '12px'}}>
              <div className="GlobalPages">
                <Pagination
                  activePage={followMePage}
                  pointing
                  secondary
                  ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                  firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                  lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                  prevItem={{ content: <Icon name="angle left" />, icon: true }}
                  nextItem={{ content: <Icon name="angle right" />, icon: true }}
                  totalPages={totalMePages}
                  onPageChange={this.handlePageFollowMeChange.bind(this)}
                />
              </div>
            </div>
            <Item.Group divided>
              <Item>
                <Popup on="hover" flowing hoverable trigger={<Item.Image size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />}>
                  <UserCard item={null} />
                </Popup>
                <Item.Content verticalAlign='middle'>
                  <Item.Header style={{width:'100%'}}>
                    Vincent Porter  <Ant.Tooltip placement="top" title='取消关注'><Icon name='favorite' style={{float: 'right'}} color='yellow'/></Ant.Tooltip>
                  </Item.Header>
                </Item.Content>
              </Item>
              <Item>
                <Popup on="hover" flowing hoverable trigger={<Item.Image size='mini' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />}>
                  <UserCard item={null} />
                </Popup>
                <Item.Content verticalAlign='middle'>
                  <Item.Header style={{width:'100%'}}>
                    Aiden Chavez  <Ant.Tooltip placement="top" title='取消关注'><Icon name='favorite' style={{float: 'right'}} color='yellow'/></Ant.Tooltip>
                  </Item.Header>
                </Item.Content>
              </Item>
              <Item>
                <Popup on="hover" flowing hoverable trigger={<Item.Image size='mini' src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />}>
                  <UserCard item={null} />
                </Popup>
                <Item.Content verticalAlign='middle'>
                  <Item.Header style={{width:'100%'}}>
                    Mike Thomas  <Ant.Tooltip placement="top" title='取消关注'><Icon name='favorite' style={{float: 'right'}} color='yellow'/></Ant.Tooltip>
                  </Item.Header>
                </Item.Content>
              </Item>
              <Item>
                <Popup on="hover" flowing hoverable trigger={<Item.Image size='mini' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />}>
                  <UserCard item={null} />
                </Popup>
                <Item.Content verticalAlign='middle'>
                  <Item.Header style={{width:'100%'}}>
                    Erica Hughes  <Ant.Tooltip placement="top" title='取消关注'><Icon name='favorite' style={{float: 'right'}} color='yellow'/></Ant.Tooltip>
                  </Item.Header>
                </Item.Content>
              </Item>
              <Item>
                <Popup on="hover" flowing hoverable trigger={<Item.Image size='mini' src='https://react.semantic-ui.com/images/avatar/small/justen.jpg' />}>
                  <UserCard item={null} />
                </Popup>
                <Item.Content verticalAlign='middle'>
                  <Item.Header style={{width:'100%'}}>
                    Ginger Johnston  <Ant.Tooltip placement="top" title='取消关注'><Icon name='favorite' style={{float: 'right'}} color='yellow'/></Ant.Tooltip>
                  </Item.Header>
                </Item.Content>
              </Item>
              <Item>
                <Popup on="hover" flowing hoverable trigger={<Item.Image size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />}>
                  <UserCard item={null} />
                </Popup>
                <Item.Content verticalAlign='middle'>
                  <Item.Header style={{width:'100%'}}>
                    Tracy Carpenter  <Ant.Tooltip placement="top" title='取消关注'><Icon name='favorite' style={{float: 'right'}} color='yellow'/></Ant.Tooltip>
                  </Item.Header>
                </Item.Content>
              </Item>
            </Item.Group>
            <div className="GlobalPagesContent">
              <div className="GlobalPages">
                <Pagination
                  activePage={followMePage}
                  pointing
                  secondary
                  ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                  firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                  lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                  prevItem={{ content: <Icon name="angle left" />, icon: true }}
                  nextItem={{ content: <Icon name="angle right" />, icon: true }}
                  totalPages={totalMePages}
                  onPageChange={this.handlePageFollowMeChange.bind(this)}
                />
              </div>
            </div>
          </div>
        </Tab.Pane>,
      },
      {
        menuItem: (
          <Menu.Item key="followMe">
            关注我的 <Label color="red">15k</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane>
          <div className="GlobalPagesWrapper" id="myFollow">
            <div className="GlobalPagesContent" style={{marginBottom: '12px'}}>
              <div className="GlobalPages">
                <Pagination
                  activePage={followMePage}
                  pointing
                  secondary
                  ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                  firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                  lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                  prevItem={{ content: <Icon name="angle left" />, icon: true }}
                  nextItem={{ content: <Icon name="angle right" />, icon: true }}
                  totalPages={totalMePages}
                  onPageChange={this.handlePageFollowMeChange.bind(this)}
                />
              </div>
            </div>
            <Item.Group divided>
              <Item>
                <Popup on="hover" flowing hoverable trigger={<Item.Image size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />}>
                  <UserCard item={null} />
                </Popup>
                <Item.Content verticalAlign='middle'>
                  <Item.Header style={{width:'100%'}}>
                    Vincent Porter  <Ant.Tooltip placement="top" title='取消关注'><Icon name='favorite' style={{float: 'right'}} color='grey'/></Ant.Tooltip>
                  </Item.Header>
                </Item.Content>
              </Item>
              <Item>
                <Popup on="hover" flowing hoverable trigger={<Item.Image size='mini' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />}>
                  <UserCard item={null} />
                </Popup>
                <Item.Content verticalAlign='middle'>
                  <Item.Header style={{width:'100%'}}>
                    Aiden Chavez  <Ant.Tooltip placement="top" title='取消关注'><Icon name='favorite' style={{float: 'right'}} color='grey'/></Ant.Tooltip>
                  </Item.Header>
                </Item.Content>
              </Item>
              <Item>
                <Popup on="hover" flowing hoverable trigger={<Item.Image size='mini' src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />}>
                  <UserCard item={null} />
                </Popup>
                <Item.Content verticalAlign='middle'>
                  <Item.Header style={{width:'100%'}}>
                    Mike Thomas  <Ant.Tooltip placement="top" title='取消关注'><Icon name='favorite' style={{float: 'right'}} color='grey'/></Ant.Tooltip>
                  </Item.Header>
                </Item.Content>
              </Item>
              <Item>
                <Popup on="hover" flowing hoverable trigger={<Item.Image size='mini' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />}>
                  <UserCard item={null} />
                </Popup>
                <Item.Content verticalAlign='middle'>
                  <Item.Header style={{width:'100%'}}>
                    Erica Hughes  <Ant.Tooltip placement="top" title='取消关注'><Icon name='favorite' style={{float: 'right'}} color='grey'/></Ant.Tooltip>
                  </Item.Header>
                </Item.Content>
              </Item>
              <Item>
                <Popup on="hover" flowing hoverable trigger={<Item.Image size='mini' src='https://react.semantic-ui.com/images/avatar/small/justen.jpg' />}>
                  <UserCard item={null} />
                </Popup>
                <Item.Content verticalAlign='middle'>
                  <Item.Header style={{width:'100%'}}>
                    Ginger Johnston  <Ant.Tooltip placement="top" title='取消关注'><Icon name='favorite' style={{float: 'right'}} color='grey'/></Ant.Tooltip>
                  </Item.Header>
                </Item.Content>
              </Item>
              <Item>
                <Popup on="hover" flowing hoverable trigger={<Item.Image size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />}>
                  <UserCard item={null} />
                </Popup>
                <Item.Content verticalAlign='middle'>
                  <Item.Header style={{width:'100%'}}>
                    Tracy Carpenter  <Ant.Tooltip placement="top" title='取消关注'><Icon name='favorite' style={{float: 'right'}} color='grey'/></Ant.Tooltip>
                  </Item.Header>
                </Item.Content>
              </Item>
            </Item.Group>
            <div className="GlobalPagesContent">
              <div className="GlobalPages">
                <Pagination
                  activePage={followMePage}
                  pointing
                  secondary
                  ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
                  firstItem={{ content: <Icon name="angle double left" />, icon: true }}
                  lastItem={{ content: <Icon name="angle double right" />, icon: true }}
                  prevItem={{ content: <Icon name="angle left" />, icon: true }}
                  nextItem={{ content: <Icon name="angle right" />, icon: true }}
                  totalPages={totalMePages}
                  onPageChange={this.handlePageFollowMeChange.bind(this)}
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
