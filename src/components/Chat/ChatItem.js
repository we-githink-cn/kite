import React, { PureComponent } from 'react';
import styles from "../../pages/Chat/Chat.less";

const RightChatItem =(chat)=> (
  <div>
    <div className={`${styles.messageData} ${styles.alignRight}`}>
      <span className={styles.messageDataTime}>{chat.time}</span> &nbsp; &nbsp;
      <span className="message-data-name">{chat.name}</span> <i className={`icon circle ${styles.me}`}/>
    </div>
    <div className={`${styles.message} ${styles.otherMessage} ${styles.floatRight}`}>
      {chat.message}
    </div>
  </div>
);
const LeftChatItem =(chat)=> (
  <div>
    <div className={styles.messageData}>
      <span className="message-data-name"><i className={`icon circle ${styles.online}`}/> {chat.name}</span>
      <span className={styles.messageDataTime}>{chat.time}</span>
    </div>
    <div className={`${styles.message} ${styles.myMessage}`}>
      {chat.message}
    </div>
  </div>
);

export default class ChatItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const {item} = this.props;
    return(
      <li className={item.type==='right' ? "clearfix": ''}>
        {
          item.type === 'right' ? (
            RightChatItem(item)
          ):(
            LeftChatItem(item)
          )
        }
      </li>
    )
  }
}
