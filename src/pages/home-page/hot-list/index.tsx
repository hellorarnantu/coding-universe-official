import React from 'react';
import { List, Typography, Divider } from 'antd';

import style from './style.less';

const data = [
  '最近被裁了，找工作好难，找个倾诉的人。',
  '单身，求靠谱男闺蜜。',
  '有没有在北京的小伙伴，一起组局吃饭。',
  '二手笔记本，macbook pro有需要的吗，可小刀。',
  '盘点程序员最不想遇到的需求。',
];

const HotList: React.FC = () => (
  <List
    className={style.hotList}
    size="large"
    bordered
    dataSource={data}
    renderItem={(item) => <List.Item>{item}</List.Item>}
  />
);

export default HotList;
