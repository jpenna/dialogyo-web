import React from 'react';
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import styled from 'styled-components';

export interface DyoProps {
  author: {
    name: string;
    avatar: string;
  };
  body: string;
  headline: string;
}

const CommentStyled = styled(Comment)`
  max-width: 700px;
  width: 100%;
`;

export default function Dyo(props: DyoProps) {
  const { author, body, headline } = props;

  return (
    <>
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
    </>
  );
}
