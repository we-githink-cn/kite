import React from 'react';
import { Row, Col } from 'antd';
import { Image } from 'semantic-ui-react';
import classNames from 'classnames';
import styles from './index.less';

const GlobalFooter = ({ className, links, copyright }) => {
  const clsString = classNames(styles.globalFooter, className);
  return (
    <footer className={clsString}>
      <Row>
        <Col span={12} offset={6} style={{ marginTop: '16px' }}>
          {links && (
            <div className={styles.links}>
              {links.map(link => (
                <a
                  key={link.key}
                  title={link.key}
                  target={link.blankTarget ? '_blank' : '_self'}
                  href={link.href}
                >
                  {link.title} {link.name && <div>{link.name}</div>}
                </a>
              ))}
            </div>
          )}
          <div className={styles.links}>
            {copyright && <a className={styles.copyright}>{copyright}</a>}
          </div>
        </Col>
        <Col span={6}>
          <div className="mini_image">
            <Image.Group size="tiny">
              <Image src="https://raw.githubusercontent.com/we-githink-cn/teal/master/teal.jpg" />
              <Image src="https://raw.githubusercontent.com/githinkcn/Giteer/sub/screenshot/giteer.jpg" />
            </Image.Group>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default GlobalFooter;
