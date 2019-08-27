import React, { useState } from 'react';
import { Router, Match } from "@reach/router";

import './App.scss';

import Route from '@/utils/Route';

import BackButton from '@/components/BackButton';
import Home from './views/Home';
import NewTopic from './views/NewTopic';
import NewDyo from './views/NewDyo';
import { Header, SideBar } from './components/Layout';

// @ts-ignore
import styleProps from '@/components/Layout/index.scss';

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < styleProps.md.slice(0, -2));

  return (
    <div className="main-container">
      <SideBar setCollapsed={setCollapsed} collapsed={collapsed} />

      <section className="main-area">
        <Header setCollapsed={setCollapsed} collapsed={collapsed} />

        <div>
          <Match path="*">
            {BackButton}
          </Match>

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
