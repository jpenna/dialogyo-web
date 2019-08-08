import React from 'react';
import { List } from 'antd';
import styled from 'styled-components';

import Dyo from './index';

const data = [
  {
    headline: 'My Title',
    body: 'Ant Design body 1',
    author: {
      name: 'Dupty Dup',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }
  },
  {
    headline: 'My Title',
    body: 'Ant Design body 2',
    author: {
      name: 'Dupty Dup',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }
  },
  {
    headline: 'My Title',
    body: 'Ant Design body 3',
    author: {
      name: 'Dupty Dup',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }
  },
  {
    headline: 'My Title',
    body: 'Ant Design body 4',
    author: {
      name: 'Dupty Dup',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }
  },
];

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
