import React from 'react';
import { Card } from 'antd';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { CurrentUser } from '@/models/user';
import { ConnectState } from '@/models/connect';

const Welcome = (props: CurrentUser): React.ReactNode => (
  <PageHeaderWrapper>
    <Card>{`嗨，大家好，我叫 ${props.name}, 这是基于 and design pro 创建的项目 APP1`}</Card>
  </PageHeaderWrapper>
);

export default connect(({ user }: ConnectState) => ({ ...user.currentUser }))(Welcome);
