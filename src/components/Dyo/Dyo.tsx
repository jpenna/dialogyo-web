import React from 'react';
import { Comment, Tooltip, Avatar, List, Tag, Button } from 'antd';
import moment from 'moment';

import { tagColors } from '@/utils/consts';

import './Dyo.scss';
import { Link } from '@reach/router';

export interface DyoProps {
  author: {
    name: string;
    avatar: string;
  };
  body: string;
  headline: string;
  mode: string;
  dyosList: { avatar: string }[];
  repliesList: { avatar: string, body: string, name: string }[];
  tags: string[];
}

function DyoTag({ tag }: { tag: string }) {
  return (
    <Tag color={tagColors[tag.length % 11]}>
      {tag}
    </Tag>
  );
}

export default function Dyo(props: DyoProps) {
  const { author, body, headline, mode, dyosList, tags, repliesList } = props;

  return (
    <div className="dyo">

      {tags.map(tag => <DyoTag key={tag} tag={tag} />)}

      <Comment
        className="comment"
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
            <p className="dyo-body">{body}</p>
          </>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />

      {dyosList.length > 0 && (
        <div>
          <div>
            <h3 className="d-inline-block mr-20">{dyosList.length} Dyos</h3>
            <Link to="/new-dyo">
              <Button icon="message">Start Dialog</Button>
            </Link>
          </div>


          <List
            className="dyos-list"
            // grid={{ gutter: 16, column: 4 }}
            dataSource={dyosList}
            split={false}
            rowKey="id"
            renderItem={dyo => (
              <List.Item className="d-inline-block mr-15 bb-0">
                <Avatar src={dyo.avatar} className="avatar" />
              </List.Item>
            )}
          />
        </div>
      )}

      {repliesList.length > 0 && (
        <div>
          <h3 className="d-inline-block mr-20">{repliesList.length} Replies</h3>

          ADD text box

          <List
            className="replies-list"
            // grid={{ gutter: 16, column: 4 }}
            dataSource={repliesList}
            split={false}
            rowKey="id"
            renderItem={reply => (
              <Comment
                // actions={actions}
                className="comment"
                author={reply.name}
                avatar={
                  <Avatar src={reply.avatar} alt={reply.name} />
                }
                content={<p>{reply.body}</p>}
                datetime={
                  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
              />

              // <List.Item>
              //   <Avatar src={reply.avatar} />
              //   <div>{reply.body}</div>
              // </List.Item>
            )}
          />
        </div>
      )}
    </div>
  );
}
