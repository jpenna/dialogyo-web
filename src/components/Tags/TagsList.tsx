import React, { useEffect, useCallback, useRef, useState, RefObject, forwardRef } from 'react';
import { Tag, Input, Icon } from 'antd';

export default forwardRef((props: {}, ref) => {
  const inputElem = useRef(null) as RefObject<Input>;

  const [tags, setTags] = useState([] as string[]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleRemove = useCallback(
    (removedTag: string) => {
      const filtered = tags.filter(tag => tag !== removedTag);
      setTags(filtered);
    },
    [tags]
  );

  useEffect(() => {
    if (inputVisible && inputElem.current) inputElem.current.focus();
  }, [inputVisible, inputElem]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.value.length >= 20) return;
      setInputValue(e.currentTarget.value);
    },
    [setInputValue],
  );

  const handleInputConfirm = useCallback(
    (e: any) => {
      e.preventDefault(); // Don't submit form

      if (!inputValue || tags.indexOf(inputValue) !== -1) return;

      setTags([...tags, inputValue]);
      setInputVisible(true);
      setInputValue('');
    },
    [tags, inputValue],
  );

  return (
    <div>
      {tags.map((tag, index) => (
        <Tag key={tag} closable={index !== 0} onClose={() => handleRemove(tag)}>
          {tag}
        </Tag>
      ))}
      {inputVisible ? (
        <Input
          ref={inputElem}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag onClick={() => setInputVisible(true)} style={{ background: '#fff', borderStyle: 'dashed' }}>
          <Icon type="plus" /> New Tag
        </Tag>
      )}
    </div>
  );
});
