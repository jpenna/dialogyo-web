
import React from 'react';
import { Icon } from 'antd';
import { MatchRenderProps } from '@reach/router';

export default (props: MatchRenderProps<null>) => {
  if (!/new-topic/.test(props.location.pathname)) return null;

  return (
    <a href="javascript:history.back()">
      <Icon type="left" />
      Back
    </a>
  );
}
