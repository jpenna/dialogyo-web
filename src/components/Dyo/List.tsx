import React from 'react';
import { List } from 'antd';

import Dyo from './Dyo';

import data from './data';

import './List.scss';

export default function DyoList() {
  return (
    <List
      className="dyos-list"
      itemLayout="horizontal"
      dataSource={data}
      rowKey="id"
      renderItem={item => (
        <List.Item className="dyo-item">
          <Dyo {...item} />
        </List.Item>
      )}
    />
  );
}
