import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

interface IProps {
  className?: string;
}

export default function TextBox(props: IProps) {
  return (
    <TextArea
      placeholder="These are my thoughts..."
      autosize={{ minRows: 2 }}
      className={`${props.className} d-block mb-10`}
    />
  )
}
