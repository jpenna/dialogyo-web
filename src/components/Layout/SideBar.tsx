import React, { useMemo } from 'react';
import { Button } from 'antd';

interface IProps {
  collapsed: boolean;
  setCollapsed(value: boolean): void;
}

export default (props: IProps) => {
  const { collapsed, setCollapsed } = props;

  const styleClass = useMemo(
    () => (`main-side-bar ${collapsed ? 'force-collapse' : 'force-show'}`),
    [collapsed],
  );

  return (
    <div className={styleClass}>
      <Button
        icon="menu-fold"
        className="collapse-button"
        onClick={() => setCollapsed(!collapsed)}
      />
    </div>
  );
}
