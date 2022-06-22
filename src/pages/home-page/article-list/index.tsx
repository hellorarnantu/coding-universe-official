import React, { useState } from 'react';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import style from './style.less';

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: '/',
  title: `免费课程 ${i}`,
  avatar: '/',
  description: '后端 | 算法',
  content: '手把手搭建企业级开发框架，企业级实战。',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function ArticleList() {
  const [] = useState();

  return (
    <div className={style.articleListWrapper}>
      <div className={style.skill}>
        {/* <span className={style.title}>关注方向：</span> */}
        <div className={style.items}>
          <div className={style.active}>全部</div>
          <div>后端</div>
          <div>前端</div>
          <div>Android</div>
          <div>人工智能</div>
          <div>通用能力</div>
        </div>
      </div>
      <div className={style.categoryWrapper}>
        {/* <span className={style.title}>分类：</span> */}
        <div className={style.items}>
          <div className={style.active}>全部</div>
          <div>最新</div>
          <div>热门</div>
          <div>价格</div>
        </div>
      </div>
      {/* <div className={style.searchInput}>
        <input className={style.realInput} type="text" />
      </div> */}
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 4,
        }}
        dataSource={data}
        footer={<div>{/* <b>ant design</b> footer part */}</div>}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
}

export default ArticleList;
