import React, { useEffect, FormEvent, useCallback } from 'react';
import { Form, Icon, Input, Button, Radio, Tooltip, Avatar, Typography } from 'antd';
import { FormComponentProps } from 'antd/es/form';

import './NewTopic.scss';

const { TextArea } = Input;
const { Text } = Typography;

interface NewTopicProps extends FormComponentProps {
  name: string;
  body: string;
}

function hasErrors(fieldsError: any) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function NewTopic(props: NewTopicProps) {
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

  useEffect(() => {
    props.form.validateFields(); // To disabled submit button at the beginning.
  }, []);

  const fieldHasErrors = useCallback((fieldName: string) => {
    // Only show error after a field is touched.
    return (isFieldTouched(fieldName) && getFieldError(fieldName) && 'error') || '';
  }, [])

  function handleSubmit(event: FormEvent<{}>) {
    event.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <section className="new-topic">
      <div className="mb-15">
        <Avatar size={50} src="https://api.adorable.io/avatars/100/90" />
        <Text strong className="ml-15">Kiryo Mask</Text>
      </div>

      <Form
        onSubmit={handleSubmit}
        layout="horizontal"

        colon={false}
      >
        <Form.Item
          label="Headline"
          validateStatus={fieldHasErrors('headline')}
          help={fieldHasErrors('headline') || ''}
        >
          {getFieldDecorator('headline')(
            <Input
              prefix={<Icon type="bulb" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="I'm talking about..."
            />,
          )}
        </Form.Item>

        <Form.Item
          label="Content"
          validateStatus={fieldHasErrors('content')}
          help={fieldHasErrors('content') || ''}
        >
          {getFieldDecorator('content', {
            rules: [{
              required: true,
              min: 10,
              message: 'Say something...',
            }]
          })(
            <TextArea
              placeholder="These are my thoughts..."
              autosize={{ minRows: 4 }}
            />,
          )}
        </Form.Item>

        <Form.Item
          label={
            <span>
              Privacy&nbsp;
              <Tooltip title="Public: replies and dyos are visible to everybody. Private: only you can see replies and dyos and decide to make it public.">
                <Icon type="info-circle" />
              </Tooltip>
            </span>
          }
          validateStatus={fieldHasErrors('privacy')}
          help={fieldHasErrors('privacy') || ''}
        >
          {getFieldDecorator('privacy', { initialValue: '*' })(
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="*">Public</Radio.Button>
              <Radio.Button value="">Private</Radio.Button>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item
          label={
            <span>
              Tags&nbsp;
              <Tooltip title="Select at least 3 tags to make your content visible to others.">
                <Icon type="info-circle" />
              </Tooltip>
            </span>
          }
          validateStatus={fieldHasErrors('tags')}
          help={fieldHasErrors('tags') || ''}
        >
          {getFieldDecorator('tags', {
            initialValue: [],
            rules: [{
              required: true,
            }],
          })(
            <Input />,
          )}
        </Form.Item>

        <div className="mb-50 flex-split">
          <Button onClick={() => history.back()}>
           Cancel
          </Button>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Let's talk!
          </Button>
        </div>
      </Form>
    </section>
  );
}

export default Form.create({ name: 'newTopic' })(NewTopic);
