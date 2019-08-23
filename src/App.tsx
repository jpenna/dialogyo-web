import React, { useState } from 'react';
import { Router } from "@reach/router";

import './App.scss';

import Route from '@/utils/Route';

import Home from './views/Home';
import NewTopic from './views/NewTopic';
import NewDyo from './views/NewDyo';
import { Header, SideBar } from './components/Layout';

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="main-container">
      <SideBar collapsed={collapsed} />

      <section className="main-area">
        <Header />

        <div>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/new-topic" component={NewTopic} />
            <Route path="/new-dyo" component={NewDyo} />
            {/* TODO Add not found */}
          </Router>
        </div>
      </section>
    </div>
  );
}

export default App;
