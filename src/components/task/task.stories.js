import React from 'react';
import Task from './task';

const Template = (props) => <Task {...props} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    state: 'TASK_INBOX',
    title: 'Test Task',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

const signature = {
  component: Task,
  title: 'Components/Task',
};

export default signature;
