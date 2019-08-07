import React from 'react';
import { Layout } from 'antd';

import './App.scss';

import Home from './views/Home';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Content className="main-content">
        <Home />
      </Content>
    </Layout>
  );
}

export default App;
