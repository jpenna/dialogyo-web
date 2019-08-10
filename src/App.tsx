import React from 'react';
import { Layout } from 'antd';

import './App.scss';

import Home from './views/Home';

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Sider className="main-sider" />

      <Layout style={{ marginLeft: 200 }}>
        <Header className="main-header" />

        <Content>
          <Home />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
