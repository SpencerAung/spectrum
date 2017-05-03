// @flow
import React from 'react';
// $FlowFixMe
import compose from 'recompose/compose';
// $FlowFixMe
import withState from 'recompose/withState';
// $FlowFixMe
import withHandlers from 'recompose/withHandlers';
import { sendMessage } from '../mutations';

const ChatInput = (props: Object) => (
  <form onSubmit={props.sendMessage}>
    <input type="text" value={props.value} onChange={props.onChange} />
  </form>
);

export default compose(
  sendMessage,
  withState('value', 'changeValue', ''),
  withHandlers({
    onChange: ({ changeValue }) => e => changeValue(e.target.value),
    sendMessage: ({ mutate, value, thread }) => e => {
      e.preventDefault();
      return mutate({
        variables: {
          message: {
            thread,
            message: {
              type: 'text',
              content: value,
            },
          },
        },
      });
    },
  })
)(ChatInput);