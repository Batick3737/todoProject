import React, { useState, useEffect } from 'react';
import './App.css';
import { client } from './utils/fetchClient';
import { Todo } from './react-app-env';
import { TodoItem } from './components/todoItem/TodoItem';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoTitle, setTodoTitle] = useState('');

  const loadTodos = async () => {
    const postsFromServer = await client.get<Todo[]>('todos.json')
    setTodos(postsFromServer);
  }

  const addTodo = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (todoTitle.trim()) {
      setTodos([...todos, {id: Date.now(), title: todoTitle, state: 'notStarted'}])
      setTodoTitle('');
    }
  };

  useEffect(() => {
    loadTodos()
  }, [])

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
        />
      </form>
      {todos.map(todo => (
        <div key={todo.id}><TodoItem todo={todo} todos={todos} setTodos={setTodos}/></div>
      ))}
    </div>
  );
}

export default App;
