import React, {PureComponent} from 'react';
import { Card, Icon, Image, Label, Popup, List, Modal } from 'semantic-ui-react';
import * as Ant from 'antd';
import OpusDetail from "./OpusDetail";
import {connect} from "dva";

import styles from './OpusItem.less'

@connect(({ mark }) => ({
  mark: mark,
}))
export default class OpusItem extends PureComponent {
  state = {
    open: false,
    html: null,
    images: [],
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'mark/fetchHtml',
      callback: res => {
        this.setState({
          html: res,
        });
      },
    });
  }

  componentWillUnmount() {}

  render() {
    const {open,html} = this.state;
    const {width} = this.props;
    return (
      <Card style={{ width: width }}>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          onClick={item => {
            this.setState({
              open: true,
            });
          }}
        />
        <Card.Content>
          <Image
            floated="left"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description
            onClick={item => {
              this.setState({
                open: true,
              });
            }}
          >
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content
          extra
          onClick={item => {
            this.setState({
              open: true,
            });
          }}
        >
          <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
            <Icon name="heart" /> 112.3k
          </a>
          <Popup
            on="hover"
            trigger={
              <a style={{ marginRight: '8px', lineHeight: '26px', fontSize: '12px' }}>
                <Icon name="ellipsis vertical" />
              </a>
            }
            position="top center"
          >
            <Popup.Content>
              <List divided>
                <List.Item>
                  <a
                    style={{
                      marginRight: '8px',
                      lineHeight: '26px',
                      fontSize: '12px',
                      color: '#989898',
                    }}
                  >
                    <Icon name="comment" /> 12.3k
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    style={{
                      marginRight: '8px',
                      lineHeight: '26px',
                      fontSize: '12px',
                      color: '#989898',
                    }}
                  >
                    <Icon name="eye" /> 2.3k
                  </a>
                </List.Item>
              </List>
            </Popup.Content>
          </Popup>
          <Label as="a" style={{ float: 'right', fontSize: '10px' }} color="orange">
            生活 · 美食
          </Label>
        </Card.Content>
        <Modal
          open={open}
          closeIcon
          style={{ width: '800px', marginTop: '3rem', marginBottom: '3rem' }}
          onClose={() => {
            this.setState({ open: false });
          }}
        >
          <OpusDetail html={html} />
        </Modal>
      </Card>
    )
  }
}
