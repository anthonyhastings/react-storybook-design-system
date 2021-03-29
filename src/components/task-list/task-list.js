import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { typeScale } from '../../utils/typography';
import Task from '../task';

const glowAnimation = keyframes`
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
`;

const ListItems = styled.div`
  background-color: ${({ theme }) => theme.get('formElementBackground')};
  min-height: 28.8rem;
  position: relative;
`;

const LoadingItem = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.get('formElementBackground')};
  display: flex;
  height: 3rem;
  line-height: 1rem;
  padding-left: 1.6rem;
  width: 100%;

  &:not(:first-child) {
    border-top: 0.1rem solid ${({ theme }) => theme.get('disabled')};
  }
`;

const GlowingItem = styled.span`
  animation: ${glowAnimation} 1.5s ease-in-out infinite;
  background: ${({ theme }) => theme.get('disabled')};
  color: transparent;
  cursor: progress;
  display: inline-block;
`;

const GlowingCheckbox = styled(GlowingItem)`
  height: 1.2rem;
  margin-right: 1.6rem;
  width: 1.2rem;
`;

const NoDataWrapper = styled.div`
  left: 0;
  position: absolute;
  transform: translateY(-50%);
  text-align: center;
  top: 50%;
  width: 100%;
`;

const NoDataTitle = styled.h1`
  color: ${({ theme }) => theme.get('textColor')};
  font-family: ${({ theme }) => theme.get('primaryFont')};
  font-size: ${typeScale.get('header3')};
  font-weight: 400;
  line-height: 2.4rem;
  margin-top: 0;
`;

const NoDataSubtitle = styled.h2`
  color: ${({ theme }) => theme.get('textColor')};
  font-family: ${({ theme }) => theme.get('primaryFont')};
  font-size: ${typeScale.get('header4')};
  font-weight: 400;
  line-height: 2rem;
  margin-bottom: 0;
`;

const TaskList = ({ loading = false, tasks, onPinTask, onArchiveTask }) => {
  if (loading) {
    return (
      <ListItems>
        {new Array(10).fill(undefined).map((_, index) => (
          <LoadingItem key={index}>
            <GlowingCheckbox />
            <span>
              <GlowingItem>Loading</GlowingItem> <GlowingItem>cool</GlowingItem>{' '}
              <GlowingItem>state</GlowingItem>
            </span>
          </LoadingItem>
        ))}
      </ListItems>
    );
  }

  if (tasks.length === 0) {
    return (
      <ListItems>
        <NoDataWrapper>
          <NoDataTitle>You have no tasks</NoDataTitle>
          <NoDataSubtitle>Sit back and relax</NoDataSubtitle>
        </NoDataWrapper>
      </ListItems>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((task) => task.state === 'TASK_PINNED'),
    ...tasks.filter((task) => task.state !== 'TASK_PINNED'),
  ];

  return (
    <ListItems>
      {tasksInOrder.map((task) => (
        <Task
          key={task.id}
          task={task}
          onArchiveTask={onArchiveTask}
          onPinTask={onPinTask}
        />
      ))}
    </ListItems>
  );
};

TaskList.propTypes = {
  /** Toggle to place component in a loading state */
  loading: PropTypes.bool,
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
  /** List of tasks */
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
};

export default TaskList;
