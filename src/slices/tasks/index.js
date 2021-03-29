import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ],
  reducers: {
    archiveTask(state, { payload }) {
      const task = state.find((task) => task.id === payload);
      if (task) task.state = 'TASK_ARCHIVED';
    },
    pinTask(state, { payload }) {
      const task = state.find((task) => task.id === payload);
      if (task) task.state = 'TASK_PINNED';
    },
  },
});

export const { archiveTask, pinTask } = tasksSlice.actions;

export default tasksSlice.reducer;
