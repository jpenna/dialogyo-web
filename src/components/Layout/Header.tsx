import React from 'react';
import { Layout } from 'antd';
import { Button } from 'antd';
import { Link, Match } from "@reach/router";

import BackButton from '@/components/BackButton';

const { Header } = Layout;

interface IProps {
  collapsed: boolean;
  setCollapsed(value: boolean): void;
}

export default (props: IProps) => {
  const { collapsed, setCollapsed } = props;

  return (
    <Header className="main-header flex-split">
      <div>
        <Button
          icon={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={() => setCollapsed(!collapsed)}
        />

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
