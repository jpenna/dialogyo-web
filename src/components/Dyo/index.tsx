import React from 'react';
import { Comment, Icon, Tooltip, Avatar, List } from 'antd';
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

const DyoStyled = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const AvatarStyled = styled(Avatar)`
  border: solid 1px #cecece;
  width: 45px;
  height: 45px;
`

export default function Dyo(props: DyoProps) {
  const { author, body, headline, mode, dyosList } = props;

  return (
    <DyoStyled>
      <CommentStyled
        author={author.name}
        avatar={
          <Avatar src={author.avatar} />
        }
        content={
          <>
            <h3>{headline}</h3>
            <p className="mb-0">{body}</p>
          </>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />

      <h3>{mode}</h3>

      {dyosList.length > 0 ? (
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
      ) : null}
    </DyoStyled>
  );
}
