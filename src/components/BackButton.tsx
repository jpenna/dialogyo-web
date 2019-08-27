
import React from 'react';
import { Icon } from 'antd';
import { MatchRenderProps, Link } from '@reach/router';

export default (props: MatchRenderProps<null>) => {
  if (!/new-(topic|dyo)/.test(props.location.pathname)) return null;

  return (
    <Link to="/" className="d-block mb-20 ml-30">
      <Icon type="left" />
      Back
    </Link>
  );
}
