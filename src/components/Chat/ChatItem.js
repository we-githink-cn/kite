import React, { PureComponent } from 'react';
import { Embed, Modal } from 'semantic-ui-react';
import styles from '../../pages/Chat/Chat.less';
import { checkStr } from '../../utils/utils';
import { emojify } from 'react-emojione';
import emoji64 from '../../assets/emoji/emojione-3.1.2-64x64.png';

export default class ChatItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      open: false,
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  handleImgClick = url => {
    this.setState({
      url: url,
      open: true,
    });
  };

  render() {
    const { item } = this.props;
    const { url, open } = this.state;
    const options = {
      style: {
        backgroundImage: `url(${emoji64})`,
        height: 20,
        margin: 2,
      },
    };
    const RightChatItem = chat => (
      <div>
        <div className={`${styles.messageData} ${styles.alignRight}`}>
          <span className={styles.messageDataTime}>{chat.time}</span> &nbsp; &nbsp;
          <span className="message-data-name">{chat.name}</span>{' '}
          <i className={`icon circle ${styles.me}`} />
        </div>
        <div className={`${styles.message} ${styles.otherMessage} ${styles.floatRight}`}>
          {checkStr(chat.message, 'data:image') ? (
            <img
              onClick={this.handleImgClick.bind(this, chat.message)}
              src={chat.message}
              alt=""
              style={{ width: '100%' }}
            />
          ) : checkStr(chat.message, '.mp4') ? (
            <Embed
              placeholder="http://pic34.nipic.com/20131026/9422601_213844930000_2.jpg"
              url={chat.message}
            />
          ) : checkStr(chat.message, 'data:video') ? (
            <video width="640" height="480" controls="controls" autobuffer="autobuffer">
              <source src={chat.message} type="video/mp4" />
            </video>
          ) : (
            emojify(chat.message, options)
          )}
        </div>
      </div>
    );
    const LeftChatItem = chat => (
      <div>
        <div className={styles.messageData}>
          <span className="message-data-name">
            <i className={`icon circle ${styles.online}`} /> {chat.name}
          </span>
          <span className={styles.messageDataTime}>{chat.time}</span>
        </div>
        <div className={`${styles.message} ${styles.myMessage}`}>
          {checkStr(chat.message, 'data:image') ? (
            <img
              onClick={this.handleImgClick.bind(this, chat.message)}
              src={chat.message}
              alt=""
              style={{ width: '100%' }}
            />
          ) : checkStr(chat.message, '.mp4') ? (
            <Embed
              placeholder="http://pic34.nipic.com/20131026/9422601_213844930000_2.jpg"
              url={chat.message}
            />
          ) : checkStr(chat.message, 'data:video') ? (
            <video width="640" height="480" controls="controls" autobuffer="autobuffer">
              <source src={chat.message} type="video/mp4" />
            </video>
          ) : (
            emojify(chat.message, options)
          )}
        </div>
      </div>
    );

    return (
      <li className={item.type === 'right' ? 'clearfix' : ''}>
        {item.type === 'right' ? RightChatItem(item) : LeftChatItem(item)}
        <Modal
          open={open}
          onClose={() => {
            this.setState({ open: false });
          }}
        >
          <Modal.Content>
            <img src={url} style={{ width: '100%' }} alt="" />
          </Modal.Content>
        </Modal>
      </li>
    );
  }
}
