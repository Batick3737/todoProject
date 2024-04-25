import React, { useState } from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import { Todo } from '../../react-app-env';

export type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  todos,
  setTodos,
}) => {

  const [todoState, setTodoState] = useState(todo.state);

  return (
    <div className="view">
      <select className={classNames('state', `${todoState}`)} required value={todoState} onChange={(event) => setTodoState(event.target.value)}>
        <option className='option' value='notStarted'>notStarted</option>
        <option className='option' value='expected'>expected</option>
        <option className='option' value='completed'>completed</option>
      </select>
      <div>{todo.title}</div>
      <button
        aria-label="Text"
        type="button"
        className="destroy"
        data-cy="deleteTodo"
        onClick={() => {
          setTodos(todos.filter(deleteTodo => deleteTodo.id !== todo.id));
        }}
      >
        X
      </button>
    </div>
  );
};
