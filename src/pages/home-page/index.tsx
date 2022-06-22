import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Provider, connect } from 'react-redux';
import style from './index.less';
import ArticleList from './article-list';
import WriterList from './writer-list';
import HotList from './hot-list';
import store from '../store';

const { Header, Content, Footer, Sider } = Layout;

// 首页入口布局
const App: React.FC = () => (
  <Provider store={store}>
    <Layout className={style.layout}>
      <Header className={style.header}>
        <div className={style.titleWrapper}>
          <div className={style.logo} />
          <span className={style.titleText}>程序员星球</span>
        </div>
        <div className={style.userInfoWrapper}>
          <div className={style.user} />
        </div>
      </Header>
      <Layout className={style.contentWrapper}>
        <Sider width={'80%'} className={style.articleList}>
          <ArticleList />
        </Sider>
        <Content className={style.otherInfo}>
          <WriterList />
          <HotList />
        </Content>
      </Layout>
      <Footer className={style.footer} style={{ textAlign: 'center' }}>
        Made width ❤️ 编程鸭
      </Footer>
    </Layout>
  </Provider>
);

export default App;
