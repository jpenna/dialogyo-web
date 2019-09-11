import React from 'react';
import { Button } from 'antd';
import { Link } from "@reach/router";

interface IProps {
  collapsed: boolean;
  setCollapsed(value: boolean): void;
}

export default (props: IProps) => {
  const { collapsed, setCollapsed } = props;

  return (
    <div className="main-header flex-split">
      <div>
        <Button
          icon={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <div>
        <Link to="/new-topic">
          <Button icon="message">New Topic</Button>
        </Link>
      </div>
    </div>
  )
};
