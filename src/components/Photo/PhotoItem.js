import React, {Component, PureComponent} from 'react';
import { Icon, Image, Header } from 'semantic-ui-react';
import * as Ant from 'antd';

import styles from './PhotoItem.less';

export default class PhotoItem extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUpdate (nextProps, nextState) {}

  componentDidUpdate (prevProps, prevState) {}

  render() {
    const {src} = this.props;
    return (
      <div className={styles.PhotoItemContent}>
        <div className={styles.PhotoItemHeader}>
          <div className={styles.PhotoItemHeaderAvatar}>
            <Header as='h4'>
              <Image circular src={src} /> Patrick
            </Header>
          </div>
          <div className={styles.PhotoItemHeaderIcon}>
            <Icon name='ellipsis horizontal'/>
          </div>
        </div>
        <div className={styles.PhotoItemImageContent}>
          <img src={src}  alt=""/>
          <span><Icon name='clone outline' className={styles.PhotoItemImageIcon}/></span>
        </div>
      <div className={styles.PhotoItemActionContent}>
        <div className={styles.PhotoItemActionItem}>
          <Icon name='heart outline'/>
        </div>
        <div className={styles.PhotoItemActionItem}>
          <Icon name='comment outline'/>
        </div>
        <div className={styles.PhotoItemActionItem}>
          <Icon name='bookmark outline'/>
        </div>
      </div>
      <div className={styles.PhotoItemIconText}>
        4,117 次赞
      </div>
      <div className={`${styles.PhotoItemText} vditor-reset`} dangerouslySetInnerHTML={{ __html: '<p>Kotlin 是一个用于现代多平台应用的静态编程语言，由 JetBrains 开发。Kotlin可以编译成Java字节码，也可以编译成JavaScript，方便在没有JVM的设备上运行。Kotlin已正式成为Android官方支持开发语言。此外，Kotlin还是一门融合了面向对象与函数式编程的语言，支持泛型、安全的空判断，并且Kotlin与Java可以做到完全的交互。</p>' }}/>
      <div className={styles.PhotoItemDesc}>
        <div className={styles.PhotoItemCommentText}>
          全部 77 条评论
        </div>
        <div className={styles.PhotoItemTimeText}>
          4 小时前
        </div>
      </div>
    </div>
    )
  }
}
