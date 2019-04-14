import React, {Component} from 'react'
import { Card, Icon, Image, Label, Grid, Input, Menu } from 'semantic-ui-react'
import * as Ant from 'antd';
import styles from './IndexOpus.less'

export default class IndexQuestion extends Component {
  state = {}

  componentDidMount() {

  }

  componentWillUnmount() {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div className={styles.OpusWrapper}>
        <div className={styles.OpusMenuWrapper}>
          <Ant.Affix offsetTop={90}>
            <Menu vertical secondary>
              <Menu.Item>
                <Input icon={<Icon name='search' inverted circular link />} placeholder='Search...' />
              </Menu.Item>

              <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                <Icon name='grid layout' color='red'/>
                Browse
              </Menu.Item>
              <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
              >
                <Icon name='trademark' color='teal'/>
                Messages
              </Menu.Item>
            </Menu>
          </Ant.Affix>
        </div>
        <div className={styles.OpusBody}>
          <Grid columns={4} doubling stackable>
            <Grid.Column className={styles.OpusCardItem}>
              <Card style={{minWidth: '264px'}}>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                  <Image floated='left' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a style={{marginRight: '8px',lineHeight:'26px',fontSize: '12px'}}>
                    <Icon name='heart' /> 112.3k
                  </a>
                  <a style={{marginRight: '8px',lineHeight:'26px',fontSize: '12px'}}>
                    <Icon name='comment' /> 333.3k
                  </a>
                  <a style={{marginRight: '8px',lineHeight:'26px',fontSize: '12px'}}>
                    <Icon name='ellipsis vertical' />
                  </a>
                  <Label as='a' style={{float:'right',fontSize:'10px'}} color='orange'>生活 · 美食</Label>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column className={styles.OpusCardItem}>
              <Card style={{minWidth: '264px'}}>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                  <Image floated='left' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a style={{marginRight: '8px',lineHeight:'26px',fontSize: '12px'}}>
                    <Icon name='heart' /> 112.3k
                  </a>
                  <a style={{marginRight: '8px',lineHeight:'26px',fontSize: '12px'}}>
                    <Icon name='comment' /> 333.3k
                  </a>
                  <a style={{marginRight: '8px',lineHeight:'26px',fontSize: '12px'}}>
                    <Icon name='ellipsis vertical' />
                  </a>
                  <Label as='a' style={{float:'right',fontSize:'10px'}} color='orange'>生活 · 美食</Label>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column className={styles.OpusCardItem}>
              <Card style={{minWidth: '264px'}}>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                  <Image floated='left' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a style={{marginRight: '8px',lineHeight:'26px',fontSize: '12px'}}>
                    <Icon name='heart' /> 112.3k
                  </a>
                  <a style={{marginRight: '8px',lineHeight:'26px',fontSize: '12px'}}>
                    <Icon name='comment' /> 333.3k
                  </a>
                  <a style={{marginRight: '8px',lineHeight:'26px',fontSize: '12px'}}>
                    <Icon name='ellipsis vertical' />
                  </a>
                  <Label as='a' style={{float:'right',fontSize:'10px'}} color='orange'>生活 · 美食</Label>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column className={styles.OpusCardItem}>
              <Card style={{minWidth: '264px'}}>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                  <Image floated='left' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a style={{marginRight: '8px',lineHeight:'26px',fontSize: '12px'}}>
                    <Icon name='heart' /> 112.3k
                  </a>
                  <a style={{marginRight: '8px',lineHeight:'26px',fontSize: '12px'}}>
                    <Icon name='comment' /> 333.3k
                  </a>
                  <a style={{marginRight: '8px',lineHeight:'26px',fontSize: '12px'}}>
                    <Icon name='ellipsis vertical' />
                  </a>
                  <Label as='a' style={{float:'right',fontSize:'10px'}} color='orange'>生活 · 美食</Label>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </div>
      </div>

    )
  }
}

