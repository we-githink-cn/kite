import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import * as Ant from 'antd';
import router from 'umi/router';
import styles from './UserList.less';

export default class UserList extends Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={styles.content}>
        <div className={styles.UserListHeader}>
          <div className={styles.UserListHeaderText}>推荐作者</div>
        </div>
        <div className={styles.UserListContent}>
          <Card.Group style={{ margin: '0 auto' }}>
            <Card>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    私 信
                  </Button>
                  <Button basic color="orange">
                    关 注
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src="https://react.semantic-ui.com/images/avatar/large/molly.png"
                />
                <Card.Header>Molly Thomas</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>
                  Molly wants to add you to the group <strong>musicians</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    私 信
                  </Button>
                  <Button basic color="orange">
                    关 注
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                />
                <Card.Header>Jenny Lawrence</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>
                  Jenny requested permission to view your contact details
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    私 信
                  </Button>
                  <Button basic color="orange">
                    关 注
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    私 信
                  </Button>
                  <Button basic color="orange">
                    关 注
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src="https://react.semantic-ui.com/images/avatar/large/molly.png"
                />
                <Card.Header>Molly Thomas</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>
                  Molly wants to add you to the group <strong>musicians</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    私 信
                  </Button>
                  <Button basic color="orange">
                    关 注
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
                />
                <Card.Header>Jenny Lawrence</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>
                  Jenny requested permission to view your contact details
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    私 信
                  </Button>
                  <Button basic color="orange">
                    关 注
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      </div>
    );
  }
}
