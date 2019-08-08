import React from 'react';
import { Comment, Icon, Tooltip, Avatar, List, Tag } from 'antd';
import moment from 'moment';
import styled from 'styled-components';

import './index.scss';

export interface DyoProps {
  author: {
    name: string;
    avatar: string;
  };
  body: string;
  headline: string;
  mode: string;
  dyosList: { avatar: string }[]
}

const CommentStyled = styled(Comment)`
  max-width: 700px;
  width: 100%;
`;

const AvatarStyled = styled(Avatar)`
  border: solid 1px #cecece;
  width: 45px;
  height: 45px;
`

export default function Dyo(props: DyoProps) {
  const { author, body, headline, mode, dyosList } = props;

  return (
    <div className="dyo">
      <CommentStyled
        author={author.name}
        avatar={
          <Avatar src={author.avatar} />
        }
        content={
          <>
            <div className="d-flex" style={{ alignItems: 'baseline' }}>
              <Tag
                color={mode === 'private' ? '#f6a62a' : '#325aeb'}
                className="capitalize"
              >
                {mode}
              </Tag>
              <h3 className="fw-600">{headline}</h3>
            </div>
            <p className="mb-0">{body}</p>
          </>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />

      {dyosList.length > 0 ? (
        <div>
          <h3>{dyosList.length} Dyos</h3>
          <List
            className="dyos-list"
            // grid={{ gutter: 16, column: 4 }}
            dataSource={dyosList}
            split={false}
            renderItem={dyo => (
              <List.Item className="d-inline-block mr-15 bb-0">
                <AvatarStyled src={dyo.avatar} />
              </List.Item>
            )}
          />
        </div>
      ) : null}
    </div>
  );
}
