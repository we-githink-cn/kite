import React, {Component} from 'react';
import {animateScroll} from "react-scroll";
import {emojify} from 'react-emojione';
import EmojiPicker from 'emoji-picker-react';
import 'emoji-picker-react/dist/universal/style.scss';
import {Button, Icon, Input, TextArea,Popup} from 'semantic-ui-react';
import * as Ant from 'antd';
import ChatItem from '../../components/Chat/ChatItem';
import styles from './Chat.less';
import {getCurrentTime} from "../../utils/utils";
import addImages from '../../assets/addImages.png';
import addVideo from '../../assets/addVideo.png';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message:'',
      image:'',
      open: false,
      chatList: [{
        name: 'Olia',
        type: 'right',
        time: '10:10 AM, Today',
        message: 'Hi Vincent, how are you? How is the project coming along?'
      },{
        name: 'Vincent',
        type: 'left',
        time: '10:12 AM, Today',
        message: 'Are we meeting today? Project has been already finished and I have results to show you.'
      },{
        name: 'Olia',
        type: 'right',
        time: '10:14 AM, Today',
        message: 'Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?'
      },{
        name: 'Vincent',
        type: 'left',
        time: '10:20 AM, Today',
        message: 'Actually everything was fine. I\'m very excited to show this to our team.'
      }],
    }
  }

  componentWillMount() {}

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown)
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  onKeyDown = ({keyCode}) =>{
    switch (keyCode) {
      case 13:
        this.handleAddMessage();
        break;
      default:
    }
  }

  handleChangeMessage =(event, data)=>{
    this.setState({
      message: data.value
    })
  };

  handleAddMessage =()=>{
    const {chatList,message} = this.state;
    if(''===message){
      return;
    }
    let item = {
      name: 'Olia',
      type: 'right',
      time: getCurrentTime(),
      message: message
    };
    chatList.push(item);
    this.setState({
      chatList:chatList,
      message:''
    });
    animateScroll.scrollToBottom({
      containerId: "chat-history"
    });
    setTimeout(()=>{
      let item = {
        name: 'Vincent',
        type: 'left',
        time: getCurrentTime(),
        message: '北京时间4月24日晚间，拼多多发布2018财年年报，披露该财年完整运营数据。2018年，' +
          '拼多多平台年度活跃买家数达4.185亿，GMV达4716亿元，实现营收131.2亿元，各项核心数据维持三位数以上的同比增长。'
      };
      chatList.push(item);
      this.setState({
        chatList:chatList,
      });
      animateScroll.scrollToBottom({
        containerId: "chat-history"
      });
    },2000)
  };

  changeImage =()=>{
    let that = this;
    const {chatList} = this.state;
    let files = document.getElementById("upload_file").files;
    for(let i = 0;i <files.length;i++){
      let r = new FileReader();
      r.readAsDataURL(files[i]);
      r.onload = function(){
        that.setState({
          image: r.result
        });
        let item = {
          name: 'Olia',
          type: 'right',
          time: getCurrentTime(),
          message: r.result
        };
        chatList.push(item);
        that.setState({
          chatList:chatList,
          message:''
        });
        animateScroll.scrollToBottom({
          containerId: "chat-history"
        });
      }
    }
  };

  changeVideo =()=>{
    let that = this;
    const {chatList} = this.state;
    let file = document.getElementById("upload_video").files[0];
    let r = new FileReader();
    r.readAsDataURL(file);
    r.onload = function(){
      that.setState({
        image: r.result
      })
      let item = {
        name: 'Olia',
        type: 'right',
        time: getCurrentTime(),
        message: r.result
      };
      chatList.push(item);
      that.setState({
        chatList:chatList,
        message:''
      });
      animateScroll.scrollToBottom({
        containerId: "chat-history"
      });
    }
  }

  handleEmojiClick =(code,object) =>{
    let {message} = this.state;
    message = message + ':'+object.name+':';
    this.setState({
      message:message
    });
  };

  render() {
    const {chatList,message} = this.state;

    return (
      <div className={`${styles.mainWrap} ${styles.navslide}`}>
        <div className="ui equal width left aligned padded grid stackable">
          <div className="stretched row">
            <div className='sixteen wide tablet three wide computer column'>
              <div className='ui segments'>
                <div className="ui segment">
                  <h5 className="ui header">
                    People List
                  </h5>
                </div>
                <div className="ui segment no-padding">
                  <div className={styles.peopleList} id="people-list">
                    <div className={styles.search}>
                      <Input placeholder='Search...' icon='search' fluid/>
                    </div>
                    <ul className="list">
                      <li className="clearfix">
                        <img className="ui circular image" src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" alt="avatar"/>
                        <div className={styles.about}>
                          <div className={styles.name}>Vincent Porter</div>
                          <div className={styles.status}>
                            <i className={`icon circle ${styles.online}`}/> online
                          </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img className="ui circular image" src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" alt="avatar"/>
                        <div className={styles.about}>
                          <div className={styles.name}>Aiden Chavez</div>
                          <div className={styles.status}>
                            <i className={`icon circle ${styles.offline}`}/> left 7 mins ago
                          </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img className="ui circular image" src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" alt="avatar"/>
                          <div className={styles.about}>
                            <div className={styles.name}>Mike Thomas</div>
                            <div className={styles.status}>
                              <i className={`icon circle ${styles.online}`}/> online
                            </div>
                          </div>
                      </li>
                      <li className="clearfix">
                        <img className="ui circular image" src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" alt="avatar"/>
                        <div className={styles.about}>
                          <div className={styles.name}>Erica Hughes</div>
                          <div className={styles.status}>
                            <i className={`icon circle ${styles.online}`}/> online
                          </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img className="ui circular image" src="https://react.semantic-ui.com/images/avatar/small/justen.jpg" alt="avatar"/>
                        <div className={styles.about}>
                          <div className={styles.name}>Ginger Johnston</div>
                          <div className={styles.status}>
                            <i className={`icon circle ${styles.online}`}/> online
                          </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img className="ui circular image" src="https://react.semantic-ui.com/images/avatar/small/laura.jpg" alt="avatar"/>
                        <div className={styles.about}>
                          <div className={styles.name}>Tracy Carpenter</div>
                          <div className={styles.status}>
                            <i className={`icon circle ${styles.offline}`}/> left 30 mins ago
                          </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img className="ui circular image" src="https://react.semantic-ui.com/images/avatar/large/molly.png" alt="avatar"/>
                        <div className={styles.about}>
                          <div className={styles.name}>Christian Kelly</div>
                          <div className={styles.status}>
                            <i className={`icon circle ${styles.offline}`}/> left 10 hours ago
                          </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img className="ui circular image" src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" alt="avatar"/>
                        <div className={styles.about}>
                          <div className={styles.name}>Monica Ward</div>
                          <div className={styles.status}>
                            <i className={`icon circle ${styles.online}`}/> online
                          </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img className="ui circular image" src="https://react.semantic-ui.com/images/avatar/small/christian.jpg" alt="avatar"/>
                        <div className={styles.about}>
                          <div className={styles.name}>Dean Henry</div>
                          <div className={styles.status}>
                            <i className={`icon circle ${styles.offline}`}/> offline since Oct 28
                          </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img className="ui circular image" src="https://react.semantic-ui.com/images/avatar/small/nan.jpg" alt="avatar"/>
                        <div className={styles.about}>
                          <div className={styles.name}>Peyton Mckinney</div>
                          <div className={styles.status}>
                            <i className={`icon circle ${styles.online}`}/> online
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                </div>

              </div>
            </div>
            <div className="sixteen wide tablet thirteen wide computer column">
              <div className="ui segments">
                <div className="ui segment">
                  <h5 className="ui header">
                    Chat
                  </h5>
                </div>
                <div className="ui segment">
                  <div className={styles.chat}>
                    <div className={`${styles.chatHeader} clearfix`}>
                      <img className="ui circular image" src="https://react.semantic-ui.com/images/avatar/small/ade.jpg" alt="avatar"/>
                      <div className={styles.chatAbout}>
                        <div className={styles.chatWith}>Chat with Vincent Porter</div>
                        <div className={styles.chatNumMessages}>already 1 902 messages</div>
                      </div>
                      <Icon className={styles.Star} name='star'/>
                    </div>
                    <div className={styles.chatHistory} id='chat-history'>
                      <ul>
                        {
                          chatList.map((item, index)=>(
                            <ChatItem item={item} key={index}/>
                          ))
                        }
                      </ul>
                    </div>
                    <div className={`${styles.chatMessage} clearfix`}>
                      <TextArea onInput={this.handleChangeMessage} placeholder="Type your message" value={message} rows={3} ref={ref => {this.addMessage=ref}}/>
                      <div className={styles.FileBtn}><img src={addImages} className={styles.fileImage}  style={{width:'29px',marginRight:'10px'}} alt=""/>
                        <input accept="image/*" name="upimage" title="" id="upload_file" multiple="multiple" onChange={this.changeImage} type="file"/>
                      </div>
                      <div className={styles.FileBtn}><img src={addVideo} className={styles.fileImage} style={{width:'24px',marginRight:'4px'}} alt=""/>
                        <input accept="video/mp4" name="upvideo" title="" id="upload_video" onChange={this.changeVideo} type="file"/>
                      </div>
                      <Popup trigger={<div className={styles.FileBtn}>{emojify(':smile:',{style:{height: 26,top:0}})}</div>} on='hover' hoverable>
                        <EmojiPicker onEmojiClick={this.handleEmojiClick} />
                      </Popup>
                      <Button icon='send' onClick={this.handleAddMessage} content='发送' color='green'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

