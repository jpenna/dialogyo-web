import React from 'react';
import { Layout, Button } from 'antd';
import { Router, Link, Match } from "@reach/router";

import './App.scss';

import Route from '@/utils/Route';

import Home from './views/Home';
import NewTopic from './views/NewTopic';
import NewDyo from './views/NewDyo';
import BackButton from './components/BackButton';

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {


  return (
    <Layout>
      <Sider className="main-sider" />

      <Layout style={{ marginLeft: 200 }}>
        <Header className="main-header flex-split">
          <div>
            <Match path="*">
              {BackButton}
            </Match>
          </div>
          <div>
            <Link to="/new-topic">
              <Button icon="message">New Topic</Button>
            </Link>
          </div>
        </Header>

        <Content>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/new-topic" component={NewTopic} />
            <Route path="/new-dyo" component={NewDyo} />
            {/* TODO Add not found */}
          </Router>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
