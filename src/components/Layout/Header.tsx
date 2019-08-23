import React from 'react';
import { Layout } from 'antd';
import { Button } from 'antd';
import { Link, Match } from "@reach/router";

import BackButton from '@/components/BackButton';

const { Header } = Layout;

export default () => {
  return (
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
  )
};
