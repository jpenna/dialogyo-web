import React from 'react';
import { List } from 'antd';
import styled from 'styled-components';

import Dyo from './index';

import data from './data';

export default function DyoList() {
  return (
    <List
      style={{ maxWidth: '700px', margin: 'auto' }}
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
