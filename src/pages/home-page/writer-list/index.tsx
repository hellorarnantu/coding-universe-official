import React from 'react';
import { List, Avatar } from 'antd';

import style from './style.less';

const data = [
  {
    title: '张三',
  },
  {
    title: '李四',
  },
  {
    title: '王五',
  },
  {
    title: '熊二',
  },
];

const WriterList: React.FC = () => (
  <List
    className={style.writerList}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="/" />}
          title={<a href="/">{item.title}</a>}
          description="就职于某节，擅长微服务架构，有个人公众号。"
        />
      </List.Item>
    )}
  />
);

export default WriterList;
