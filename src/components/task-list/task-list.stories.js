import React from 'react';
import { withPadding } from '../../../.storybook/decorators';
import TaskList from './task-list';
import { Default as TaskDefaultStory } from '../task/task.stories';

const Template = (props) => <TaskList {...props} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...TaskDefaultStory.args.task, id: '1', title: 'Task 1' },
    { ...TaskDefaultStory.args.task, id: '2', title: 'Task 2' },
    { ...TaskDefaultStory.args.task, id: '3', title: 'Task 3' },
    { ...TaskDefaultStory.args.task, id: '4', title: 'Task 4' },
    { ...TaskDefaultStory.args.task, id: '5', title: 'Task 5' },
    { ...TaskDefaultStory.args.task, id: '6', title: 'Task 6' },
  ],
};

export const PinnedTasks = Template.bind({});
PinnedTasks.storyName = 'With Pinned Tasks';
PinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.storyName = 'When Loading';
Loading.args = {
  loading: true,
};

export const Empty = Template.bind({});
Empty.storyName = 'When Empty';
Empty.args = {};

const signature = {
  args: {
    loading: false,
    tasks: [],
  },
  component: TaskList,
  decorators: [withPadding],
  title: 'Components/TaskList',
};

export default signature;
