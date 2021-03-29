import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconButton } from '../button';
import { IconFavourite } from '../icons';

const CheckboxLabel = styled.label`
  height: 1.6rem;
  margin-right: 2rem;
  position: relative;
  width: 1.6rem;
`;

const CheckboxInput = styled.input`
  height: 100%;
  visibility: hidden;
  width: 100%;
`;

const CheckboxFakeInput = styled.span`
  box-shadow: ${({ theme }) => theme.get('primaryHoverColor')} 0 0 0 0.1rem
    inset;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const ListItem = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.get('formElementBackground')};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 3rem;
  padding: 0 2rem;
  width: 100%;

  &:hover {
    background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);
  }

  &:not(:first-child) {
    border-top: 0.1rem solid ${({ theme }) => theme.get('disabled')};
  }
`;

const ActionsPanel = styled.div``;

const TaskTitleWrapper = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const TaskTitle = styled.input`
  background: transparent;
  border: none;
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 0;
  width: 100%;

  &:focus {
    cursor: text;
  }
`;

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <ListItem>
      <CheckboxLabel>
        <CheckboxInput disabled={true} name="checked" type="checkbox" />
        <CheckboxFakeInput
          onClick={() => onArchiveTask(id)}
          role="button"
          tabIndex={0}
        />
      </CheckboxLabel>

      <TaskTitleWrapper>
        <TaskTitle
          placeholder="Input title"
          readOnly={true}
          type="text"
          value={title}
        />
      </TaskTitleWrapper>

      <ActionsPanel>
        <IconButton
          modifiers={state === 'TASK_PINNED' ? ['success'] : []}
          onClick={() => onPinTask(id)}
        >
          <IconFavourite />
        </IconButton>
      </ActionsPanel>
    </ListItem>
  );
};

Task.propTypes = {
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.oneOf(['TASK_ARCHIVED', 'TASK_INBOX', 'TASK_PINNED'])
      .isRequired,
  }).isRequired,
};

export default Task;
