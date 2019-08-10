import React from 'react';
import { List } from 'antd';

import Dyo from './index';

import data from './data';

export default function DyoList() {
  return (
    <List
      style={{ padding: '0 20px' }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Dyo {...item} />
        </List.Item>
      )}
    />
  );
}
