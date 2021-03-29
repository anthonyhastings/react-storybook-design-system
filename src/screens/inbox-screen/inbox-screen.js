import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { archiveTask, pinTask } from '../../slices/tasks';
import TaskList from '../../components/task-list';

const Page = styled.div`
  background-color: ${({ theme }) => theme.get('formElementBackground')};
  min-height: 100vh;
`;

const PageHeader = styled.div`
  background-color: ${({ theme }) => theme.get('primaryColor')};
  padding: 1.5rem;
  text-align: center;
`;

const PageHeading = styled.h1`
  color: ${({ theme }) => theme.get('textColorOnPrimary')};
  font-size: 2rem;
  line-height: ${24 / 20};
  font-family: ${({ theme }) => theme.get('primaryFont')};
  font-weight: 400;
  margin: 0;
`;

const InboxScreen = () => {
  const dispatch = useDispatch();
  const onArchiveTask = useCallback((id) => dispatch(archiveTask(id)), [
    dispatch,
  ]);
  const onPinTask = useCallback((id) => dispatch(pinTask(id)), [dispatch]);
  const tasks = useSelector((state) =>
    state.tasks.filter(
      (task) => task.state === 'TASK_INBOX' || task.state === 'TASK_PINNED'
    )
  );

  return (
    <Page>
      <PageHeader>
        <PageHeading>Taskbox</PageHeading>
      </PageHeader>
      <TaskList
        onArchiveTask={onArchiveTask}
        onPinTask={onPinTask}
        tasks={tasks}
      />
    </Page>
  );
};

export default InboxScreen;
