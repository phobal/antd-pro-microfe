import React from 'react';
import { Card, Icon } from 'antd';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { CurrentUser } from '@/models/user';
import { ConnectState } from '@/models/connect';
import styles from './welcome.less'

const Welcome = (props: CurrentUser): React.ReactNode => (
  <PageHeaderWrapper>
    <Card>
      <Icon className={styles.upgradeIcon} type="arrow-up" />
      <p>如果单独访问子项目 <a href="http://localhost:8011">http://localhost:8011</a>, 这里的箭头符号颜色是红色的</p>
      <p>但是通过主系统 <a href="http://localhost:8010">http://localhost:8010</a> 进入到子系统这里箭头的颜色就是灰色的</p>
    </Card>
  </PageHeaderWrapper>
);

export default connect(({ user }: ConnectState) => ({ ...user.currentUser }))(Welcome);
