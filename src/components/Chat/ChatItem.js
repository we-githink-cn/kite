import React, { PureComponent } from 'react';
import { Embed } from 'semantic-ui-react'
import styles from "../../pages/Chat/Chat.less";
import {checkStr} from '../../utils/utils';

const RightChatItem =(chat)=> (
  <div>
    <div className={`${styles.messageData} ${styles.alignRight}`}>
      <span className={styles.messageDataTime}>{chat.time}</span> &nbsp; &nbsp;
      <span className="message-data-name">{chat.name}</span> <i className={`icon circle ${styles.me}`}/>
    </div>
    <div className={`${styles.message} ${styles.otherMessage} ${styles.floatRight}`}>
      {
        checkStr(chat.message,'data:image') ? (<img src={chat.message} alt="" style={{width:'100%'}}/>): checkStr(chat.message,'.mp4') ? (<Embed
          placeholder='http://pic34.nipic.com/20131026/9422601_213844930000_2.jpg'
          url={chat.message}
        />):checkStr(chat.message,'data:video')? (
          <video width="640" height="480"  controls="controls" autobuffer="autobuffer">
            <source src={chat.message} type="video/mp4" />
          </video>
        ):chat.message
      }
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
      {
        checkStr(chat.message,'data:image') ? (<img src={chat.message} alt="" style={{width:'100%'}}/>): checkStr(chat.message,'.mp4') ? (<Embed
          placeholder='http://pic34.nipic.com/20131026/9422601_213844930000_2.jpg'
          url={chat.message}
        />):checkStr(chat.message,'data:video')? (
          <video width="640" height="480"  controls="controls" autobuffer="autobuffer">
            <source src={chat.message} type="video/mp4" />
          </video>
        ):chat.message
      }
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
